import { Grid } from '@mui/material';
import React from 'react';
import Map from './Map';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/snapchat'
import 'react-social-icons/pinterest'


const FooterOtherThanMap = () => {
    const phoneNumber = '+92 328 6324383'; // Replace with the desired phone number
    const handleClick = () => {
        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
        window.location.href = whatsappUrl;
    };
    return (
        <div style={{  marginTop: '300px' }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <p style={{ color: 'rgba(64, 65, 69, 1)' }}>Location</p>
                        <Map />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className='Contact-Us' style={{ marginLeft: '20px' }}>
                        <p style={{ color: 'rgba(64, 65, 69, 1)' }}>Contact Us</p>
                        <p>If you have any questions or feedback, please feel free to contact us:</p>
                        <ul >
                            <li><FaEnvelope className='Icoan-Footer' /><a href="mailto:saleemalik444@gmail.com">Saleemalik444@gmail.com</a></li>
                            <li> <FaPhone className='Icoan-Footer' /> <a href="tel:+11234567890">+1 (123) 456-7890</a></li>
                            <li>
                                <FaWhatsapp className='Icoan-Footer' />
                                <a href='/' onClick={handleClick}>
                                    +92 328 6324383
                                </a>

                            </li>
                            <li> <IoLocationSharp className='Icoan-Footer' /><a>UET Lahore Mamtaz Hall Room Number 74</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className='Quiks-Links'>
                        <p style={{ color: 'rgba(64, 65, 69, 1)' }}>Company</p>
                        <ul>
                            <li>
                                <a href='#'  >  Subscribe
                                </a>
                            </li>
                            <li>
                                <a href='#'  > About</a>
                            </li>
                            <li>
                                <a href='#'  > Contact</a>
                            </li>
                            <li>
                                <a href='#'  > Careers</a>
                            </li>
                            <li>
                                <a href='#'  >
                                    Privacy Policy</a>
                            </li>
                            <li>
                                <a href='#'  > Do Not Sell My Personal Info</a>
                            </li>
                            <li>
                                <a href='#'  > Feedback</a>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className='Quiks-Links'>
                        <p style={{ color: 'rgba(64, 65, 69, 1)' }}>Quick Links</p>
                        <ul>
                            <li>
                                <a href='#'  >  Home</a>
                            </li>
                            <li>
                                <a href='#'  > About</a>
                            </li>
                            <li>
                                <a href='#'  > Send Quary</a>
                            </li>
                            <li>
                                <a href='#'  > Feqs</a>
                            </li>
                            <li>
                                <a href='#'  > Complain</a>
                            </li>
                            <li>
                                <a href='#'  > Services</a>
                            </li>
                            <li>
                                <a href='#'  > Feedback</a>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
            <p style={{ color: 'rgba(64, 65, 69, 1)',textAlign:'center' }}>Follow Us</p>
            <div className='Social-Medias'>
                <ul >
                    <li>
                        <SocialIcon style={{marginLeft:'10px'}} url="www.instagram.com" />
                        <SocialIcon style={{marginLeft:'10px'}} url="www.linkedin.com" />
                        <SocialIcon style={{marginLeft:'10px'}} url="www.snapchat.com" />
                        <SocialIcon style={{marginLeft:'10px'}} url="www.pinterest.com" />
                        <SocialIcon style={{marginLeft:'10px'}} url="www.facebook.com" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterOtherThanMap;
