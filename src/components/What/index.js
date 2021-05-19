import { GlobalStyle } from '../../globalStyles';
import React, { useState } from 'react';
import {
    WhatContainer, WhatContent, WhatDiv, WhatH1, WhatItems, WhatP
} from './WhatElements';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const What = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <WhatContainer>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <WhatContent>
                <WhatItems>
                    <WhatH1>What is kombucha?</WhatH1>
                    <WhatDiv>
                        <WhatP>Kombucha is a sparkling fermented probiotic tea.
                        It’s light effervescence, sweetness and slight tang is what one would experience drinking ours. 😉
                        <br></br><br></br>
                        With the popularity of health-minded products on the rise, it’s no wonder kombucha has made a name for itself in the beverage sphere. It has been around for centuries, but has recently grown popularity among American consumers. <br></br><br></br>Have you ever had kombucha? We’d love to hear below!
                    </WhatP>
                    </WhatDiv>
                </WhatItems>
            </WhatContent>
            <Footer />
        </WhatContainer>
    )
}

export default What
