import React,{Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import {PlayingWrapper} from './style';

import Hangman from '../Hangman/Hangman';
import WordField from '../WordsField/WordsField';



// const handleKey = (e)=>{
//     console.log(e.key);
//
// }
//
// let currentLetter =document.addEventListener('keypress',handleKey);
//
// console.log(currentLetter);


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

    handleCheck =(key)=>{
        // let wordCoppy = [...this.state.word];
        console.log(key);
    }



    render(){
        const wordArr = this.state.word;
        return(
            <PlayingWrapper onKeyDown={(e)=> this.handleKeyPress(e)}>
                <Hangman/>
                <WordField word={wordArr}/>
                <KeyboardEventHandler handleKeys={['alphabetic']}
                                      onKeyEvent={this.handleCheck}/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;