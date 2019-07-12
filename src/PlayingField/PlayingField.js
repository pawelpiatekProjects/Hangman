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
            {wordContent:'p',corectness:false},
            {wordContent:'l',corectness:false},
            {wordContent:'a',corectness:false},
            {wordContent:'n',corectness:false},
            {wordContent:'a',corectness:false}


        ],
        errors:0
    }


    handleCheck =(key)=>{
        let errors =this.state.errors;
         const wordCoppy = [...this.state.word];
         const word = wordCoppy.map(item=>{
             return item.wordContent;
         })
        console.log(key);
         console.log(wordCoppy[0].wordContent);
         if(word.includes(key)){
             for(let index of Object.keys(wordCoppy)){
                 console.log(`${wordCoppy[index].wordContent} + ${key}`);
                 if(wordCoppy[index].wordContent === key){
                     wordCoppy[index].corectness = true;
                 }
             }
         }
         else {
             errors++;
             this.setState({errors:errors})

             //errors limit
             if(this.state.errors>6){
                 alert('you lost');
             }
         }
        this.setState({word:wordCoppy});

    };



    render(){
        //const wordArr = this.state.word;
        return(
            <PlayingWrapper onKeyDown={(e)=> this.handleKeyPress(e)}>
                <Hangman errors={this.state.errors}/>
                <WordField word={this.state.word}/>
                <KeyboardEventHandler handleKeys={['alphabetic']}
                                      onKeyEvent={this.handleCheck}/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;