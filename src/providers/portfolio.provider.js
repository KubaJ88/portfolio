import React, {createContext, useState} from 'react';




export const PortfolioContext = createContext({

    showPortfolio: false,
    togglePortfolio: () => {},
    revealProfile : {
        show:false,
        title:null,
        img: '1.png',
        key:null
    }, 
    changeProject: () => {}


   
    
});


const PortfolioProvider = ({children}) => {
    const [showPortfolio, setShowPortfolio] = useState(false)
    const togglePortfolio = () => setShowPortfolio(!showPortfolio)
    const [revealProfile, setRevealProfile] = useState({
        show:false,
        name:null,
        img:'1.png',
        key:null
    })
    const changeProject = (item, state) => {
        setRevealProfile({
            show: state,
            name: item.name,
            img: item.img,
            key: item.id
        })

    }


    return(
        <PortfolioContext.Provider value={{
            showPortfolio, 
            togglePortfolio,
            changeProject,
            revealProfile
           
        }}>
            {children}
        </PortfolioContext.Provider>
    )

}

export default PortfolioProvider;