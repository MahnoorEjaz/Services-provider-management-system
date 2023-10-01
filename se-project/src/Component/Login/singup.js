import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaUser } from 'react-icons/fa';
import { useState } from 'react';


const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [formData, setFormData] = useState({
        fullName: '',
        Email: '',
        Password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const SaveData = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: '',
            Email: '',
            Password: ''
        });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    label="fullName"
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

        </div>
    );
};

export default SignIn;
