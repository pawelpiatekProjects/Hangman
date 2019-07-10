import React from 'react';

import {LetterWrapper, Undreline, UnderlinedLetter} from './style';

const letter = (props) => {
    return (
        <UnderlinedLetter>
            <LetterWrapper>{props.letter}</LetterWrapper>
            <Undreline/>
        </UnderlinedLetter>
    );
};

export default letter;