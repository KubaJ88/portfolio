import React, { useContext } from 'react';
import './header.styles.scss';
import {PortfolioContext} from '../../providers/portfolio.provider';
import { useEffect } from 'react';

const Header = () => {

    const {togglePortfolio, showPortfolio} = useContext(PortfolioContext)
    

    

    return ( 
        <>
        <header className="header">
            <nav className='header__nav'>
            <p onClick={togglePortfolio}>{showPortfolio ? 'Home' : 'Projects'}</p>
            <p>About Me</p>
            </nav>
        </header>
        </>
    )
}

export default Header;
