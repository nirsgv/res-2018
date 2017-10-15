import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if(window.location.origin.includes("localhost")){
    window.ENV = 'dev';
    window.img_prefix = '';
} else if (window.location.origin.includes("apps2.reshet.tv")){
    window.ENV = 'stage';
    //window.img_prefix = 'wp-content/themes/adv/advShows/';
    window.img_prefix = '';
} else if (window.location.origin.includes("b2b.reshet.tv")){
    window.ENV = 'prod';
    window.img_prefix = 'wp-content/themes/adv/advShows/';
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
