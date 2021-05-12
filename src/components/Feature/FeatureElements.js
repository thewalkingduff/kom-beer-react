import styled from 'styled-components'
import FeaturePic from '../../images/products-kombucha/product-4.png'

export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
height: 100vh;
max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #FAFAF0;
text-align: center;
padding: 0 1rem;

h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    padding: 1rem 0;
    text-transform: uppercase;
}

h2 {
    font-size: clamp(2rem, 4vw, 4rem);
    padding: .5rem 0 1.5rem;
    text-transform: uppercase;
}

p {
    margin-bottom: 2rem;
    font-size: clamp(1rem, 3vw, 2rem);
}
`

export const FeatureButton = styled.button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: #19FFD1;
color: #000;
transition: 0.2s ease-out;

&:hover {
    color: #FAFAF0;
    background: #F419FF;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`;

