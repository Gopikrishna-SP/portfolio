import React from 'react';
import Image from './Background.png';

function About() {
    return (
        <>
        <div className='about'>
            <div className='about-name'>
                <p>Hello , I am <br/><span className='name'>Gopikrishna S P</span><br/> a <br/><span className='name'>FullStack Developer</span><br/></p>   
                <button className='hire-button'><a href='mailto:krish.official365@gmail.com'>Hire Me </a></button>
            </div>            
            <img src={Image} height="400px" alt='Image' className='about-image'/>            
        </div>

        <div className='about-content'>
        <div className='about-content-flex'>
            <h3>About Me</h3>
            <p>Hi there, I am Gopikrishna, a young Full-Stack Developer.
            I have the necessary skills to support your tech team because 
            I am proficient in HTML5, CSS3, JavaScript, React.js, and Spring Boot. 
            With a Bachelor's degree in Information Technology , I blend academic understanding with practical
            experience. Initiatives such as my works demonstrate my ability to solve problems deftly and my 
            dedication to turning ideas into practical, user-focused products. Along with my technical expertise, 
            I'm bringing an unquenchable curiosity and unrelenting dedication to my career journey. 
            I'm prepared to get my hands dirty, add value, and grow with your innovative team. I am thrilled
             to have the chance to assist and gain knowledge from your knowledgeable team. Together, let's begin our Journey!</p>
        </div>
        </div>
        </>
        
    );
}

export default About;