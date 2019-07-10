import React,{Component} from 'react';

import {PlayingWrapper} from './style';

import Hangman from '../Hangman/Hangman';
import WordField from '../WordsField/WordsField';

class PlayingField extends Component{
    state={
        word:[
            {wordContent:'h',corectness:false},
            {wordContent:'a',corectness:false},
            {wordContent:'n',corectness:false},
            {wordContent:'g',corectness:false},
            {wordContent:'m',corectness:false},
            {wordContent:'a',corectness:false},
            {wordContent:'n',corectness:false}

        ]



    }

    



    render(){
        const wordArr = this.state.word;
        return(
            <PlayingWrapper>
                <Hangman/>
                <WordField word={wordArr}/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;