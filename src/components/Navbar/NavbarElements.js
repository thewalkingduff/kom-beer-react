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

@media screen and (max-width: 812px) {
  height: 30vh;   
}
@media screen and (max-width: 768px) {
  height: 25vh;
  /* margin: 0 .5rem; */
}
@media screen and (max-width: 480px) {
    height: 15vh;
    /* margin: 1.50;   */
}
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

// export const NavLink = styled(Link)`
// color: #FAFAF0;
// margin-left: 1rem;
// font-size: 2rem;
// font-size: clamp(.95rem, 3vw, 2rem);
// display: flex;
// align-items: center;
// text-decoration: none;
// cursor: pointer;

// @media screen and (max-width: 768px) {
//     display: block;
// position: absolute;
// top: 0;
// left: 0;
// margin: 1rem 1rem 0;
// padding: 0 10rem 0 0;
// }
// `;

// export const NavIcon = styled.div`
// display: block;
// position: absolute;
// font-size: clamp(1rem, 5vw, 2rem);
// top: 0;
// right: 0;
// cursor: pointer;
// color: #FAFAF0;

// p {
//     transform: translate(-175%, 100%);
//     font-weight: bold;

//     @media screen and (max-width: 768px) {
// display: none;
// }
// }
// `;

export const Bars = styled(TiBeer)`
/* font-size: 2rem; */
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