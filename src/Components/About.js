import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, <b>I’m Shakti Kumar</b>, a <b>Full Stack Developer</b> specializing in <b>MERN & Java Spring Boot.</b> I hold a <b>B.Tech Degree</b> in Computer Science from Shrinathji Institute for Technical Education with a <b>CGPA of 7.8</b>.
          <br /> <br />
          I have expertise in <b>React.js, Next.js, Redux Toolkit, Node.js, Express.js, Prisma, MongoDB, and NextAuth</b>, along with strong UI/UX design and authentication system development. My projects, including an Airbnb Clone and PrimeTube, showcase my ability to build responsive, scalable applications with modern web technologies.
          <br /><br />
          I'm always eager to learn, collaborate, and take on new challenges. Let's connect and build something amazing! 🚀
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Html' />
        <Skills skill='Css' />
        <Skills skill='Tailwind' />
        <Skills skill='React' />
        <Skills skill='Redux' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill="Mysql" />
        <Skills skill="Java" />       
        <Skills skill="SpringBoot" />       
      </div>
    </>
  )
}

export default About