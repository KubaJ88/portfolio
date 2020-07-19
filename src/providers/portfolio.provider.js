import React, {createContext, useState} from 'react';




export const PortfolioContext = createContext({

    showPortfolio: false,
    togglePortfolio: () => {},
    revealProfile : {
        show:true,
        title:null,
        img: '1.png',
        key:1
    }, 
    changeProject: () => {},
    featuredProject : {
        show:false,        
        img: '1.png',
        key:null,
        desc: null
    },
    setFeaturedProject: () => {}


   
    
});


const PortfolioProvider = ({children}) => {
    const [showPortfolio, setShowPortfolio] = useState(false)
    const togglePortfolio = (state) => setShowPortfolio(state)
    const [revealProfile, setRevealProfile] = useState({
        show:false,
        name:null,
        img:'1.png',
        key:1
    })
    const changeProject = (item, state) => {
        setRevealProfile({
            show: state,
            name: item.name,
            img: item.img,
            key: item.id,
            desc: item.desc
        })

    }

    const [featuredProject, setFeaturedProject] = useState({
        show:false,        
        img: '1.png',
        key:null
    })

    const showFeatureProject = (item, state) => {
        setFeaturedProject({
            show:state,
            img: item.img,
            key: item.id
        })
    }


    return(
        <PortfolioContext.Provider value={{
            showPortfolio, 
            togglePortfolio,
            changeProject,
            revealProfile,
            showFeatureProject,
            featuredProject
           
        }}>
            {children}
        </PortfolioContext.Provider>
    )

}

export default PortfolioProvider;