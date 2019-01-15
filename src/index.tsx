import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import 'sanitize.css';
import './styles/styles.scss';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700', 'sans-serif']
    }
});

import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
