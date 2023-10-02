import React from 'react';
import { Button, Grid } from '@mui/material';
import './Hi_Clint.css'
import Clint_Slider from './Clint_Slider'
function Hi_clint() {
    return (
        <>
            <div >
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className='Name' >
                            <h2>
                                Hi There
                            </h2>
                            <p >
                                Get matched with sellers for your project.
                            </p>
                            <Button variant="contained" color="success" style={{ backgroundColor: 'rgba(29, 191, 115, 1)' }}>
                                Post a request
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Clint_Slider />
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default Hi_clint