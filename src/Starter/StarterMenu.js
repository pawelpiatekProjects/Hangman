import React from  'react';
import {StarterMenu} from './style';
import {Link} from 'react-router-dom';

const starterMenu = ()=>{
    return(
        <StarterMenu>
            <h1>Hangman</h1>
            <Link to='/game'>Play</Link>
        </StarterMenu>
    )
}

export default starterMenu;