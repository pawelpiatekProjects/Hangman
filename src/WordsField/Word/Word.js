import React from 'react';

import Letter from '../Letter/Letter';
import {WordWrapper} from './style';

const word =(props)=>{
    let d = new Date();
//todo: create unique key for every word
    return(
        <WordWrapper>
            {props.word.map(letter=>{
                return <Letter letter={letter.wordContent.toUpperCase()}
                visable={letter.corectness}
                empty={letter.empty}/>

            })}
        </WordWrapper>
    );
};

export default word;