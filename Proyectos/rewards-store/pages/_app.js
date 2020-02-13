import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import  theme  from "../styles/theme";
import CssBaseline from '@material-ui/core/CssBaseline';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Provider store={reduxStore}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
