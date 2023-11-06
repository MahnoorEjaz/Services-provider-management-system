import React from 'react';
import { Grid } from '@mui/material';
import ContaintHome from './Containt_Home';
import P1 from '../Pic/34743913.jpg'

const AboutUs = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#40a9ff' }}>About us </h1>
            <div style={{marginTop:'50px'}}> 
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <ContaintHome text={"At [Your Company Name], we are dedicated to delivering top-quality services that exceed your expectations. With a wealth of experience and a commitment to excellence, we take pride in offering [mention your services, e.g., electrical repairs, plumbing, home renovations] that enhance your home or business. Our team of skilled professionals is here to meet your needs promptly and efficiently, ensuring your complete satisfaction. Choose [Your Company Name] for reliable, affordable, and expert solutions that make a difference."} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={P1} alt='Loading....' className='About-img' style={{ height: '400px', width: '400px'}} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AboutUs