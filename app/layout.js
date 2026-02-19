import "../styles/global.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import Header from "./components/Header";
import Script from "next/script";

import { myCustomFont } from "./fonts"; // ✅ Import the custom font


export const metadata = {
  title: "PEACH Lab",
  description: "Programming, Education, and Computer-Human Interaction Lab, ETH Zurich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myCustomFont.variable} suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Providers>
          <Header />
          <Navbar />
          <div className="main">
            {children}
          </div>
          <Footnote />
        </Providers>
      </body>
    </html>
  );
}
