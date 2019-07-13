import React from 'react';

import {BodyWrapper,Head,EyeLeft,EyeRight, Core, HandLeft, HandRight, LegLeft,LegRight, Gallows} from './styleNewBody'

const newBody =()=>{

    return(
        <BodyWrapper>
            <Gallows/>
            <Head >
                <EyeLeft/>
                <EyeRight/>
            </Head>
            <Core />
            <HandLeft/>
            <HandRight />
            <LegLeft />
            <LegRight />
        </BodyWrapper>
    );
};

export default newBody;