import { GlobalStyle } from '../../globalStyles'
import React, { useState } from 'react'
import { HomeContainer } from './HomeElements'
import Feature from '../Feature';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from '../Hero/HeroElements';
import Products from '../Products'
import { productData } from '../Products/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HomeContainer>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1><span style={{ color: "#19FFD1" }}>FRESH</span><br />Kombucha</HeroH1>
                    <HeroP>served on tap only. Never bottled.</HeroP>
                    {/* <HeroBtn>Place Order</HeroBtn> */}
                </HeroItems>
            </HeroContent>
            <Products heading='Our Flavors' data={productData} />
            <Feature />
            <Footer />
        </HomeContainer>
    )
}

export default Home
