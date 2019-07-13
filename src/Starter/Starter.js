import React from 'react';
import {Route,Link} from 'react-router-dom';

import PlayingField from '../PlayingField/PlayingField';
import StarterMenu from './StarterMenu';

import {StarterWrapper} from './style'

const starter = ()=>{
    return(
            <StarterWrapper>
                <Route path='/' exact component={StarterMenu}/>
                <Route path='/game' exact component={PlayingField}/>

            </StarterWrapper>
        )

};

export default starter;