import React from 'react';
import { Container } from '../../globalStyles'

import {
    InfoSec, 
    InfoRow, 
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
  } from './InfoRegion.elements'

const InfoRegion = ({
    topLine, 
    headline, 
    description,
    img,
    alt
}) => {
  return (
    <>
        <InfoSec lightBg={true}>
            <Container>
              <InfoRow imgStart={''}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={false}>{topLine}</TopLine>
                    <Heading lightText={false}>{headline}</Heading>
                    <Subtitle lightTextDesc={false}>{description}</Subtitle>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={''}>
                    <Img src={img} alt={alt} />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoRegion