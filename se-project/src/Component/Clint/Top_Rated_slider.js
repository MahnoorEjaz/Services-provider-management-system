// import React, { useState } from 'react';
// import Sellar_Cart from '../Saller/Sellar_Cart';
// import { Grid, Button } from '@mui/material';
// import ReactCardSlider from 'react-card-slider-component';
// import P1 from '../Pic/P4.jpg'
// import P2 from '../Pic/Gig.png'
// import P3 from '../Pic/Capture1.PNG'
// import P4 from '../Pic/p2.PNG'


// const Top_Rated_slider = () => {
//     const carddata = [
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Professional Web Development Services',
//             Rating: 5,
//             Price: 50,
//             Orders: 100,
//             Name: 'WebDevPro123',
//         },
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Graphic Design and Logo Creation',
//             Rating: 4.5,
//             Price: 40,
//             Orders: 75,
//             Name: 'DesignMaster',
//         },
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Virtual Assistant for Administrative Tasks',
//             Rating: 4.2,
//             Price: 20,
//             Orders: 50,
//             Name: 'VAExpert',
//         },
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Professional Copywriting and Content Writing',
//             Rating: 4.7,
//             Price: 35,
//             Orders: 90,
//             Name: 'CopyWordsmith',
//         },
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Video Editing and Post-Production Services',
//             Rating: 4.4,
//             Price: 45,
//             Orders: 60,
//             Name: 'VideoWizard',
//         },
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Social Media Marketing and Advertising',
//             Rating: 4.6,
//             Price: 30,
//             Orders: 80,
//             Name: 'SocialMediaGuru',
//         },
//         {
//             url: [P1, P2, P3, P4],
//             title: 'Translation Services for Multiple Languages',
//             Rating: 4.0,
//             Price: 25,
//             Orders: 40,
//             Name: 'LangMaster',
//         },
//     ];

//     const slides = carddata.map((data, index) => ({
//         content: (
//             <div key={index}>
//                 {/* Render your card content here */}
//                 <Sellar_Cart CardData={data} />
//             </div>
//         ),
//     }));

//     return (
//         <div>
//             {/* Pass the slides array to ReactCardSlider */}
//             <ReactCardSlider slides={slides} />
//         </div>
//     );
// };

// export default Top_Rated_slider;


import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const cards = [
  { title: 'Card 1', content: 'Content for card 1.' },
  { title: 'Card 2', content: 'Content for card 2.' },
  { title: 'Card 3', content: 'Content for card 3.' },
  { title: 'Card 4', content: 'Content for card 4.' },
  { title: 'Card 5', content: 'Content for card 5.' },
  { title: 'Card 6', content: 'Content for card 6.' },
  { title: 'Card 7', content: 'Content for card 7.' },
  { title: 'Card 8', content: 'Content for card 8.' },
  { title: 'Card 9', content: 'Content for card 9.' },
  { title: 'Card 10', content: 'Content for card 10.' },
];

const MultiCardCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {cards.slice(activeStep, activeStep + 5).map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <Button
          disabled={activeStep + 5 >= cards.length}
          onClick={handleNext}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
