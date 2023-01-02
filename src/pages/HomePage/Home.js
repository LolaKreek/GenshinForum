import React from 'react';
import { Footer, InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data';
import {Navbar} from '../../components';

const Home = () => {
  return (
    <>
      <Navbar activePage='Home' />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Pricing />
      <InfoSection {...homeObjFour}/>

      <Footer />
    </>
  )
}

export default Home