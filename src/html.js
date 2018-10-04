import React from 'react';
import favicon16 from '!file-loader!../static/favicon-16x16.png';
import favicon32 from '!file-loader!../static/favicon-32x32.png';
import favicon96 from '!file-loader!../static/favicon-96x96.png';
import appleTouchIcon from '!file-loader!../static/apple-touch-icon-180x180.png';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{__html: stylesStr}} />;
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>Jacob Wenger</title>

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="keywords" content="Jacob Wenger, entrepreneur, personal site" />
          <meta
            name="description"
            content="Jacob Wenger is an entrepreneur and experience builder."
          />
          <meta name="author" content="Jacob Wenger" />
          <meta name="theme-color" content="#C6D7C7" />

          <link rel="shortcut icon" type="image/png" href={favicon16} sizes="16x16" />
          <link rel="shortcut icon" type="image/png" href={favicon32} sizes="32x32" />
          <link rel="shortcut icon" type="image/png" href={favicon96} sizes="96x96" />

          <link rel="apple-touch-icon" href={appleTouchIcon} sizes="180x180" />

          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          <noscript>
            <p>Sorry Internet hipster, this website requires JavaScript.</p>
          </noscript>

          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{__html: this.props.body}} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
