import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Button, Grid } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { LinearProgress, Typography } from '@mui/material';
import ReviewComponent from './ReviewComponet';


const Gig_View = ({ Current_Service }) => {

  const images = Current_Service.url.map((url) => ({
    original: url,
    thumbnail: url,
    originalHeight: 500, // Set the desired height
    originalWidth: 300,  // Set the desired width
  }));

  return (
    <>
      <div className='Hi-clint' >
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{Current_Service.title}</p>
        <div style={{ display: 'flex' }}>
          <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px' }}>{Current_Service.Name[0]}</Avatar> 
          <p style={{ marginLeft: '10px' }}>{Current_Service.Name}<span style={{ color: 'rgba(255, 190, 91, 1)', marginLeft: '5px' }}> |Top Rated Seller  | </span>
            <Rating name="read-only" value={Current_Service.Rating} readOnly size="small" ></Rating>({Current_Service.Orders}) 
          </p>
        </div>
        {/* image and package is done  */}
        <div >
          <Grid container spacing={0}>
            <Grid item md={6} lg={6} xs={12}>
              <div className='image-service'>
                <Gallery
                  items={images}
                  showThumbnails={true}
                  showFullscreenButton={false}
                  showPlayButton={false}
                />
              </div>
            </Grid>
            <Grid item md={6} lg={6} xs={12}>
              <div className='Package-card'>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <p>BASIC Price</p>
                  <p>${Current_Service.Price}</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                 {Current_Service.type}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                  <Button variant="contained" style={{ width: '100%', marginBottom: '200px', backgroundColor: 'rgba(29, 191, 115, 1)', textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>Continue<FaArrowRight />  </Button>
                  <Button variant="contained" style={{ width: '100%', backgroundColor: 'white', border: '1px solid gray', color: 'rgba(98, 100, 106, 1)', marginBottom: '50px' }}>Contact Seller</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* about the service page is now working */}
        <div className='Service-Page'>
          <div>
            <p className='About-Service'>About Service</p>
            <p>
              The accessibility of this component relies on:
              A radio group with its fields visually hidden. It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the name prop that is unique to the parent form.
              Labels for the radio buttons containing actual text ("1 Star", "2 Stars", …). Be sure to provide a suitable function to the getLabelText prop when the page is in a language other than English. You can use the included locales, or provide your own.
              A visually distinct appearance for the rating icons. By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match success Criterion 1.4.1 of WCAG2.1.
              ARIA
              The read only rating has a role of "img", and an aria-label that describes the displayed rating.
              Keyboard
              Because the rating component uses radio buttons, keyboard interaction follows the native browser behavior. Tab will focus the current rating, and cursor keys control the selected rating.
              The read only rating is not focusable.
              API
              See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
            </p>
            <hr />
            <p style={{ fontSize: '16px', color: 'rgba(149, 151, 157, 1)' }}>Product  Type </p>
            <span>{Current_Service.type} </span>
          </div>
          {/* Here is the about saller page contant  */}
          <div style={{ marginTop: '100px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>About Saller</p>
            <div style={{ display: 'flex' }}>
              <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px', height: "100px", width: "100px" }} >{Current_Service.Name[0]}</Avatar>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px' }}>
                <div>
                  <p>{Current_Service.Name}</p>
                  <p>{Current_Service.type}</p>
                  <p>
                  <Rating name="read-only" value={Current_Service.Rating} readOnly></Rating>({Current_Service.Orders}) 
                  </p>
                </div>
                <Button variant="contained" style={{ width: '100%', backgroundColor: 'white', border: '1px solid gray', color: 'rgba(98, 100, 106, 1)' }}>Contact Me</Button>
              </div>
            </div>
          </div>
          {/* review page section  */} 
          <div style={{ marginTop: '100px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Reviews</p>
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{Current_Service.Orders} Reviews About this Service <Rating name="read-only" value={Current_Service.Rating} readOnly size="small" >{99}</Rating>{Current_Service.Orders}</p>
            <div>
              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  5 Stars:
                </Typography>
                <LinearProgress
                  style={{ width: '40%' }}
                  variant="determinate"
                  value={90}
                  sx={{
                    backgroundColor: 'rgba(228, 229, 231, 1)', // Change the background color
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'rgba(255, 179, 62, 1)', // Change the progress bar color
                    },
                  }}
                />
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  (120)
                </Typography>
              </div>

              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  4 Stars:
                </Typography>
                <LinearProgress
                  style={{ width: '40%' }}
                  variant="determinate"
                  value={70}
                  sx={{
                    backgroundColor: 'rgba(228, 229, 231, 1)', // Change the background color
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'rgba(255, 179, 62, 1)', // Change the progress bar color
                    },
                  }}
                />
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  (60)
                </Typography>
              </div>

              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  3 Stars:
                </Typography>
                <LinearProgress
                  style={{ width: '40%' }}
                  variant="determinate"
                  value={60}
                  sx={{
                    backgroundColor: 'rgba(228, 229, 231, 1)', // Change the background color
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'rgba(255, 179, 62, 1)', // Change the progress bar color
                    },
                  }}
                />
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  (60)
                </Typography>
              </div>

              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  2 Stars:
                </Typography>
                <LinearProgress
                  style={{ width: '40%' }}
                  variant="determinate"
                  value={50}
                  sx={{
                    backgroundColor: 'rgba(228, 229, 231, 1)', // Change the background color
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'rgba(255, 179, 62, 1)', // Change the progress bar color
                    },
                  }}
                />
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  (50)
                </Typography>
              </div>

              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  1 Stars:
                </Typography>
                <LinearProgress
                  style={{ width: '40%' }}
                  variant="determinate"
                  value={40}
                  sx={{
                    backgroundColor: 'rgba(228, 229, 231, 1)', // Change the background color
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'rgba(255, 179, 62, 1)', // Change the progress bar color
                    },
                  }}
                />
                <Typography color={'rgba(68, 110, 231, 1)'} variant="body1" marginY={-1.5} marginX={3}>
                  (40)
                </Typography>
              </div>



            </div>
            <div style={{ marginTop: '100px' }}>
              <ReviewComponent name="John Doe" review="This is a great product!" Rating_={3} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
              <ReviewComponent name="Alice Smith" review="I love it!" Rating_={5} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Gig_View;
