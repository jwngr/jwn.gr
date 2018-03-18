import React from 'react';
import favicon from '!file-loader!../static/favicon-32x32.ico';

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

          <link rel="shortcut icon" href={favicon} />

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
