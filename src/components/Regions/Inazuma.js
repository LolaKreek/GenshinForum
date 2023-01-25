import React from 'react';
import {Footer, InfoRegion, Navbar} from '../../components';
import { InadzumaData } from '../../pages/Data';


const Inazuma = () => {
  return (
    <>
      <Navbar activePage='Characters' />
      <InfoRegion {...InadzumaData}/>
      <Footer />
    </>
  )
}

export default Inazuma