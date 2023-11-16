import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Button, Grid } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { LinearProgress, Typography } from '@mui/material';
import ReviewComponent from './ReviewComponet';
import { useEffect, useState } from 'react';
import { AppContext } from '../../App';
import * as React from 'react';



const Gig_View = () => {

  const { Current_Service, Set_Current_Service } = React.useContext(AppContext);
  // Create a state variable for 'one'
  const [one, setOne] = useState(Current_Service);
  // Load the data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('Current_Service');
    console.log(storedData);
    if (storedData) {
      alert('Data is stored');
      // If data exists, parse and set it to the state variable
      setOne(JSON.parse(storedData));
    } 
    else{
      alert('Data is not stored');
    }
  }, []); 


  //  image gallary is done 
  const images = one.Gallary.map((url) => ({
    original: url.data,
    thumbnail: url.data,
    originalHeight: 500, // Set the desired height
    originalWidth: 300, // Set the desired width
  }));











  return (
    <>
      <div className='Hi-clint' >
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{one.ServiceTitle}</p>
        <div style={{ display: 'flex' }}>
          <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px' }}>  {one.createdBy && one.createdBy.Name ? one.createdBy.Name[0] : ''}  </Avatar>
          <p style={{ marginLeft: '10px' }}>
            {one.createdBy && one.createdBy.Name ? (
              <>
                {one.createdBy.Name}
                <span style={{ color: 'rgba(255, 190, 91, 1)', marginLeft: '5px' }}> |Top Rated Seller  | </span>
                <Rating name="read-only" value={5} readOnly size="small" />
                ({one.NumberOfOrders})
              </>
            ) : (
              'Seller information not available'
            )}
          </p>
        </div>
        {/* image and package is done  */}
        <div >
          <Grid container spacing={0}>
            <Grid item md={6} lg={6} xs={12}>
              <div className='image-service'>
                <Gallery
                  items={images} // images is the array of objects
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
                  <p>${one.BasicPrice}</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                  {one.ServiceType}
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
            <div dangerouslySetInnerHTML={{ __html: one.Description }} />
            <hr />
            <p style={{ fontSize: '16px', color: 'rgba(149, 151, 157, 1)' }}>Product  Type </p>
            <span>{one.ServiceType} </span>
          </div>
          {/* Here is the about saller page contant  */}
          <div style={{ marginTop: '100px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>About Saller</p>
            <div style={{ display: 'flex' }}>
              <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px', height: "100px", width: "100px" }} >  {one.createdBy && one.createdBy.Name ? one.createdBy.Name[0] : ''}  </Avatar>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px' }}>
                <div>
                  <p> {one.createdBy && one.createdBy.Name}</p>
                  <p>{one.ServiceType}</p>
                  <p>
                    <Rating name="read-only" value={4} readOnly></Rating>({one.NumberOfOrders})
                  </p>
                </div>
                <Button variant="contained" style={{ width: '100%', backgroundColor: 'white', border: '1px solid gray', color: 'rgba(98, 100, 106, 1)' }}>Contact Me</Button>
              </div>
            </div>
          </div>
          {/* review page section  */}
          <div style={{ marginTop: '100px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Reviews</p>
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{one.NumberOfOrders} Reviews About this Service <Rating name="read-only" value={4} readOnly size="small" >{99}</Rating>{one.NumberOfOrders}</p>
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
