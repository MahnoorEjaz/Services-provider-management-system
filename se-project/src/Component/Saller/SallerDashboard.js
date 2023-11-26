import React from 'react';
import Grid from '@mui/material/Grid';
import { ProfileLeftside } from './ProfileLeftside';
import ViewServices from './ViewServices';
import OrderSelecter from './OrderSelecter';
import Chat from './textingCard';
import {UserProfile} from './ViewSallerProfile';
 


const App = () => {
    const Receiver = localStorage.getItem('Sender');
    const Sender = localStorage.getItem('Receiver');
    return (

        <div style={{ backgroundColor: '#f5f5f5', width: '100%', height: '100%', minHeight: '100vh', marginTop: '-15px' }}>
            <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} width={2} marginTop={10}>
                    <UserProfile UserID = {Sender} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} marginX={-5} marginTop={10}>
                    <OrderSelecter />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} marginX={-5} marginTop={10}>
                    <Chat Sender={Sender} Receiver={Receiver} />
                </Grid>

            </Grid>
        </div>
    );
};

export default App;
