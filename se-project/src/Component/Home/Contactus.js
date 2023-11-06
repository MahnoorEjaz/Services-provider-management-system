import { Grid } from '@mui/material'
import React from 'react';
import P1 from '../Pic/contact us.jpg';
import Form from './Form'

function Contactus() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center', color: '#40a9ff' }}>Contact Us</h1>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={P1} alt='Loading....' style={{ height: '400px', width: '400px'}} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Form></Form>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Contactus