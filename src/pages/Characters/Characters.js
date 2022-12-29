import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data';
import {Navbar} from '../../components';

const Characters = () => {
  return (
    <>
      <Navbar activePage='Characters' />
      <Pricing />
      <InfoSection {...homeObjFour}/>
    </>
  )
}

export default Characters