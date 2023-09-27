/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Map = () => {
    return (
        <div style={{ margin: '5px' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0177817112826!2d74.35483677537678!3d31.578560244265226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b279f00af0b%3A0x927b40170bb6804c!2sDepartment%20of%20Computer%20Science%20-%20UET%20Lahore!5e0!3m2!1sen!2s!4v1695834842951!5m2!1sen!2s"
                width="385"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0177817112826!2d74.35483677537678!3d31.578560244265226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b279f00af0b%3A0x927b40170bb6804c!2sDepartment%20of%20Computer%20Science%20-%20UET%20Lahore!5e0!3m2!1sen!2s!4v1695840575068!5m2!1sen!2s" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
    );
}

export default Map;
