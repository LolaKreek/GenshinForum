import React from 'react';
import { Footer, InfoSection, Pricing } from '../../components';
import { homeObjFour } from '../Data';
import {Navbar} from '../../components';

const Characters = () => {
  return (
    <>
      <Navbar activePage='Characters' />
      <Pricing />
      <InfoSection {...homeObjFour}/>
      <Footer />
    </>
  )
}

export default Characters