import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />

        <link
          rel="stylesheet"
          href="https://todomvc.com/examples/react/node_modules/todomvc-common/base.css"
        />

        <link
          rel="stylesheet"
          href="https://todomvc.com/examples/vanilla-es6/node_modules/todomvc-app-css/index.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
