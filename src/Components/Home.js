import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SHAKTI KUMAR</b></h1>
          <Typed/>   
        </div>

        {/* <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        /> */}
          <img className='homeImg1' src={process.env.REACT_APP_PROFILE1_URL} alt="" />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I love transforming raw ideas into functional websites and products that make an impact. As a developer, I enjoy tackling challenges that push me to grow and create work I’m proud of.<br /><br />
          I specialize in <b>MERN stack development</b> and have experience with <b>Next.js</b>, <b>TypeScript</b>, and <b>Java</b>. I’m also fluent in C++, have knowledge of DSA, and have worked on several full-stack projects. My focus is on building responsive, user-friendly applications with smooth UI/UX and interactive elements.<br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className="homeImg1" src={process.env.REACT_APP_PROFILE2_URL} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home