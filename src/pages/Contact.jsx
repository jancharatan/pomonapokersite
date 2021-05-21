import React from 'react';
import Header from '../components/Header';
import '../App.css';

const Contact = () => (
    <div>
        <Header />
        <div className="App-body"> 
            The best way to get in contact with us is to reach out to our president Kevin Wu at <a href = "mailto:kywa2019@mymail.pomona.edu">kywa2019 [at] mymail [dot] pomona [dot] edu</a>.
            If you are a Pomona College student interested in joining our club, please fill out the Google form attached below and join our club page on Engage.
        </div>
        <div className="Contact-form">
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeHSNJpMh8s0BiluAWkCWBRKoueNm3jNuJ8xeEB8PIz3fGvPQ/viewform?embedded=true" 
                width="640" 
                height="1860" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                title="Google Form"
            >
                Loading…
            </iframe>
        </div>
    </div>
    
)

export default Contact;