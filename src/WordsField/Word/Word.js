import React from 'react';

import Letter from '../Letter/Letter';
import {WordWrapper} from './style';

const word =(props)=>{
    return(
        <WordWrapper>
            {props.word.map(letter=>{
                return <Letter letter={letter.toUpperCase()}/>
            })}
        </WordWrapper>
    );
};

export default word;