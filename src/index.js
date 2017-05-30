import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './containers/Scoreboard.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Scoreboard />, document.getElementById('root'));
registerServiceWorker();
