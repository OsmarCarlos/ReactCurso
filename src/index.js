import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Name from './Components/name';
import Hora from './Components/hora';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Name />, document.getElementById('name'));

ReactDOM.render(<Hora />, document.getElementById('hora'));

registerServiceWorker();
