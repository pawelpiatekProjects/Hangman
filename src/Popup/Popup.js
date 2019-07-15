import React from 'react';
import {Link} from 'react-router-dom';

import {PopupWrapper, PopupInfo} from './style'

const popup = (props)=>{
    let messageState = props.ending;
    let state;
    console.log(messageState);
    if(messageState.length>0){
        state = 1;
    }else {
        state = 0;
    }
    let message='';
    if(props.ending === 'lost'){
        message = 'You lost'
    }
    else if(props.ending === 'won'){
        message = 'You won'
    }
    return(

        <PopupWrapper state={state}>
            <PopupInfo>
                <h1>{message}</h1>
                <Link to='/'>Play Again</Link>
            </PopupInfo>

        </PopupWrapper>
    );
};

export default popup;