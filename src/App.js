
import {Navbar, Footer} from './components';
import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import News from './pages/News/News';
import Characters from './pages/Characters/Characters';
import SignUp from './pages/SignUp/SignUp';
import { AuthContext } from "./context/AuthContext"
import New from './components/New/New';
import {userInputs} from "./formSource"

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
      return currentUser ? (children) : <Navigate to="/sign-up"/>
  }

  console.log(currentUser)

  return (
    
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Routes>
        <Route path="/sign-up" exact  element={<SignUp />} ></Route>
        
        <Route path="/" exact  element={<RequireAuth> <Home /> </RequireAuth>} ></Route>
        <Route path="/news" exact  element={<RequireAuth> <News /> </RequireAuth>} ></Route>
        <Route path="/characters" exact  element={<RequireAuth> <Characters /> </RequireAuth>} ></Route>
        <Route path="/users" exact  element={<RequireAuth> <New inputs={userInputs}/> </RequireAuth>} ></Route>
        
        
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
