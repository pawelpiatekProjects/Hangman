import React from 'react';

import Letter from '../Letter/Letter';
import {WordWrapper} from './style';

const word =()=>{
    return(
        <WordWrapper>
            <Letter letter="H"/>
            <Letter letter="A"/>
            <Letter letter="N"/>
            <Letter letter="G"/>
            <Letter letter="M"/>
            <Letter letter="A"/>
            <Letter letter="N"/>
        </WordWrapper>
    );
};

export default word;