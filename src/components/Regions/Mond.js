import React from 'react';
import { Footer, InfoRegion } from '..';
import { MondData } from '../../pages/Data';
import {Navbar} from '..';

const Mond = () => {
  return (
    <>
      <Navbar activePage='Characters' />
      <InfoRegion {...MondData}/>
      <Footer />
    </>
  )
}

export default Mond