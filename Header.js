import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {Link} from 'react-router-dom';
import './header.css';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function 
Header() {
    return (
        <div className="header">
        <div className="header_left"><SportsEsportsIcon /> </div>
        <div className="header_right"><AccountBalanceIcon  style={{color:'#fff'}}/>0.00
       <Link to="/login"><div className="user">Sign in</div></Link> 
        
        </div>
          
        </div>
    )
}

export default 
Header
