import React from 'react';
import './contact.styles.scss';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Star} from '../../img/star-outline.svg';
import {motion, AnimatePresence} from 'framer-motion';

const transition = {
    duration: 1.4, ease:[.6,.01,-.05,.9]
}   
//   const stagger ={
//     initial: {
//       y:0
//     },
//     animate: {
//       y:0,
//       transition: {
//         delayChildren: 0.6,
//         staggerChildren: 0.4,
//         // staggerDirection: -1
//       }
//     }
//   }

const stagger = {
    animate: {
      transition: {        
        staggerChildren: .3,       
        delayChildren: .5,
        ease:[.6,.01,-.05,.9]
        
      }
    }
  }
  
  const header = {
    initial: {
      y:-40,
      opacity:0
    },
    animate: {
      y:0,
      opacity:1,
      transition: {duration:.3, ...transition}
      
    }
  }

const Contact = () => {

    return(
       
       <motion.div className="contact"        
        variants={stagger}
        initial='initial'
        animate='animate'
       >
           <motion.div className="contact__title"
           variants={header}
          
           >
               About Me
           </motion.div>
           <motion.div className="contact__text"
            variants={header}
            
           >
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quis ratione perferendis modi voluptatum illo quas fugit cumque dolorem et, maxime deserunt obcaecati doloremque beatae ducimus officiis exercitationem odio aut dolores sequi molestiae in atque dolorum suscipit! Ducimus accusantium quo ipsam sint tempora culpa similique eligendi, quis obcaecati necessitatibus molestias.
           </motion.div>
           <motion.button className="cta-contact"          
            variants={header}
            whileHover={{scale:1.1}}
           >
               <a href="mailto:jarosk88@gmail.com">Get In Touch</a>
           </motion.button>
           <motion.div className="contact__icons">
           <motion.div
                        whileHover={{scale:1.1, color: '#ffd700'}}
                        className="icon"><Planet alt='planet'/></motion.div>
                        <motion.div className="icon"
                        whileHover={{scale:1.1, fill: '#ffd700'}}
                        ><Git/></motion.div>
                        <div className="icon"><Star/></div>
           </motion.div>
       </motion.div>
     

    )
}

export default Contact;