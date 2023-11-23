import React from 'react';
import { useState, useRef } from 'react';
import ImageUpLoader from '../Pic/Image uploder.png'
import "react-quill/dist/quill.snow.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

var Images_ = [];
const Gallary = ({ handlePostData, data }) => {
  const [image1, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [BinaryDataImage1, setBinaryDataImage1] = useState(null);
  const [BinaryDataImage2, setBinaryDataImage2] = useState(null);
  const [BinaryDataImage3, setBinaryDataImage3] = useState(null);
  const [isMessageSent, setMessageSent] = useState(false);
  const [ErrorContent, setErrorContent] = useState('');
  const [severity, setSeverity] = useState('error');
  const inputfile1 = useRef(null);
  const inputfile2 = useRef(null);
  const inputfile3 = useRef(null);
  const changeImageImage1 = () => {
    inputfile1.current.click();
  }
  const handleImageChangeImage1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBinaryDataImage1(reader.result);
      };
      const newImages = URL.createObjectURL(file);
      setImage(newImages);
    }
  }
  const changeImageImage2 = () => {
    inputfile2.current.click();
  }
  const handleImageChangeImage2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBinaryDataImage2(reader.result);
      };
      const newImages = URL.createObjectURL(file);
      setImage2(newImages);
    }
  }
  const changeImageImage3 = () => {
    inputfile3.current.click();
  }
  const handleImageChangeImage3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBinaryDataImage3(reader.result);
      };
      const newImages = URL.createObjectURL(file);
      setImage3(newImages);
    }
  } 
  const SaveData = () => {
    if (image1 === null || image2 === null || image3 === null) {
      setMessageSent(true);
      setSeverity('error');
      setErrorContent('Please Select all the images');
    } else {
      setMessageSent(true);
      setSeverity('success');
      setErrorContent('Images are saved');
      Images_ = [];
      Images_.push(BinaryDataImage1);
      Images_.push(BinaryDataImage2);
      Images_.push(BinaryDataImage3);
      console.log(Images_);
      data(Images_);
      handlePostData();
    }

  }
  const handleCloseSnackbar = () => {
    setMessageSent(false);
  }



  return (
    <>
      <div>
        <p style={{ color: 'rgba(98, 100, 106, 1)' }}>These image Meke your customer more Satisfied and Good hese image Meke your customer more Satisfied and Good</p>
        <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
          <MuiAlert elevation={6} variant="filled" severity={severity} onClose={handleCloseSnackbar}>
            {ErrorContent}
          </MuiAlert>
        </Snackbar>
        <div className='All-images'>
          <div className='Gallary-Images' onClick={changeImageImage1} >
            {
              image1 ? <img src={image1} alt='image' /> : <img src={ImageUpLoader} alt='image' />
            }
            <input type="file" name="Pic1" ref={inputfile1} accept="image/*" onChange={handleImageChangeImage1} style={{ display: 'none' }} required />
          </div>
          <div className='Gallary-Images' onClick={changeImageImage2} >
            {
              image2 ? <img src={image2} alt='image' /> : <img src={ImageUpLoader} alt='image' />
            }
            <input type="file" name="Pic1" ref={inputfile2} accept="image/*" onChange={handleImageChangeImage2} style={{ display: 'none' }} required />
          </div>

          <div className='Gallary-Images' onClick={changeImageImage3} >
            {
              image3 ? <img src={image3} alt='image' /> : <img src={ImageUpLoader} alt='image' />
            }
            <input type="file" name="Pic1" ref={inputfile3} accept="image/*" onChange={handleImageChangeImage3} style={{ display: 'none' }} required />
          </div>

        </div>
        <input
          type='submit'
          value='Save'
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



      </div>

    </>
  )
}

export default Gallary
export { Images_ };