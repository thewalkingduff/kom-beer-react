import styled from 'styled-components'
import WhatImg from '../../images/what-kom.png';

export const WhatContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${WhatImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const WhatContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  /* gap: 5rem; */
  max-height: 100%;
`

export const WhatH1 = styled.h1`
font-size: 5rem;
color: #F419FF;
padding-top: 10rem;
`;

export const WhatP = styled.p`
font-size: 2rem;
color: #FAFAF0;
text-align: left;
padding: 2rem 5rem 5rem;
`