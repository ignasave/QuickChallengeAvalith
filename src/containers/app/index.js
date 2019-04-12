import './app.css'
import BreedDetail from '../BreedDetail';
import List from '../List'
import Header from '../Header'
import PageNotFound from '../PageNotFound'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => (
  <div className="app">
  
    <header>
      <Header></Header>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/breeds/:breed" component={BreedDetail} />
        <Route component={PageNotFound}></Route>
      </Switch>
    </main>
  </div>
)

export default App
