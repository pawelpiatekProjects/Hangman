import React from 'react';

import {PopupWrapper} from './style'

const popup = (props)=>{
    let state = props.ending;
    let message='';
    if(props.ending === 'lost'){
        message = 'You lost'
    }
    else if(props.ending === 'won'){
        message = 'You won'
    }
    return(

        <PopupWrapper state>{message}</PopupWrapper>
    );
};

export default popup;