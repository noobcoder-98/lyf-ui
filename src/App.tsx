import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
  BrowserRouter,
} from 'react-router-dom'
import Header from './components/Header'
import Sidebar from 'components/Sidebar'
import Stake from 'views/Stake'
import Farm from 'views/Farm'
import FarmDetail from 'views/Farm/FarmDetail'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="page">
            <div className="content">
              <Switch>
                <Route path={'/farm'} component={Farm} />
                <Route path={'/farmdetail'} component={FarmDetail}/>
                <Route path={'/stake'} component={Stake} />
                <Redirect from='/' to={'/stake'} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
