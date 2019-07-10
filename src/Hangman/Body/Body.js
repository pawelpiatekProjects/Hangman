import React from 'react';

import {BodyWrapper,Head, Core, HandLeft, HandRight, Leg} from './style'

const body =()=>{
    return(
        <BodyWrapper>
            <Head/>
            <Core/>
            <HandLeft/>
            <HandRight/>
            <Leg/>
        </BodyWrapper>
    );
};

export default body;