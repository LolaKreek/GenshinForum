import React from 'react';
import {Footer, InfoRegion, Navbar} from '../../components';
import { LiyueData } from '../../pages/Data';


const Liyue = () => {
  return (
    <>
      <Navbar activePage='Characters' />
      <InfoRegion {...LiyueData}/>
      <Footer />
    </>
  )
}

export default Liyue