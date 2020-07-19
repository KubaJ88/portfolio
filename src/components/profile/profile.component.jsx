import React from 'react';
import './profile.styles.scss';
import {motion} from 'framer-motion';

import Welcome from '../welcome/welcome.component';
import FeaturedProjects from '../featured_projects/featured_projects.component';




const Profile = () => { 



    return (
        <motion.div className="profile"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration: 2.5
        }}
        >
           {/* <Header/> */}
           <Welcome/>
           <FeaturedProjects/>
        </motion.div>
    )
}


export default Profile;