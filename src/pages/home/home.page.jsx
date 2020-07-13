import React from 'react';
import Photo from '../../components/photo/photo.component';
import Profile from '../../components/profile/profile.component';
import {motion} from 'framer-motion';
import './home.style.scss';

const HomePage = () => {

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="homepage">
        <Photo/>
        <Profile/>
        </motion.div>
    )
}

export default HomePage;
