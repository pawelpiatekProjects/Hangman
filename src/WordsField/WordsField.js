import React from 'react';

import Word from './Word/Word';

import {WordField,CategoryHint} from './style'

const wordField=(props)=>{
    return(
        <WordField>
            <Word  word={props.word}/>
            <CategoryHint>Category: {props.category}</CategoryHint>
        </WordField>

    );
};

export default wordField;