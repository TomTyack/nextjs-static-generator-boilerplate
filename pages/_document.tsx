import { NextHeadWithInlineCss } from '../components/NextHeadWithInlineCss';

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <NextHeadWithInlineCss />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}