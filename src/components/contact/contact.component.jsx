import React from 'react';
import './contact.styles.scss';
import  {ReactComponent as LinkedIn} from '../../img/logo-linkedin.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Twitter} from '../../img/logo-twitter.svg';
import  {ReactComponent as Chart} from '../../img/stats-chart-outline.svg';
import {motion} from 'framer-motion';

const transition = {
    duration: 1.6, ease:[0.25, 0.46, 0.45, 0.94]
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
            whileHover={{scale:1.1, translateY: -4}}
           >
               <a href="mailto:jarosk88@gmail.com">Get In Touch</a>
           </motion.button>
           <motion.div className="contact__icons">
           <motion.div className="icon">
                <a href="https://github.com/KubaJ88" target="_blank" rel="noopener noreferrer">
                <Git/></a></motion.div>
               <motion.div
               
               className="icon">
                 
                 <a href="https://www.linkedin.com/in/jakub-jaros-6a9a6b81/" target="_blank" rel="noopener noreferrer">
                <LinkedIn alt='linkedin'/></a></motion.div>
               <motion.div className="icon"
              
               ><a href="https://twitter.com/jarosk88" target="_blank" rel="noopener noreferrer"><Twitter/></a></motion.div>

               <motion.div className="icon"
               
               ><a href="https://public.tableau.com/profile/jakub.jaros#!/" target="_blank" rel="noopener noreferrer"><Chart/></a></motion.div>
                        
                       
           </motion.div>
       </motion.div>
     

    )
}

export default Contact;