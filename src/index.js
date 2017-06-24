import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Header from './components/common/Header';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
