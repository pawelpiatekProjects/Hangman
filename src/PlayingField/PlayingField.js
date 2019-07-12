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
        length:0,
        goodMoves:0,
        errors:0

    }

    componentDidMount() {
        axios.get('https://hangman-c8d9f.firebaseio.com/words.json').then(response=>{
            const data = response.data;


            const arr = Object.keys(data).map(key=>{
                return data[key];
            })
            console.log(arr);



            const numberOfItems = arr.length;
            const index =this.generateRandom(numberOfItems);
            const wordLength = arr[index].name.length;
            // console.log(wordLength);

            const wordValue = arr[index].name.split('').map(id=>{
                return {wordContent:id, corectness:false}
            });
            const category = arr[index].category;
            // console.log(category)


            this.setState({word:wordValue, category:category,length: wordLength});
        }).catch(error => console.log(error))
    }

    generateRandom=(max)=>{
        let min =0;
        let newMax = max-1;
        return Math.floor(Math.random()*(newMax-min+1))+min;
    }

    delay = (name)=>{
        window.setTimeout(f=>{
            alert(name);
        },300)
    }

    handleCheck =(key)=>{
        let errors =this.state.errors;
        let goodMoves = this.state.goodMoves;
         const wordCoppy = [...this.state.word];
         const word = wordCoppy.map(item=>{
             return item.wordContent;
         })
        //console.log(key);
         //console.log(wordCoppy[0].wordContent);
         if(word.includes(key)){
             goodMoves++;
             this.setState({goodMoves:goodMoves})
             for(let index of Object.keys(wordCoppy)){
                 //console.log(`${wordCoppy[index].wordContent} + ${key}`);

                 if(wordCoppy[index].wordContent === key){
                     wordCoppy[index].corectness = true;
                 }
             }
             //console.log(this.state.goodMoves)

         }
         else {
             errors++;
             this.setState({errors:errors})

             //errors limit
             if(this.state.errors>=6){
                 this.delay('you lost');
             }
         }
        this.setState({word:wordCoppy});
        if(goodMoves>=this.state.length){
            this.delay('you won');
        }

    };

    render(){

        return(
            <PlayingWrapper onKeyDown={(e)=> this.handleKeyPress(e)}>
                <Hangman errors={this.state.errors}/>
                <WordField word={this.state.word}
                           category={this.state.category}
                />
                <KeyboardEventHandler handleKeys={['alphabetic']}
                                      onKeyEvent={this.handleCheck}/>
            </PlayingWrapper>

        );
    };
};

export default PlayingField;