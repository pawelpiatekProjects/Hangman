import React from 'react';

import {BodyWrapper,Head,EyeLeft,EyeRight, Core, HandLeft, HandRight, LegLeft,LegRight,
    GallowsTop,GallowsLeft,GallowsBottom,Neck,Floor,Haze} from './styleNewBody'

const newBody =()=>{

    return(
        <BodyWrapper>

            <GallowsTop/>
            <GallowsLeft/>
            <GallowsBottom/>
            <Haze>Let's play</Haze>
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
            <Floor/>

        </BodyWrapper>
    );
};

export default newBody;