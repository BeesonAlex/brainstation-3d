
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import Hero from '../src/components/hero/Hero';
import Datamodule from '../src/components/datamodule/Datamodule';
import Popularity from '../src/components/popularity/Popularity';
import Sentiment from '../src/components/sentiment/Sentiment';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="app">
      <BrowserRouter>
      <Navbar />
      <Hero />
      <Switch>
      <Route path="/" component={Datamodule} />
      <Route path="/popularity" exact component={Popularity} />
      <Route path="/sentiment" exact component={Sentiment} />
      </Switch>
      </BrowserRouter>
    </div>
    )
  }
}

export default App