import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import article from './article'

export default (
  <Router>
    <div>
      <Route component={ App } path="/" />
      <Route component={ article } path="/article" />
    </div>
  </Router>
)
