import React from 'react';
import './description.styles.scss';
import {PortfolioContext} from '../../providers/portfolio.provider';
import { useContext } from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const ease = [.6, .05, -.01, .9];
const Description = () => {

    const {revealProfile} = useContext(PortfolioContext)    
    
    
    



    return (
        <>
      
            <motion.div className="desc"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0   }}
            animate={{ opacity: 1}}
            transition={{
                duration: .5,
                ease: ease
            }}
            >
        <AnimatePresence>
        {revealProfile.show && (
            <>
        <motion.div className="reveal"
        animate={{ width: revealProfile.show ? 0 : '100%' }}
        exit={{width:'100%'}}
        transition={{
            duration: .5,
            ease: ease,
            delay: 0.2
        }}
        
        ></motion.div>
            
            <AnimatePresence initial={false} exitBeforeEnter>
            <motion.img className="desc__photo"
            key={revealProfile.key}
            src={require(`../../img/projects/${revealProfile.img}`)}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0   }}
            animate={{ opacity: 1}}
            transition={{
                duration: .5,
                ease: ease
            }}
            >
                
            </motion.img>
            </AnimatePresence>
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
               {revealProfile.desc}
            </div>
            
            </>
        )}
        </AnimatePresence>
        </motion.div>
        
        </>
    )
}

export default Description;