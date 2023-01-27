import React from 'react';
import { Footer, InfoSection, Pricing, CommentSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../Data';
import {Navbar} from '../../components';

const Forum = () => {
  return (
    <>
      <Navbar activePage='Forum' />
      <CommentSection />
      <Footer />
    </>
  )
}

export default Forum