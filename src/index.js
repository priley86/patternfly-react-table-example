import React from 'react';
import ReactDOM from 'react-dom';
window.globalNonce = 'emotion';

import { App } from './App';
import '@patternfly/react-core/dist/styles/base.css';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
