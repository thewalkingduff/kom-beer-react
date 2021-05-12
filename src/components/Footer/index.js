import React from 'react';
import { FaFacebook, FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Kombucha Beerworks Brewery</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/kombeerbrewery" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook value={{ className: 'react-icons' }} />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/kombeerbrewery/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="mailto:james@kombeerbrewery.com" target="_blank" aria-label="Mail" rel="noopener noreferrer">
                                <FaRegEnvelope />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
