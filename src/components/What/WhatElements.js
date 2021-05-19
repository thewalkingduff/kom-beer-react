import styled from 'styled-components'
import WhatImg from '../../images/fruit-bucha.png';
import BenefitImg from '../../images/benefits.png'

export const WhatContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${WhatImg});
  height: 100vh; 
  background-position: center;
  background-size: cover; 
 
`;

export const WhatContent = styled.div`
 /* height: calc(100vh - 80px); */
  /* max-height: 100%; */
  /* padding: 0rem calc((100vw - 1300px) / 2);  */
  ;`

export const WhatItems = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center;
  height: 100vh; */
  /* max-height: 100%; */
  /* padding: 0 2rem; */
  /* width: 650px; */
  /* display: block; */
  text-align: center;
  color: #FAFAF0;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  /* @media screen and (max-width: 650px) {
    width: 100%;
  } */
`;

export const WhatH1 = styled.h1`
font-size: clamp(2rem, 10vw, 10rem);
  margin: 10rem 4rem 5rem;
  letter-spacing: 3px;
/* font-size: 5rem; */
  color: #19FFD1;
  /* padding: 0 1.5rem; */
  @media screen and (max-width: 1024px) {
  margin: 10rem 2rem 5rem;
}
  @media screen and (max-width: 768px) {
  margin: 8rem 2rem 5rem;
}
  @media screen and (max-width: 480px) {
  margin: 12rem 2rem 0;
}

`;

export const WhatDiv = styled.div`
background: #AA09B3;
display: flex;
justify-content: center;
margin: 25rem 4rem 0;
opacity: 0.8;
@media screen and (max-width: 1200px) {
  margin: 30rem 4rem 0;
}
@media screen and (max-width: 1024px) {
  margin: 17rem 4rem 0;
}
@media screen and (max-width: 768px) {
  margin: 10rem 2rem 0;
}
@media screen and (max-width: 480px) {
  margin: 20rem 1rem 0;
}
`;

export const WhatP = styled.p`
font-size: clamp(1rem, 2.5vw, 3rem);
text-transform: none;
text-align: left;
padding: 3rem;
line-height: 3rem;
@media screen and (max-width: 1024px) {
  padding: 2rem;
  line-height: 2.5rem;
}
@media screen and (max-width: 480px) {
  padding: 1rem;
  line-height: 1.75rem;
}
`

export const WhatBenefits = styled.div`
background: url(${BenefitImg});
height: 100vh; 
  background-position: center;
  background-size: contain;
background-repeat: no-repeat;
margin: 20rem 4rem;
@media screen and (max-width: 1200px) {
  margin: 15rem 4rem;
  height: 100vh; 
}
@media screen and (max-width: 1024px) {
  margin: 10rem 4rem 0;
  height: 100vh; 
}
@media screen and (max-width: 768px) {
  margin: 7rem 4rem 0;
  height: 100vh;
}
@media screen and (max-width: 480px) {
  margin: 1rem;
  height: 100vh;
}
`