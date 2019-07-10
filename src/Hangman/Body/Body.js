import React from 'react';

import {BodyWrapper,Head, Core, Hand, Leg} from './style'

const body =()=>{
    return(
        <BodyWrapper>
            <Head/>
            <Core/>
            <Hand/>
            <Leg/>
        </BodyWrapper>
    );
};

export default body;