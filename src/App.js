import React from 'react';
import './styles/main.scss';
import Photo from './components/photo/photo.component';
import Profile from './components/profile/profile.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="container">   
    <Photo/>
    <Profile/>
    </div>
  );
}

export default App;
