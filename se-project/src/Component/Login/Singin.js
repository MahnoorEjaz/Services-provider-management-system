/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';


const SignIn = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
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
        setFormData({
            Email: '',
            Password: '',
        })

    };

    return (
        <div>
            <form>
                <TextField
                    //  name="firstName" value={formData.firstName} onChange={handleChange}
                    name='Email'
                    value={formData.Email}
                    onChange={handleChange}
                    label="Email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    required
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
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember Me"
                />
                <Button variant="text" color="primary" sx={{ marginLeft: '200px' }}>
                    Forgot Password?
                </Button>
                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" fullWidth style={{ marginTop: '15px' }}>Login</Button>
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
                    <a href='#' style={{ textAlign: 'center', color: 'green' }}> <p>Create New Account</p></a>
                </div>
            </form>

        </div>
    );
};

export default SignIn;
