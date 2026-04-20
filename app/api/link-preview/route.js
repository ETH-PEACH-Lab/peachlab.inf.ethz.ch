import { NextResponse } from "next/server";

const META_PATTERNS = [
  /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
  /<title[^>]*>([^<]+)<\/title>/i,
  /<img[^>]+src=["']([^"']+)["'][^>]*>/i,
];

function extract(pattern, html) {
  const match = html.match(pattern);
  return match && match[1] ? match[1].trim() : "";
}

function resolveUrl(candidate, baseUrl) {
  if (!candidate) return "";
  try {
    return new URL(candidate, baseUrl).toString();
  } catch {
    return "";
  }
}

function isBlockedHost(hostname) {
  const host = hostname.toLowerCase();
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".local") ||
    host.startsWith("10.") ||
    host.startsWith("192.168.")
  );
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const rawUrl = searchParams.get("url") || "";

  let targetUrl;
  try {
    targetUrl = new URL(rawUrl);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (!["http:", "https:"].includes(targetUrl.protocol)) {
    return NextResponse.json({ error: "Unsupported protocol" }, { status: 400 });
  }

  if (isBlockedHost(targetUrl.hostname)) {
    return NextResponse.json({ error: "Blocked host" }, { status: 400 });
  }

  const fallbackImage = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(targetUrl.toString())}?w=1200`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);

  try {
    const res = await fetch(targetUrl.toString(), {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PeachLabBot/1.0)",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return NextResponse.json({ image: fallbackImage }, { status: 200 });
    }

    const html = await res.text();

    const ogImage = resolveUrl(extract(META_PATTERNS[0], html), targetUrl.toString());
    const twitterImage = resolveUrl(extract(META_PATTERNS[1], html), targetUrl.toString());
    const title = extract(META_PATTERNS[2], html) || extract(META_PATTERNS[5], html);
    const description = extract(META_PATTERNS[3], html) || extract(META_PATTERNS[4], html);
    const firstImage = resolveUrl(extract(META_PATTERNS[6], html), targetUrl.toString());

    return NextResponse.json(
      {
        title,
        description,
        image: ogImage || twitterImage || firstImage || fallbackImage,
      },
      { status: 200 }
    );
  } catch {
    clearTimeout(timeoutId);
    return NextResponse.json({ image: fallbackImage }, { status: 200 });
  }
}
