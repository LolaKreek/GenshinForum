import React from 'react'
import { Button, Container } from '../../globalStyles'

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
} from './InfoSection.elements'


const InfoSection = ({
  primary, 
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc, 
  lightText, 
  buttonLabel, 
  description, 
  headline, 
  topLine,
  img,
  alt,
  start
}) => {
  return (
    <>
        <InfoSec lightBg={lightBg}>
            <Container>
              <InfoRow imgStart={imgStart}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <a href='https://genshin.hoyoverse.com/ru/home'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </a>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                    <Img src={img} alt={alt} />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection