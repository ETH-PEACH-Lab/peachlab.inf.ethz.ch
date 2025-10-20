import "../styles/global.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";
import { setInitialTheme } from "./theme-init";

import { myCustomFont } from "./fonts"; // ✅ Import the custom font


export const metadata = {
  title: "PEACH Lab",
  description: "Programming, Education, and Computer-Human Interaction Lab, ETH Zurich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myCustomFont.variable} custom-light`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Providers>
          <Navbar />
          <div className="main" style={{ flex: 1, maxWidth: "1400px", width: "100%", margin: "0 auto", padding: "2rem" }}>
            {children}
          </div>
          <Footnote />
        </Providers>
      </body>
    </html>
  );
}
