import React from 'react';

import Letter from '../Letter/Letter';
import {WordWrapper} from './style';

const word =(props)=>{
    let d = new Date();
//todo: create unique key for every word
    return(
        <WordWrapper>
            {props.word.map(letter=>{
                return <Letter ket={letter.charCodeAt(0)+d.getMilliseconds()}
                               letter={letter.toUpperCase()}
                visable={true}/>

            })}
        </WordWrapper>
    );
};

export default word;