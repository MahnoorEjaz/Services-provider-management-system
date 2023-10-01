import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'

const Clint_Services = () => {
    return ( 
        <>
            <div className='Clint-Top-Services'  >
                <p style={{ color: 'rgba(98, 100, 106, 1)',fontSize:'20px' }}>
                    Here's are the most popular Services
                </p>
                <Grid container spacing={0} >
                    <Grid item lg={6} xs={12} style={{ marginRight: '-150px' }}>
                        <ul className='Clint-top-'>
                            <li>
                                <Link to="/Teacher"> Teacher </Link>
                            </li>
                            <li>
                                <Link to="/Electrician"> Electrician </Link>
                            </li>
                            <li>
                                <Link to="/Beautition"> Beautition </Link>
                            </li> 
                        </ul>
                    </Grid>
                        <Grid item lg={6} xs={12}>
                            <ul className='Clint-top-'>
                                <li>
                                    <Link to="/Photography"> Photography </Link>
                                </li>
                                <li>
                                    <Link to="/Plumber"> Plumber </Link>
                                </li>
                                <li>
                                    <Link to="/Events"> Events </Link>
                                </li>
                            </ul>
                        </Grid>
                    <div>
                    </div>
                </Grid>
                <hr style={{marginRight:'15%'}}></hr>
            </div>
        </>
    )
}

export default Clint_Services