import React from 'react';

import {BodyWrapper,Head, Core, HandLeft, HandRight, LegLeft,LegRight} from './styleNewBody'

const newBody =(props)=>{
    let errorCount = props.errors;
    return(
        <BodyWrapper>
            <Head errorCount={errorCount}/>
            <Core errorCount={errorCount}/>
            <HandLeft errorCount={errorCount}/>
            <HandRight errorCount={errorCount}/>
            <LegLeft errorCount={errorCount}/>
            <LegRight errorCount={errorCount}/>
        </BodyWrapper>
    );
};

export default newBody;