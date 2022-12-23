import React, {useState, useEffect} from 'react'

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'

import {FaTimes, FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [button, setButton] = useState(true)
  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      } else {
        setButton(true)
      }
  }

  useEffect(() => {
      showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    Genshin Impact
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/'>Home</NavLink>
                    </NavItem>
        
                    <NavItem>
                        <NavLink to='/news'>News</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/characters'>Characters</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/users'>Users</NavLink>
                    </NavItem>

                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to='/sign-up'>
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/sign-up'>
                                <Button fontBig primary>SIGN UP</Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar