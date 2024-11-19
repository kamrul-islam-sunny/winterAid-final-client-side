import React from 'react';
import Banner from '../components/banner';
import About from '../components/About';
import OurVolunteer from '../components/OurVolunteer';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            {/* banner section */}
            <Banner></Banner>

            {/* About section */}
            <About></About>
            {/* Our Volunteer  */}
            <OurVolunteer></OurVolunteer>
            {/* Our sponsor */}
        </div>
    );
};

export default Home;