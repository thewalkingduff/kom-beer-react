import React, { useState } from 'react'
import { HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
        <HeroContent>
            <HeroItems>
                <HeroH1><span style={{ color: "#19FFD1" }}>FRESH</span><br />Kombucha</HeroH1>
                <HeroP>served on tap only. Never bottled.</HeroP>
                {/* <HeroBtn>Place Order</HeroBtn> */}
            </HeroItems>
        </HeroContent>
    )
};

export default Hero;
