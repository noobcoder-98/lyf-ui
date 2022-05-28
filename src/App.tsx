import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, useParams, Redirect, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import Stake from 'views/Stake/Stake';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className='main'>
          <Sidebar />
          <div className='page'>
            <div className='content'>
              <Switch>
                <Route path={'/stake'} component={Stake}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
