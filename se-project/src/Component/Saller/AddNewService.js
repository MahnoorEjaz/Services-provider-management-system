import React from 'react';
import TextField from '@mui/material/TextField';
import './Saller.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState, useRef } from 'react';
import Discrestion from './Discrestion';


const services = [
    'Electrician',
    'Plumber',
    'Handyman',
    'Appliance Repair Technician',
    'Carpenter', 'Landscaper/Gardener',
    'Painter', 'HVAC Technician',
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
    'Teacher', 'Auto Mechanic',
];



const AddNewService = () => {
    const [valid, setValid] = React.useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showInput, setShowInput] = useState(true);
    const [showDiscrestion, setShowDiscrestion] = useState(false);
    const [formData, setFormData] = useState({
        ServiceTitle: '',
        lastName: '',
        BasicPrice: '',
        message: '',
    });
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChange = (event) => {
        setSelectedService(event.target.value);
    };
    const handleTaskChange = (event) => {
        setSelectedTasks(event.target.value);
    };
    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };
    const handleTaskAdd = () => {
        if (newTask && selectedTasks.length < 5) {
            setSelectedTasks([...selectedTasks, newTask]);
            setNewTask('');
        }
    };

    const SaveData = () => {

    }


    return (
        <div>
            {
                showInput &&
                <div className='Main-Input-From' style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                                        helperText={valid ? 'Please enter a valid number.' : ''}
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
                                        value={selectedService}
                                        onChange={handleChange}
                                        label="Select a Home Service"
                                        fullWidth
                                        name="ServiceType"
                                        value={formData.ServiceType}
                                        onChange={handleChangeInput}
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
                                        error={valid}
                                        color="success"
                                        id="filled-error-helper-text"
                                        label="Basic Price"
                                        helperText={valid ? 'Please enter a valid number.' : ''}
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
                                                handleTaskAdd();
                                            }
                                        }}
                                        disabled={selectedTasks.length >= 5}
                                    />
                                </div>
                                <input type='submit' value='Submit' className='Submit-Button' onClick={SaveData} />
                            </form  >
                        </div>
                    </div>
                </div>
            }
            {showDiscrestion && <Discrestion />}
        </div>


    )
}

export default AddNewService  