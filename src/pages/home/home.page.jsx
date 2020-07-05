import React from 'react';
import Photo from '../../components/photo/photo.component';
import Profile from '../../components/profile/profile.component';
import './home.style.scss';

const HomePage = () => {

    return (
        <div className="homepage">
        <Photo/>
        <Profile/>
        </div>
    )
}

export default HomePage;
