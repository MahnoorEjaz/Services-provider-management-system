import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustomAccordion() {
    const accordionData = [
        {
            question: 'What is a services management website?',
            answer:
                'A services management website is an online platform designed to help businesses efficiently manage and deliver various services, such as scheduling appointments, tracking orders, and managing customer interactions.',
        },
        {
            question: 'Why do businesses need a services management website?',
            answer:
                'Businesses need a services management website to streamline their operations, improve customer satisfaction, and increase efficiency. It allows them to automate tasks, manage resources, and provide better service to their clients.',
        },
        {
            question: 'What are the key features of a services management website?',
            answer:
                'Key features of a services management website include appointment scheduling, customer database management, service tracking, payment processing, and reporting and analytics.',
        },
        {
            question: 'How can a services management website benefit customers?',
            answer:
                'Customers benefit from services management websites by having access to convenient appointment booking, real-time updates on service progress, and easy communication with service providers. It enhances their overall experience.',
        },
        {
            question: 'What industries can benefit from services management websites?',
            answer:
                'Services management websites can benefit a wide range of industries, including healthcare, beauty and wellness, home services, automotive, education, and more.',
        },
        {
            question: 'Are services management websites secure?',
            answer:
                'Yes, reputable services management websites implement robust security measures to protect customer data, financial transactions, and sensitive information. They use encryption and adhere to industry standards.',
        },
        {
            question: 'Can services management websites integrate with other software?',
            answer:
                'Yes, many services management websites offer integrations with other software such as payment gateways, customer relationship management (CRM) systems, and accounting software for enhanced functionality.',
        },
        {
            question: 'How can businesses choose the right services management website platform?',
            answer:
                'Businesses should consider their specific needs, scalability, ease of use, pricing, customer support, and reviews when choosing a services management website platform.',
        },
        {
            question: 'What are the advantages of cloud-based services management websites?',
            answer:
                'Cloud-based services management websites offer scalability, accessibility from anywhere, automatic updates, and reduced IT infrastructure costs compared to on-premises solutions.',
        },
        {
            question: 'What trends are emerging in services management websites?',
            answer:
                'Emerging trends include mobile apps for service providers and customers, AI-driven scheduling and recommendations, and enhanced analytics for data-driven decision-making.',
        },
    ];


    return (
        <div style={{marginTop:'100px'}} >
            <h2 style={{ textAlign: 'center', color: '#40a9ff' }}>
                Most Frequently Asked Questions
            </h2>
            {
                accordionData.map((item, index) => (
                    <Accordion
                        key={index}
                        style={{ backgroundColor: '#8adc8a', color: '#40a9ff', color: '#fff', fontSize: '20px' }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}> {item.question} </AccordionSummary>
                        <AccordionDetails style={{ backgroundColor: '#fff', color: 'black' }}>  {item.answer}</AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}

export default CustomAccordion;
