import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

import App from "./containers/App";
import ErrorBoundary from "./ErrorBoundary";

const fontObserver = new FontFaceObserver('Poppins');

fontObserver.load().then(() => {
  document.body.classList.add('font-loaded');
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

