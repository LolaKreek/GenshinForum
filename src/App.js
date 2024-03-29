import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import News from './pages/News/News';
import Characters from './pages/Characters/Characters';
import SignUp from './pages/SignUp/SignUp';
import { AuthContext } from "./context/AuthContext";
import User from './components/User/User';
import Register from './pages/Register/Register';
import Liyue from './components/Regions/Liyue';
import Mond from './components/Regions/Mond';
import Inazuma from './components/Regions/Inazuma';
import Forum from './pages/Forum/Forum';


function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
      return currentUser ? (children) : <Navigate to="/sign-up"/>
  }

  return (
    
    <Router>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/sign-up" exact  element={<SignUp />} ></Route>
        <Route path="/register" exact  element={<Register />} ></Route>
        
        <Route path="/" exact element={<RequireAuth> <Home /> </RequireAuth>} ></Route>
        <Route path="/news" exact element={<RequireAuth> <News /> </RequireAuth>} ></Route>
        <Route path="/characters" exact element={<RequireAuth> <Characters /> </RequireAuth>} ></Route>
        <Route path="/users" exact element={<RequireAuth> <User /> </RequireAuth>} ></Route>
        <Route path="/mond" exact element={<RequireAuth> <Mond /> </RequireAuth>} ></Route>
        <Route path="/liyue" exact element={<RequireAuth> <Liyue /> </RequireAuth>} ></Route>
        <Route path="/inazuma" exact element={<RequireAuth> <Inazuma /> </RequireAuth>} ></Route>
        <Route path="/forum" exact element={<RequireAuth> <Forum /> </RequireAuth>} ></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
