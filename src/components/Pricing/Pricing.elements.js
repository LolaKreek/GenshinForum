import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mond from '../../images/monst.jpg';
import li from '../../images/www.png';
import ina from '../../images/inazuma.jpeg';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7293A0;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 30px;
  color: #fff;
  
`;




export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;



export const Mond = styled.div`
  background-image: url(${mond});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 30% 70%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const Liyue = styled.div`
  background-image: url(${li});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 40% 60%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const Inadzuma = styled.div`
  background-image: url(${ina});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 40% 60%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const ButtonPlacement = styled.div`
  margin-top: 400px; 
  margin-left: 120px;
  
`;

