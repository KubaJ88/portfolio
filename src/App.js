import React from 'react';
import './styles/main.scss';
import Photo from './components/photo/photo.component';
import Profile from './components/profile/profile.component';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import Project from './pages/projects/projects.page';

function App() {
  return (
    <div className="container">   
    <HomePage/>
    <Project/>
    </div>
  );
}

export default App;
