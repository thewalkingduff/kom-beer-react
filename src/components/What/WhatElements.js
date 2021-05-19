import styled from 'styled-components'
import WhatImg from '../../images/fruit-bucha.png';

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
  padding: 0rem calc((100vw - 1300px) / 2); 
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
font-size: clamp(2.75rem, 10vw, 5rem);
  margin: 5rem;
  letter-spacing: 3px;
/* font-size: 5rem; */
  color: #19FFD1;
  /* padding: 0 1.5rem; */
  @media screen and (max-width: 768px) {
  margin: 3rem 2rem;
}
`;

export const WhatDiv = styled.div`
background: #AA09B3;
display: flex;
justify-content: center;
margin: 0 5rem 5rem;
opacity: 0.8;

@media screen and (max-width: 768px) {
  margin: 0 2rem 3rem;
}
`;

export const WhatP = styled.p`
font-size: clamp(1.25rem, 2.5vw, 3rem);
text-transform: none;
text-align: left;
padding: 3rem;
line-height: 3rem;

@media screen and (max-width: 1024px) {
  padding: 2rem;
  line-height: 2.25rem;
}

@media screen and (max-width: 480px) {
  padding: 1.5rem;
  line-height: 1.75rem;
}
`