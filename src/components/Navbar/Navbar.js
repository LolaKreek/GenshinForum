import React, {useState, useEffect, useContext} from 'react';
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
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";

const Navbar = (props) => {

    const {currentUser, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const Logout = () => {
        auth.signOut().then(() => {
            dispatch({type:"LOGOUT"});
            alert('Signed out successfully');
            navigate("/sign-up");
        })
        .catch((error) => {
            console.log("error: ", error);
        })
    }

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
                            <NavLink to='/characters' className={props.activePage=='Characters' ? 'navbar-active' : ''}>Regions</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/users' className={props.activePage=='User' ? 'navbar-active' : ''}>User</NavLink>
                        </NavItem>
                        
                        {currentUser ? (
                            <NavItemBtn>
                                <NavBtnLink to='/' className={props.activePage=='Sign' ? 'navbar-active' : ''}>
                                    <Button primary onClick={Logout}>LOGOUT</Button>
                                </NavBtnLink>
                            </NavItemBtn>
                        ) : (
                            <>
                                <NavItemBtn>
                                    <NavBtnLink to='/sign-up' className={props.activePage=='Sign' ? 'navbar-active' : ''}>
                                        <Button primary>SIGN IN</Button>
                                    </NavBtnLink>
                                </NavItemBtn>

                                <NavItemBtn>
                                    <NavBtnLink to='/register' className={props.activePage=='Register' ? 'navbar-active' : ''}>
                                        <Button primary>REGISTER</Button>
                                    </NavBtnLink>
                                </NavItemBtn>
                            </>
                        )}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar