import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
} from 'react-router-dom'
import Header from './components/Header'
import Sidebar from 'components/Sidebar'
import Stake from 'views/Stake'
import Farm from 'views/Farm'
import FarmDetail from 'views/Farm/FarmDetail'
import Lending from 'views/Lending'
import LendingDetail from 'views/Lending/LendingDetail'

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
                <Route exact path={'/farm'} component={Farm} />
                <Route path={'/farm/:id'} component={FarmDetail}/>
                <Route path={'/stake'} component={Stake} />
                <Route exact path={'/lending'} component={Lending} />
                <Route path={'/lending/:type/:id'} component={LendingDetail} />
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
