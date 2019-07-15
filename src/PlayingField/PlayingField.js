import React,{Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import axios from '../axios';


import {PlayingWrapper} from './style';

import Hangman from '../Hangman/Hangman';
import WordField from '../WordsField/WordsField';
import PopUp from '../Popup/Popup';


class PlayingField extends Component{
    //firebase fetch in componentWillMount
    state={
        word:[],
        category:'Electronic device',
        length:0,
        goodMoves:0,
        errors:0,
        ending:''

    }

    componentDidMount() {
        axios.get('https://hangman-c8d9f.firebaseio.com/words.json').then(response=>{
            const data = response.data;


            const arr = Object.keys(data).map(key=>{
                return data[key];
            })




            const numberOfItems = arr.length;
            const index =this.generateRandom(numberOfItems);
            const wordLength = arr[index].name.length;


            const wordValue = arr[index].name.split('').map(id=>{

                if(id.charCodeAt(0)===32){
                    return {wordContent:id, corectness:true,empty:true}



                }else{
                    return {wordContent:id, corectness:false,empty:false}

                }

            });
            const category = arr[index].category;




            this.setState({word:wordValue, category:category,length: wordLength,
            });

        }).catch(error => console.log(error))
    }

    generateRandom=(max)=>{
        let min =0;
        let newMax = max-1;
        return Math.floor(Math.random()*(newMax-min+1))+min;
    }



    handleCheck =(key)=>{
        let errors =this.state.errors;
        let goodMoves = this.state.goodMoves;
         const wordCoppy = [...this.state.word];
         const word = wordCoppy.map(item=>{
             return item.wordContent;
         })

         if(word.includes(key)){
             goodMoves++;
             this.setState({goodMoves:goodMoves})
             for(let index of Object.keys(wordCoppy)){


                 if(wordCoppy[index].wordContent === key){
                     wordCoppy[index].corectness = true;
                 }
             }


         }
         else {
             errors++;
             this.setState({errors:errors})

             //errors limit
             if(this.state.errors>=6){
                 this.setState({ending:'lost'})
             }
         }
        this.setState({word:wordCoppy});
        let good=0;
        const end =this.state.word.map(el=>{
            console.log(el.corectness)
            if(el.corectness===true)
                good++
        });
        console.log(good);
        if(good>=this.state.length){
            this.setState({ending:'won'})
        }

    };

    render(){

        return(
            <div>

            <PlayingWrapper onKeyDown={(e)=> this.handleKeyPress(e)}>

                <Hangman errors={this.state.errors}/>
                <WordField word={this.state.word}
                           category={this.state.category}
                />
                <KeyboardEventHandler handleKeys={['alphabetic']}
                                      onKeyEvent={this.handleCheck}/>

            </PlayingWrapper>
            <PopUp ending={this.state.ending}/>
            </div>

        );
    };
};

export default PlayingField;