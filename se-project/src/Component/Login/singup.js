import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from "react-loading";



const SignIn = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: '',
    });
    const [isMessageSent, setMessageSent] = useState(false);
    const [ErrorContent, setErrorContent] = useState('');
    const [severity, setSeverity] = useState('Success');
    const [isLoading, setLoading] = useState(false);
    const handleCloseSnackbar = () => {
        setMessageSent(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const apiUrl = 'http://localhost:5000/api/PostProjetUser';
    const SaveData = async (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        if (formData.Name === '' || formData.Email === '' || formData.Password === '') {
            setMessageSent(true);
            setSeverity('error');
            setErrorContent('Please Enter the all fields');
            return;
        } else {
            try {
                setLoading(true);
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                setLoading(false);
                if (response.ok) { // if HTTP-status is 200-299
                    console.log(response.json());
                    setMessageSent(true);
                    setSeverity('success');
                    setErrorContent('Successfully Created');
                    const data = await response.json();
                    console.log(data); // The response from the server
                } else {
                    setMessageSent(true);
                    setSeverity('error');
                    const data = await response.json();
                    console.log(data); // The response from the server
                    setErrorContent(data.mesage); // The error message from the server
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        setFormData({
            Name: '',
            Email: '',
            Password: ''
        });
    }


    return (
        <div>

            <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                <MuiAlert elevation={6} variant="filled" severity={severity} onClose={handleCloseSnackbar}>
                    {ErrorContent}
                </MuiAlert>
            </Snackbar>

            <form onSubmit={handleSubmit}>
                <TextField
                    name='Name'
                    value={formData.Name}
                    onChange={handleChange}
                    label="Name"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
                    InputProps={{
                        startAdornment: (
                            <FaUser style={{ marginRight: '8px', color: '#757575' }} />
                        ),
                    }}
                    sx={{ marginTop: '20px' }}
                />
                <TextField
                    name='Email'
                    value={formData.Email}
                    onChange={handleChange}
                    label="Email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
                    height={1}
                    InputProps={{
                        startAdornment: (
                            <EmailIcon style={{ marginRight: '8px', color: '#757575' }} />
                        ),
                    }}
                    sx={{ marginTop: '20px' }}
                />
                <TextField
                    name='Password'
                    value={formData.Password}
                    onChange={handleChange}
                    label="Password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"
                    required
                    InputProps={{
                        startAdornment: (
                            <LockIcon style={{ marginRight: '8px', color: '#757575' }} />
                        ),
                    }}
                    sx={{ marginTop: '20px' }}
                />

                <Button type="submit" variant="contained" color="primary" onClick={SaveData} fullWidth style={{ marginTop: '15px' }}>Login</Button>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'green' }} /><div>
                        <p style={{ width: '70px', textAlign: 'center' }}>OR</p>
                    </div>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'green' }} />
                </div>
                <div>
                    <Button
                        startIcon={<FaGoogle />}
                        style={{ backgroundColor: 'red', color: 'white', minWidth: '150px', marginLeft: '50px' }}
                        className='google'
                    >
                        google
                    </Button>
                    <Button
                        startIcon={<FaFacebook />}
                        style={{ backgroundColor: '#3b5998', color: 'white', minWidth: '150px', marginLeft: '120px' }}
                    >
                        Facebook
                    </Button>
                    <br />
                    <Button
                        startIcon={<FaLinkedin />}
                        style={{ backgroundColor: '#3b5998', color: 'white', minWidth: '150px', marginLeft: '50px', marginTop: '10px' }}
                    >
                        Linkedin
                    </Button>
                    <Button
                        startIcon={<FaGithub />}
                        style={{ backgroundColor: '#171515 ', color: 'white', minWidth: '150px', marginLeft: '120px', marginTop: '10px' }}
                    >
                        Github
                    </Button>
                </div>
            </form>
            {isLoading && <Loading type="spin" color="rgba(29, 191, 115, 1)" height={50} width={50}
            />}

        </div>
    );
};

export default SignIn;
