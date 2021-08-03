import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

ReactDOM.render(
  <React.StrictMode>
    <Container className='themed-container' fluid={true}>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
