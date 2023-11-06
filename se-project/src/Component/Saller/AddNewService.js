import React from 'react';
import TextField from '@mui/material/TextField';
import './Saller.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Discrestion from './Discrestion';
import ReactLoading from "react-loading";
import { DescriptionData } from './Discrestion.js'
import Gallary from './Gallary.js'
import { Images_ } from './Gallary.js'
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import ViewAllServices from './ViewAllServices.js'
import { Grid } from '@mui/material';
import Sellar_Card from '../Saller/Sellar_Cart';





const services = [
    'Electrician',
    'Plumber',
    'Handyman',
    'Appliance Repair Technician',
    'Carpenter',
    'Landscaper/Gardener',
    'Painter',
    'HVAC Technician',
    'Home Renovation Contractor',
    'Beautician',
    'Wellness Specialist',
    'Fitness Trainer',
    'Pet Care Provider',
    'Event Planner',
    'Photographer',
    'Coordinator',
    'IT Specialist',
    'Legal Consultant',
    'Financial Advisor',
    'Transportation Service Provider',
    'Teacher',
    'Auto Mechanic',
];



const AddNewService = () => {
    const [valid, setValid] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showInput, setShowInput] = useState(true);
    const [showDiscrestion, setShowDiscrestion] = useState(false);
    const [Gallary_, setGallary] = useState(false);
    const [PostData_, setPostData] = useState(false);
    const [isMessageSent, setMessageSent] = useState(false);
    const [ErrorContent, setErrorContent] = useState('');
    const [severity, setSeverity] = useState('Success');
    const [isOpen, setIsOpen] = React.useState(true);
    const [ServicesData, setServices] = useState([]);
    const [GetData , SetGetData] = useState(false);
    const handleCloseSnackbar = () => {
        setMessageSent(false);
    }


    const UpDateShow = () => {
        setShowDiscrestion(false);
        setGallary(true);
    }
    const [formData, setFormData] = useState({
        ServiceTitle: '',
        BasicPrice: '',
        Tags: [],
        ServiceType: '',
        Description: DescriptionData,
        Gallary: Images_, // i add the array  of the gallary here 
    }); // i add the object of the gallary here   

    const handlePostData = () => {
        setPostData(true);
    }


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChange = (e) => {
        setSelectedService(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleTaskChange = (event) => {
        setSelectedTasks(event.target.value);
    };
    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };
    const handleTaskAdd = () => {
        if (newTask && selectedTasks.length < 5) {
            setFormData({
                ...formData,
                Tags: [...selectedTasks, newTask],
            });
            setSelectedTasks([...selectedTasks, newTask]);
            setNewTask('');
        }
    };

    const SaveData = (event) => {
        event.preventDefault();
        if (formData.ServiceTitle.length === 0 || formData.BasicPrice.length === 0 || formData.ServiceType.length === 0 || formData.Tags.length === 0) {
            alert('Please Fill All The Fields');
            return;
        }
        else {
            if (formData.ServiceTitle.length > 80) {
                setValid(true);
                return;
            } else {
                console.log(formData);
                alert(formData.Description);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setShowInput(false);
                    setShowDiscrestion(true);
                }, 1000);


            }
        }
    }
    function togglePopup(data) {
        setIsOpen(!isOpen);
    }
    const PostData = async () => {
        setFormData({
            ...formData,
            Description: DescriptionData,
            Gallary: Images_,
        });
        const token = localStorage.getItem('token');
        const apiUrl = 'http://localhost:5000/api/PostProjetService';
        try {
            setLoading(true);
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token, // Add the token to the Authorization header/bearer token
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) { // if HTTP-status is 200-299 
                // add the 5 seconds delay and show the loading
                setTimeout(async () => {
                    setLoading(false);
                    const data = await response.json();
                    setErrorContent(data.message);
                    setMessageSent(true);
                    setSeverity('success');
                }, 3000);

            } else {
                console.error('Error:', response.statusText);
                const data = await response.json();
                setErrorContent(data.message);
                setMessageSent(true);
                setSeverity('error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const GetAllServices = async () => {
        // To get all services from server side
        const token = localStorage.getItem('token');
        const apiUrl = 'http://localhost:5000/api/GetAllServices'; // Replace 'services' with your actual endpoint to retrieve services
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token, // Add the token to the Authorization header/bearer token
                },
            });
            if (response.ok) { // if HTTP-status is 200-299 
                const AllData = await response.json();
                console.log(AllData);  // show the data in the console
                setServices(AllData); // set the services in the state
                SetGetData(true);
                setLoading(false);
            } else {
                const AllData = await response.json();
                setErrorContent(AllData.message);
                setMessageSent(true);
                setSeverity('error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } 


    return (
        <div>
            <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                <MuiAlert elevation={6} variant="filled" severity={severity} onClose={handleCloseSnackbar}>
                    {ErrorContent}
                </MuiAlert>
            </Snackbar>
            {
                showInput &&
                <div className='Main-Input-From'>
                    <h2 style={{ color: 'rgba(98, 100, 106, 1)' }}>Please Fill This Form To Become a Service Provider</h2>
                    <div style={{ width: '70%' }}>
                        <div className='Form-Input'>
                            <form>
                                <div className='Input-Field'>
                                    <label className='Lable' >Service Title</label>
                                    <TextField
                                        error={valid}
                                        color="success"
                                        id="filled-error-helper-text"
                                        label="Service Title"
                                        helperText={valid ? 'You add Too Many Word in tittle' : ''}
                                        fullWidth
                                        required
                                        name="ServiceTitle"
                                        value={formData.ServiceTitle}
                                        onChange={handleChangeInput}
                                    />

                                </div>
                                <div className='Input-Field'>
                                    <label className='Lable' >Service Type</label>
                                    <Select
                                        labelId="service-label"
                                        id="service-selector"
                                        label="Select a Home Service"
                                        fullWidth
                                        name="ServiceType"
                                        value={formData.ServiceType}
                                        onChange={handleChange}
                                        helperText={valid ? 'Please select a service type.' : ''}
                                        style={{ borderColor: valid ? 'initial' : 'red' }}
                                        required
                                    >
                                        {services.map((service, index) => (
                                            <MenuItem key={index} value={service}>
                                                {service}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                                <div className='Input-Field'>
                                    <label className='Lable'>Basic Price</label>
                                    <TextField
                                        color="success"
                                        id="filled-error-helper-text"
                                        label="Basic Price"
                                        fullWidth
                                        required
                                        type='number'
                                        name="BasicPrice"
                                        value={formData.BasicPrice}
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className='Input-Field' >
                                    <label className='Lable' >Add Tags</label>
                                    <Select
                                        labelId="task-label"
                                        id="task-selector"
                                        multiple
                                        value={selectedTasks}
                                        onChange={handleTaskChange}
                                        renderValue={(selected) => selected.join(', ')}
                                    >
                                        {selectedTasks.map((task, index) => (
                                            <MenuItem key={index} value={task}>
                                                {task}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <TextField
                                        id="new-task"
                                        label="Add Tags"
                                        variant="outlined"
                                        value={newTask}
                                        onChange={handleNewTaskChange}
                                        fullWidth
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault(); // Prevent the default behavior (form submission)
                                                handleTaskAdd();
                                            }
                                        }}
                                        disabled={selectedTasks.length >= 5}
                                    />
                                </div>
                                <input
                                    type='submit'
                                    value='Continue'
                                    className='Submit-Button'
                                    onClick={SaveData}
                                    style={{
                                        backgroundColor: 'rgba(29, 191, 115, 1)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        float: 'right',
                                        width: '150px',
                                        height: '50px',
                                        padding: '10px 20px',
                                        fontSize: '20px', // Adjust the font size as needed

                                    }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {loading && <ReactLoading type="spin" color="rgba(29, 191, 115, 1)" height={50} width={50}
                                    />}
                                </div>
                            </form >
                        </div>
                    </div>
                </div>
            }
            {
                showDiscrestion &&
                <div className='Main-Input-From'>
                    <h2 style={{ color: 'rgba(98, 100, 106, 1)' }}>Write The Complte Explanation Of Your Project </h2>
                    <Discrestion toggleDiscrestion={UpDateShow} />
                </div>

            }
            {
                Gallary_ &&
                <div className='Main-Input-From'>
                    <h2 style={{ color: 'rgba(98, 100, 106, 1)' }}>Add Some Pictures Of Your Project </h2>
                    <Gallary handlePostData={handlePostData} />
                </div>
            }
            {
                PostData_ &&
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'rgba(98, 100, 106, 1)' }}>
                        Your service is almost ready to publish. Please review your service details and publish your service.
                    </p>
                    <button onClick={PostData} style={{
                        margin: '10px',
                        marginTop: '10px',
                        backgroundColor: 'rgba(29, 191, 115, 1)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        alignItems: 'center',
                        width: '150px',
                        height: '50px',
                        fontSize: '20px', // Adjust the font size as needed
                    }} > Publish Now</button>

                </div>
            }
            {
                isOpen &&
                <ViewAllServices handleClose={togglePopup} />
            }
            <button onClick={GetAllServices}>
                get all services Data 
            </button>
            {
                GetData &&

                ServicesData.map((card, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <Sellar_Card CardData={card} />
                            </Grid>
                        );
                    } 
                    )
                
            }

        </div>


    )
}

export default AddNewService   