import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ServiceGrid = () => {
    return (
        <>
            <div className='sub-main'  style={{ backgroundColor: '#5DADE2', marginTop: '24px' }} >
                <Grid container spacing={3} className='services-cantainer'>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Home Services</Typography>
                        <ul className='Services-list'>
                            <li>
                                <Link>Electrician</Link>
                            </li>
                            <li>
                                <Link>Plumber</Link>
                            </li>
                            <li>
                                <Link>Handyman</Link>
                            </li>
                            <li>
                                <Link>Appliance Repair Technician</Link>
                            </li>
                            <li>
                                <Link>Carpenter</Link>
                            </li>
                            <li>
                                <Link>Landscaper/Gardener</Link>
                            </li>
                            <li>
                                <Link>Painter</Link>
                            </li>
                            <li>
                                <Link>HVAC Technician</Link>
                            </li>
                            <li>
                                <Link>Home Renovation Contractor
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Personal Services</Typography>
                        <ul className='Services-list'>
                            <li>
                                <Link>Beautition</Link>
                            </li>
                            <li>
                                <Link>Wellness Specialist</Link>
                            </li>
                            <li>
                                <Link>Fitness Trainer</Link>
                            </li>
                            <li>
                                <Link>Pet Care Provider</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Event and Creative Services</Typography>
                        <ul className='Services-list'>
                            <li>
                                <Link>Event Planner</Link>
                            </li>
                            <li>
                                <Link>Photographer</Link>
                            </li>
                            <li>
                                <Link>Coordinator</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Professional Services</Typography>
                        <ul className='Services-list'>
                            <li>
                                <Link>IT Specialist</Link>
                            </li>
                            <li>
                                <Link>Legal Consultant</Link>
                            </li>
                            <li>
                                <Link>Financial Advisor</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Transportation and Education Services:</Typography>
                        <ul className='Services-list'>
                            <li>
                                <Link>Transportation Service Provider</Link>
                            </li>
                            <li>
                                <Link>Teacher</Link>
                            </li>
                            <li>
                                <Link>Auto Mechanic</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default ServiceGrid;
