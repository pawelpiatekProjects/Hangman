import React from 'react';

import Body from './Body/Body';
import NewBody from './Body/NewBody';

import {Wrapper} from './style';

const hangman =(props)=>{
    return(
        <Wrapper>
            <Body errors={props.errors}/>
        </Wrapper>
    );
};

export default hangman;