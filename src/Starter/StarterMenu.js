import React from  'react';
import {StarterMenu,HangmanContainer} from './style';
import {Link} from 'react-router-dom';
import NewBody from '../Hangman/Body/NewBody';

const starterMenu = ()=>{
    return(
        <StarterMenu>
            <HangmanContainer>
                <NewBody/>
            </HangmanContainer>
            <div>
            <h1>Hangman</h1>
            <Link to='/game'>Play</Link>
            </div>

        </StarterMenu>
    )
}

export default starterMenu;