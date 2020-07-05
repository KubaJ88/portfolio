import React from 'react';
import './description.styles.scss';
import {PortfolioContext} from '../../providers/portfolio.provider';
import { useContext } from 'react';
import {motion, AnimatePresence} from 'framer-motion';


const Description = () => {

    const {revealProfile} = useContext(PortfolioContext)
    
    


    return (
        <>
      
        <motion.div className="desc">
        <AnimatePresence exitBeforeEnter >
        {revealProfile.show && (
        <>
        <motion.div className="reveal"
        animate={{ width: revealProfile.show ? 0 : '100%' }}
        exit={{width:'100%'}}
        transition={{
            duration: .5,
            ease: 'easeInOut'
        }}
        
        ></motion.div>
            <motion.img className="desc__photo"
            key={revealProfile.key}
            src={require(`../../img/projects/${revealProfile.img}`)}
            >
                
            </motion.img>
           
            <motion.div className="desc__title"
           
             initial={{ opacity: 0 }}
             exit={{ opacity: 0   }}
             animate={{ opacity: 1}}
             transition={{
                 duration: .5,
                 ease: 'easeInOut'
             }}
            
            >
                {revealProfile.name}
            </motion.div>
            <div className="desc__details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, eaque.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, eaque.
            </div>
            </>
        )}
        </AnimatePresence>
        </motion.div>
        
        </>
    )
}

export default Description;