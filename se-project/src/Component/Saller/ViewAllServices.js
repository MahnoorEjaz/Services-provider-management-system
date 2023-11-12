import React from "react";
import './Saller.css'
import { useNavigate } from 'react-router-dom';




function Popup({ handleClose }) {
  const Navigate = useNavigate();
  const ViewProfile = () => {
    console.log('ViewProfile');
    alert('ViewProfile');
    Navigate('/ViewProfile');
  }
  return (
    <div className="popup-box1">
      <div className="box1">
        <span className="close-icon1" onClick={handleClose}>x</span> 
        <p style={{
          textAlign: 'center',
          color: 'rgba(98, 100, 106, 1)'
        }}>Your New Service IS Added Click View Button To Click It </p>
        <button className="Main-Control-btn" onClick={ViewProfile}>View Now</button>
      </div> 
    </div>
  );
};

export default Popup; 