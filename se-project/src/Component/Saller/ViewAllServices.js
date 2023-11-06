import React from "react";
import { useState } from "react";
import './Saller.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




function Popup({ handleClose }) {

  const [isMessageSent, setMessageSent] = useState(false);
  const [ErrorContent, setErrorContent] = useState('');
  const [severity, setSeverity] = useState('error');
  const handleCloseSnackbar = () => {
    setMessageSent(false);
  }
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  



  




  return (
    <div className="popup-box1">
      <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                <MuiAlert elevation={6} variant="filled" severity={severity} onClose={handleCloseSnackbar}>
                    {ErrorContent}
                </MuiAlert>
            </Snackbar>
      <div className="box1">
        <span className="close-icon1" onClick={handleClose}>x</span>
        <p style={{ textAlign: 'center', color: 'rgba(98, 100, 106, 1)' }}>Your New Service IS Added Click View Button To Click It </p>
        <button  style={{
          backgroundColor: 'rgba(29, 191, 115, 1)',
          marginLeft: '90px',
          marginTop: '20px',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          alignItems: 'center',
          width: '150px',
          height: '50px',
          fontSize: '20px', // Adjust the font size as needed
        }} >View Now</button>
      </div>
    </div>
  );
};

export default Popup; 