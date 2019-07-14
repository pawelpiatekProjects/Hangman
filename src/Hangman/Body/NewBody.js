import React from 'react';

import {BodyWrapper,Head,EyeLeft,EyeRight, Core, HandLeft, HandRight, LegLeft,LegRight,
    GallowsTop,GallowsLeft,GallowsBottom,Neck} from './styleNewBody'

const newBody =()=>{

    return(
        <BodyWrapper>
            <GallowsTop/>
            <GallowsLeft/>
            <GallowsBottom/>
            <Head >
                <EyeLeft/>
                <EyeRight/>
                <Neck/>
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