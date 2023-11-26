import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from "react-loading";




const SignIn = () => {
    const { HomeHeader, SetHomeHeader } = React.useContext(AppContext);

    const navigate = useNavigate();
    const ValidUser = () => {
        SetHomeHeader(true);
    }
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        
        const apiUrl = 'http://localhost:5000/api/login';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) { // if HTTP-status is 200-299
                // add the 5 seconds delay and show the loading
                const data = await response.json();
                localStorage.setItem('token', data.token);
                setLoading(true);
                setTimeout(async () => {
                    setLoading(false);
                    setErrorContent(data.message);
                    setMessageSent(true);
                    setSeverity('success');
                    ValidUser();
                    navigate('/ViewAllServices'); // Navigate to the home page after 2 seconds delay
                    setFormData({ 
                        Email: '',
                        Password: '',
                    });
                }, 2000);

            } else {
                console.error('Error:', response.statusText);
                setErrorContent('Invalid Credentials');
                setMessageSent(true);
                setSeverity('error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                <MuiAlert elevation={6} variant="filled" severity={severity} onClose={handleCloseSnackbar}>
                    {ErrorContent}
                </MuiAlert>
            </Snackbar>
            <form>
                <TextField
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
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '15px' }}
                    onClick={handleSubmit}
                >
                    Login
                </Button>


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
            <div style={{ textAlign: 'center', maxWidth: '40px', marginLeft: '220px', marginTop: '-10px' }}>
                {
                    isLoading && <Loading type="spin" color="rgba(29, 191, 115, 1)" height={40} width={40} />
                }
            </div>


        </div>
    );
};

export default SignIn;
