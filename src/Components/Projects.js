import React from 'react';
import ProjectBox from './ProjectBox';

import airbnb from '../images/airbnb.png';
import primetube from '../images/primetube.png'
import doit from '../images/doit.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={airbnb} projectName="Airbnb" />
        <ProjectBox projectPhoto={primetube} projectName="PrimeTube" />
        <ProjectBox projectPhoto={doit} projectName="Doit" />
      </div>

    </div>
  )
}

export default Projects