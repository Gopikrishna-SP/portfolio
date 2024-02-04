import React from 'react';
import html_logo from './html_logo.png';
import css_logo from './css_logo.png';
import javascript_logo from './javascript_logo.png';
import java_logo from './java_logo.png';
import mysql_logo from './mysql_logo.png';
import reactjs_logo from './reactjs_logo.png';
import springboot_logo from './springboot_logo.png';
import Certificate from './Certificate';

function Skill() {
    return (
        <>
        <div className='skill'>
            <div className='skill-content'>
                    <h3>Skills</h3>
                    <div className='box b1'>Html <img src={html_logo} alt='html_logo' height={'30px'} width={'30px'}></img></div>
                    <div className='box b2'>Css <img src={css_logo} alt='css_logo' height={'30px'} width={'30px'}></img></div>
                    <div className='box b3'>Javascript <img src={javascript_logo} alt='js_logo' height={'30px'} width={'30px'}></img></div>
                    <div className='box b4'>Java <img src={java_logo} alt='java_logo' height={'30px'} width={'30px'}></img></div>
                    <div className='box b5'>MySQL <img src={mysql_logo} alt='mysql_logo' height={'30px'} width={'30px'}></img></div>
                    <div className='box b6'>React.js <img src={reactjs_logo} alt='react_logo' height={'30px'} width={'30px'}></img></div>
                    <div className='box b7'>Spring Boot <img src={springboot_logo} alt='spring_logo' height={'30px'} width={'30px'}></img></div>
            </div>
        </div>
        </>
    );
}

export default Skill;