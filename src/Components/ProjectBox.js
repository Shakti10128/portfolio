import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AirbnbDesc : "Airbnb Clone is a rental booking platform with secure authentication, advanced filters, and a seamless booking system. Built with React, Next.js, Prisma, and MongoDB, it offers a smooth UI and responsive design for an enhanced user experience. 🚀",
    AirbnbGithub : "https://github.com/Shakti10128/airbnb",
    AirbnbWebsite : "https://real-estate-ecru-alpha.vercel.app/",

    PrimeTubeDesc : "PrimeTube is a YouTube-like platform with dynamic video search, modern UI, and efficient state management. Built with React, Redux Toolkit, & Tailwind, it ensures a responsive and smooth user experience across all devices. 🎥🚀",
    PrimeTubeGithub : "https://github.com/Shakti10128/youtubb",
    PrimeTubeWebsite : "https://youtube-kappa-nine.vercel.app/",

    DoitDesc:"DoIt is a task management app with intuitive UI, task tracking, reminders, and visual analytics. Built with React, Tailwind, and Chart.js, it ensures a seamless, efficient, and organized productivity experience for users, enhancing workflow. ✅📊",
    DoitGithub:"https://github.com/Shakti10128/Doit",
    DoitWebsite:"https://doit-phi.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox