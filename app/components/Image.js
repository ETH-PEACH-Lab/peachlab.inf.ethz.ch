import NextImage from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Image = ({ src, width, height, ...rest }) => {
  // Prefix asset paths with NEXT_PUBLIC_BASE_PATH (e.g. "/primer" on GitHub Pages)
  const finalSrc = src.startsWith("/") ? `${basePath}${src}` : src;

  return (
    <NextImage
      unoptimized
      width={width || 800}
      height={height || 600}
      src={finalSrc}
      {...rest}
    />
  );
};

export default Image;
