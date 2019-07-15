import React from 'react';

import {LetterWrapper, Undreline, UnderlinedLetter} from './style';

const letter = (props) => {
    let visable = props.visable;
    let display;
    if(visable)
        display = 1;
    else
        display = 0;


    return (
        <UnderlinedLetter>
            <LetterWrapper display={display} >{props.letter}</LetterWrapper>
            <Undreline empty={props.empty}/>
        </UnderlinedLetter>
    );
};

export default letter;