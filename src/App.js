import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/main.scss';


import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import Project from './pages/projects/projects.page';
import AboutMe from './pages/about-me/about-me.page'; 
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
    <Header/>
    <Route 
    render={({location}) => (
     
    <div className="container">
    <AnimatePresence exitBeforeEnter> 
    <Switch location={location} key={location.pathname}>   
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/projects' component={Project}/>       
    <Route exact path='/about-me' component={AboutMe}/>       
    </Switch>
    </AnimatePresence>
    </div>
    )}
    />
    </Router>
  );
}

export default App;
