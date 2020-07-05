import {createContext} from 'react';

const PortfolioContext = createContext({

    showPortfolio: true,
    togglePortfolio: () => {}
    
});


export default PortfolioContext;