import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Name from './Components/name';
import Hora from './Components/hora';
import Form from './Components/form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form />, document.getElementById('form'))

registerServiceWorker();
