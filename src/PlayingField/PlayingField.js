import React,{Component} from 'react';

import {PlayingWrapper} from './style';

import Hangman from '../Hangman/Hangman';
import WordField from '../WordsField/WordsField';

class PlayingField extends Component{
    render(){
        return(
            <PlayingWrapper>
                <Hangman/>
                <WordField/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;