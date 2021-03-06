import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  render () {
    return (
      <html>
        <Head>
          <title>Next.js Quickstart</title>
          <style>{`body { margin: 2em } /* custom! */`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
