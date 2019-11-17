import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards/cards.jsx';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
