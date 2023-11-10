import React from 'react';
import P1 from '../Pic/P1.jpg';
import { Divider, Grid } from '@mui/material';

export const ProfileLeftside = () => {
    return (
        <>
            <div
            className='profile-leftside-main-div'
                >
                <img
                    style={{
                        maxWidth: '100px',
                        borderRadius: '50%',
                        margin: '10px auto 0', // Adjust margin to control vertical spacing
                        height: '100px',
                    }}
                    src={P1} alt="" /* Saller Profile Pic */
                />
                <h5 style={{color:'rgba(116, 118, 126, 1)'}} >Saller Name</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between',color:'rgba(116, 118, 126, 1)', }}> 
                    <p>
                       Total Services
                    </p>
                    <p>
                        N/A
                    </p>
                </div>
                <div className='ViewProfile-contant'>
                    <p>
                        Saller Description
                    </p>
                    <p>
                        value
                    </p>
                </div>
                <div className='ViewProfile-contant'>
                    <p>
                        Saller Description
                    </p>
                    <p>
                        value
                    </p>
                </div>
                <div className='ViewProfile-contant'>
                    <p>
                        Saller Description
                    </p>
                    <p>
                        value
                    </p>
                </div>
                <div className='ViewProfile-contant'>
                    <p>
                        Saller Description
                    </p>
                    <p>
                        value
                    </p>
                </div>
                <Divider></Divider>
                <div style={{ display: 'flex', justifyContent: 'space-between' ,color:'rgba(116, 118, 126, 1)'}}>
                    <p>
                       Total Earning
                    </p>
                    <p>
                        $ 0.00
                    </p>
                </div>
            </div>

        </>
    )
}
