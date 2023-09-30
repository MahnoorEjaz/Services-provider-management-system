import React from "react";
import { ToggleButtonGroup } from '@mui/material';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Singin from "./Singin";
import Singup from './singup';


function  Popup({handleClose,Whichshow}){
  const [selected, setSelected] = useState(Whichshow);
  const handleAlignment = (event, newSelected) => {
    setSelected(newSelected);
  };
  const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
    background: '#096dd9', // Default background color
    color: 'white', // Default text color
    '&:hover': {
      background: '#096dd9', // Background color on hover
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'red',
      background: selectedColor, // Background color when selected
      fontWeight: 'bold',
    },
  }))
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <h2 style={{ textAlign: 'center' }}>Please Login To Continue</h2> 
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={handleAlignment}
          sx={{ marginLeft: '70px' }} 
        >
          <ToggleButton selectedColor="#40a9ff" value="singin" style={{ marginRight: '10px', minWidth: '200px', textAlign: 'center', border: '2px solid #40a9ff', borderRadius: '5px', color: 'white', }}>
            Signin
          </ToggleButton>
          <ToggleButton selectedColor="#40a9ff" value="singup" style={{ marginRight: '10px', minWidth: '200px', textAlign: 'center', border: '2px solid #40a9ff', borderRadius: '5px', color: 'white', }}>
            SignUP
          </ToggleButton>
        </ToggleButtonGroup>
        {selected === 'singin' && <Singin />}
        {selected === 'singup' && <Singup />} 
      </div>
    </div>
  );
};

export default Popup; 