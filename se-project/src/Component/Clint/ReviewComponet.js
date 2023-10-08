import React from 'react';
import { Avatar, Rating } from '@mui/material';

const ReviewComponent = ({ name, review ,Rating_ }) => {
    return (
        <>
            <div style={{marginTop:'50px'}}>
                <div style={{ display: 'flex' }}>
                    <Avatar sx={{bgcolor: 'rgba(29, 191, 115, 1)'}}>{name[0]}</Avatar>
                    <p style={{ marginLeft: '10px', marginTop: '-10px',fontSize: '16px', fontWeight: 'bold'  }}>{name}</p>
                </div>
                <div style={{marginLeft:'50px'}}>
                    <Rating value={Rating_}></Rating>
                    <p style={{fontSize:'18px'}}>  
                        {review}        
                    </p>
                </div> 
            </div>  

        </>
    );
};

export default ReviewComponent;
