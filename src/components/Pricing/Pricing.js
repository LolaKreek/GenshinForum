import React from 'react';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from "react-router-dom";

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  ButtonPlacement,
  PricingCardPlan,
  Mond,
  Liyue, 
  Inadzuma,
} from './Pricing.elements';


function Pricing() {

  const navigate = useNavigate();
  const navigateToMond = () => {
    navigate('/mond');
  };

  const navigateToLiyue = () => {
    navigate('/liyue');
  };

  const navigateToInadzuma = () => {
    navigate('/inazuma');
  };

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Regions</PricingHeading>

          <PricingContainer>
               
                <Mond onClick={navigateToMond}>
                
                    <ButtonPlacement >
                    
                        <PricingCardPlan>Mondstadt</PricingCardPlan>
                        
                    </ButtonPlacement>
                    
                </Mond>
              
                <Liyue onClick={navigateToLiyue}>
                    <ButtonPlacement>
                        <PricingCardPlan>Liyue</PricingCardPlan>
                    </ButtonPlacement>
                </Liyue>

                <Inadzuma onClick={navigateToInadzuma}>
                    <ButtonPlacement>
                        <PricingCardPlan>Inazuma</PricingCardPlan>
                    </ButtonPlacement>
                </Inadzuma>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;