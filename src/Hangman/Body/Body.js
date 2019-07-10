import React from 'react';

import {BodyWrapper,Head, Core, HandLeft, HandRight, LegLeft,LegRight} from './style'

const body =()=>{
    return(
        <BodyWrapper>
            <Head/>
            <Core/>
            <HandLeft/>
            <HandRight/>
            <LegLeft/>
            <LegRight/>
        </BodyWrapper>
    );
};

export default body;