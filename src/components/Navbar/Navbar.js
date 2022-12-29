import React, {useState, useEffect} from 'react';
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
} from './Navbar.elements';
import {FaTimes, FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import './../../styles/global.css';

const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

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
                            <NavLink to='/' className={props.activePage=='Home' ? 'navbar-active' : ''}>Home</NavLink>
                        </NavItem>
            
                        <NavItem>
                            <NavLink to='/news' className={props.activePage=='News' ? 'navbar-active' : ''}>News</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/characters' className={props.activePage=='Characters' ? 'navbar-active' : ''}>Characters</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/users' className={props.activePage=='User' ? 'navbar-active' : ''}>User</NavLink>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up' className={props.activePage=='Sign' ? 'navbar-active' : ''}>
                                    <Button primary>SIGN IN</Button>
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