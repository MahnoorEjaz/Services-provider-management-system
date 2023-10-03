import { useState } from 'react';
import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Avatar } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import C_logo from '../Pic/C-logo.PNG'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <nav className='main-header-clint' >
                <div className='Head-main-app-clint' >
                    <div className='logo-clint'>
                        <img src={C_logo} alt='Loading...' />
                    </div>
                    <div className='Menu-bar-clint' onClick={toggle}>
                        <FaBars style={{ fontSize: '2rem' }} />
                    </div>
                    <div className={`nav-elements-clint ${isMenuOpen && 'active'}`}   >
                        <ul >
                            <li>
                                <input type='text' placeholder='What service are you looking for today?' />
                            </li>
                            <li>
                                <Link to="/Notifications"><IoNotifications /></Link>
                            </li>
                            <li>
                                <Link to="/like"> <FaHeart /></Link>
                            </li>
                            <li>
                                <Link to="/Inbox"><MailOutlineIcon /></Link>
                            </li>
                            <li>
                                <Link to="/orders"  >Orders </Link>

                            </li>
                            <li>
                                <Link to="/seller" style={{ color: 'rgba(29, 191, 115, 1)' }}>Become a Seller</Link>
                            </li>
                            <li>
                                <Link to="/profile"><Avatar style={{ marginTop: '-30px' }} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                </div>
            </nav>
        </>
    )
}

export default Header 