import { useState } from 'react';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Pic/logo.png';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Submenu from './Submenu'
import LoginForm from './Login/Login_';



function Header() {
    const buttonStyle = {
        marginRight: '10px',
        backgroundColor: '#2471A3 ',
        color: 'white',
        '&:hover': {
            backgroundColor: 'green',
        },
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmenu, setSubmenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showtext , setshowtext] = useState();
    const toggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const Submenu_ = () => {
        setSubmenu(!isSubmenu)
    }
    function togglePopup(data) {
        setIsOpen(!isOpen);
        setshowtext(data)
    }



    return (
        <>
            <nav className='main-header'>
                <div className='Head-main-app'>
                    <div className='logo'>
                        <img src={Logo} alt='Loading...' />
                    </div>
                    <div className='Menu-bar' onClick={toggle}>
                        <FaBars style={{ fontSize: '2rem' }} />
                    </div>
                    <div className={`nav-elements ${isMenuOpen && 'active'}`} >
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs">About Us</Link>
                            </li>
                            <li>
                                <Link to="/ContactUs">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/FEQS">FEQS</Link>
                            </li>
                            <li>
                                <Link to="/Services" onClick={Submenu_} >Services  {<ArrowDropDownIcon style={{ marginLeft: '-10px', marginTop: '-10px' }} />}</Link>

                            </li>
                            <li>
                                <Link to="/FeedBack">FeedBack</Link>
                            </li>
                            <li>
                                <Link to="/Complains">Complains</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`btn ${isMenuOpen && 'active'}`}>
                    <Button sx={buttonStyle} variant="contained" onClick={() => togglePopup('singin')} >SignIN</Button>
                        <Button sx={{ color: 'white', border: '2px solid #2471A3 ' }} onClick={()=>togglePopup('singup')}   variant="outlined">SignUP</Button>
                    </div>
                </div>
                <div>
                    {isSubmenu && <Submenu />}
                    {isOpen && <LoginForm handleClose={togglePopup }  Whichshow={showtext}/>}

                </div>
            </nav>
        </>
    )
}

export default Header 