import React from 'react'
import { Grid } from '@mui/material';
import ViewServices from './ViewServices';
import { ProfileLeftside } from './ProfileLeftside';





export const ViewProfile = () => {


    return (
        <>
            <Grid container className='viewProfile-main-div'
            >
                <Grid item xs={6} sm={6} md={6} lg={6} width={2}  marginTop={10}>
                    <ProfileLeftside />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} marginX={-5} marginTop={10}>
                    <ViewServices />
                </Grid>
            </Grid>
        </>
    );

}
