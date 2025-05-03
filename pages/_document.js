import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        {/* Force light mode for consistent display */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Force light mode for all users to ensure consistent display
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
          `
        }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
