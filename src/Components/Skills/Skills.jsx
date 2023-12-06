import React from 'react';
import './Skills.css';
import {githubImage , nodejsImage , reactImage} from '../../assets';

const Skills = () => {
  return (
    <section className='skills'>
       <h1 className='skillsTitle'>Skills</h1>
       <p className='skillsDescription'>I am skilled and proficient web developer , proficient in these tech stack and actively working with it.</p>
       <div className='skillsBars'>
         <div className='skillsBar1'>
            <img src={reactImage} alt='skillsBar1Img' className='skillsBarImg'/>
            <div className='skillsBarText1'>
                <h1 className='skillsBarText1h1'>Frontend</h1>
                <div className='skillsBarBtnDiv'>
                    <button className='skillsBarText1Btn'>HTML</button>
                    <button className='skillsBarText1Btn'>CSS</button>
                    <button className='skillsBarText1Btn'>Bootstrap</button>
                    <button className='skillsBarText1Btn'>Material UI</button>
                    <button className='skillsBarText1Btn'>Javascript</button>
                    <button className='skillsBarText1Btn'>ReactJS</button>
                    <button className='skillsBarText1Btn'>Redux</button>
                    <button className='skillsBarText1Btn'>Responsive Design</button>
                </div>
            </div>
         </div>
         <div className='skillsBar1'>
            <img src={nodejsImage} alt='skillsBar2Img' className='skillsBarImg'/>
            <div className='skillsBarText1'>
                <h1 className='skillsBarText1h1'>Backend and Database</h1>
                <div className='skillsBarBtnDiv'>
                    <button className='skillsBarText1Btn'>NodeJS</button>
                    <button className='skillsBarText1Btn'>ExpressJS</button>
                    <button className='skillsBarText1Btn'>MySQL</button>
                    <button className='skillsBarText1Btn'>MongoDB</button>
                </div>
            </div>
         </div>
         <div className='skillsBar1'>
            <img src={githubImage} alt='skillsBar3Img' className='skillsBarImg'/>
            <div className='skillsBarText1'>
                <h1 className='skillsBarText1h1'>Tools and others</h1>
                <div className='skillsBarBtnDiv'>
                    <button className='skillsBarText1Btn'>Github</button>
                    <button className='skillsBarText1Btn'>Git</button>
                    <button className='skillsBarText1Btn'>VSCode</button>
                    <button className='skillsBarText1Btn'>Vercel</button>
                    <button className='skillsBarText1Btn'>OOPS</button>
                    <button className='skillsBarText1Btn'>Computer Networks</button>
                    <button className='skillsBarText1Btn'>Operating System</button>
                    <button className='skillsBarText1Btn'>Data structures</button>
                    <button className='skillsBarText1Btn'>Algorithms</button>
                </div>
            </div>
         </div>
       </div>
    </section>
  )
}

export default Skills;
