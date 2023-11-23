import React from 'react';
import HeroSection from '../HomeComponents/HeroSection';
import FindServices from '../HomeComponents/FindServices';
import About from '../HomeComponents/About';
import ServiceSection from '../HomeComponents/ServiceSection';
import Feature from '../HomeComponents/Feature';
import Doctors from '../HomeComponents/Doctors';
import Faq from '../HomeComponents/Faq';
import Testimonial from '../HomeComponents/Testimonial';
  
const Home = () => {
    return (
        <div>
            
            <HeroSection></HeroSection>
            <FindServices></FindServices>
            <About></About>
            <ServiceSection></ServiceSection>
          
            <Feature></Feature>
            <Doctors></Doctors>
            <Faq></Faq>
            <Testimonial></Testimonial>
 



        </div>
    );
};

export default Home;