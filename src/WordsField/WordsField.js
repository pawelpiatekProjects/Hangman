import React from 'react';

import Word from './Word/Word';

import {WordField} from './style'

const wordField=(props)=>{
    return(
        <WordField>
            <Word  word={props.word}/>
        </WordField>

    );
};

export default wordField;