import React,{Component} from 'react';

import {PlayingWrapper} from './style';

import Hangman from '../Hangman/Hangman';
import WordField from '../WordsField/WordsField';

class PlayingField extends Component{
    state={
        word:'Hangman'

    }

    render(){
        const wordArr = this.state.word.split('');
        return(
            <PlayingWrapper>
                <Hangman/>
                <WordField word={wordArr}/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;