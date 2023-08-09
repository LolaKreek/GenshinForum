import React from 'react';
import { Footer, CommentSection } from '../../components';
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