import React from 'react';
import './Skills.css';
import { SkillsList , SkillsList2 , SkillsList3 } from './SkillsList';
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
                  {SkillsList.map((item)=>(
                    <>
                    <button className='skillsBarText1Btn' key={item.id}>{item.name}</button>
                    </> 
                  ))}
                </div>
            </div>
         </div>
         <div className='skillsBar1'>
            <img src={nodejsImage} alt='skillsBar2Img' className='skillsBarImg'/>
            <div className='skillsBarText1'>
                <h1 className='skillsBarText1h1'>Backend and Database</h1>
                <div className='skillsBarBtnDiv'>
                  {SkillsList2.map((item)=>(
                    <>
                    <button className='skillsBarText1Btn' key={item.id}>{item.name}</button>
                    </>
                  ))}
                </div>
            </div>
         </div>
         <div className='skillsBar1'>
            <img src={githubImage} alt='skillsBar3Img' className='skillsBarImg'/>
            <div className='skillsBarText1'>
                <h1 className='skillsBarText1h1'>Tools and others</h1>
                <div className='skillsBarBtnDiv'>
                  {SkillsList3.map((item)=>(
                     <>
                    <button className='skillsBarText1Btn' key={item.id}>{item.name}</button>     
                     </>
                  ))}
                </div>
            </div>
         </div>
       </div>
    </section>
  )
}

export default Skills;
