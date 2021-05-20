import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { TiBeer } from 'react-icons/ti';
import LogoImg from '../../images/logo.png';

export const Nav = styled.nav`
background: transparent;
height: 0vh;
display: flex;
justify-content: space-between;
font-weight: 700;
`;

export const NavLogoLink = styled(Link)`
background-image: url(${LogoImg});
  height: 100px;
  width: 100px;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 1.5rem 2.5rem;

  @media screen and (max-width: 768px) {
    height: 75px;
    width: 75px;
    margin: 1rem;
}
  @media screen and (max-width: 480px) {
    margin: 1.25rem 1rem;
    /* height: 50px;
    width: 50px; */
}
`
export const Bars = styled(TiBeer)`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
font-size: clamp(2rem, 25vw, 3.5rem);
color: #19FFD1;
margin: 2.5rem;

@media screen and (max-width: 768px) {
font-size: clamp(1rem, 25vw, 2.75rem);
margin: 2rem;
}

@media screen and (max-width: 480px) {
font-size: clamp(.75rem, 25vw, 2.25rem);
margin: 1;
}
@media screen and (max-width: 321px) {
font-size: clamp(.5rem, 25vw, 2.25rem);
margin: .5;
}
`;