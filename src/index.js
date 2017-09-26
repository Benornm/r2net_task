import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from "./components/matrix";


const App = () => <Main/>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
