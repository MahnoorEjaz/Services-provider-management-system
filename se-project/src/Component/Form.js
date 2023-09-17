import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function ContactUs() {
    const [isMessageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSent(true);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
    };

    const handleCloseSnackbar = () => {
        setMessageSent(false);
    };

    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <form onSubmit={handleSubmit}>
                <TextField label="First Name" variant="outlined" name="firstName" value={formData.firstName} onChange={handleChange} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Last Name" variant="outlined" name="lastName" value={formData.lastName} onChange={handleChange} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleChange} required fullWidth style={{ marginBottom: '15px' }} />
                <TextField label="Message" variant="outlined" name="message" value={formData.message} onChange={handleChange} required multiline rows={4} fullWidth style={{ marginBottom: '15px' }} />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginBottom: '15px' }}>  Send</Button>
            </form>
            <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleCloseSnackbar}>
                    Thank you! Your message has been sent successfully.
                </MuiAlert> 
            </Snackbar>
        </div>
    );
}

export default ContactUs;
