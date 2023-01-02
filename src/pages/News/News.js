import React from 'react';
import { Footer, InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data';
import {Navbar} from '../../components';

const News = () => {
  return (
    <>
      <Navbar activePage='News' />
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Pricing />
      <InfoSection {...homeObjFour}/>

      <Footer />
    </>
  )
}

export default News