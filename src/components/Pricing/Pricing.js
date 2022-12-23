import React from 'react';
import { Button } from '../../globalStyles';
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


  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Regions</PricingHeading>

          <PricingContainer>
              
                <Mond>
                    <ButtonPlacement>
                        <PricingCardPlan>Mondstadt</PricingCardPlan>
                    </ButtonPlacement>
                </Mond>
                

                <Liyue >
                    <ButtonPlacement>
                        <PricingCardPlan>Liyue</PricingCardPlan>
                    </ButtonPlacement>
                </Liyue>

                <Inadzuma>
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