import React,{Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import axios from '../axios';

import {PlayingWrapper} from './style';

import Hangman from '../Hangman/Hangman';
import WordField from '../WordsField/WordsField';

class PlayingField extends Component{
    //firebase fetch in componentWillMount
    state={

            word:[
                {wordContent: 'c', corectness: false},
                {wordContent: 'o', corectness: false},
                {wordContent: 'm', corectness: false},
                {wordContent: 'p', corectness: false},
                {wordContent: 'u', corectness: false},
                {wordContent: 't', corectness: false},
                {wordContent: 'e', corectness: false},
                {wordContent: 'r', corectness: false}

            ],


        category:'Electronic device',


        errors:0,

    }

    componentDidMount() {
        axios.get('https://hangman-c8d9f.firebaseio.com/words.json').then(response=>{
            const data = response.data;

            const keys = Object.keys(data);
            const words = keys.map(item=>{
               return item.split('').map(el=>{
                   return {wordContent: el, corectness:false}
               });
            });
            const numberOfItems = words.length;
            const index =this.generateRandom(numberOfItems);
             console.log(words[index]);
             const word = words[index];
            this.setState({word:word});
        }).catch(error => console.log(error))
    }

    generateRandom=(max)=>{
        let min =0;
        let newMax = max-1;
        return Math.floor(Math.random()*(newMax-min+1))+min;
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

        return(
            <PlayingWrapper onKeyDown={(e)=> this.handleKeyPress(e)}>
                <Hangman errors={this.state.errors}/>
                <WordField word={this.state.word}
                category={this.state.category}/>
                <KeyboardEventHandler handleKeys={['alphabetic']}
                                      onKeyEvent={this.handleCheck}/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;