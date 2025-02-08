import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaJava,FaHtml5, FaCss3} from "react-icons/fa";
import {DiNodejs, DiJavascript1,DiMysql} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel,SiSpringboot,SiTailwindcss,SiRedux } from "react-icons/si";

const Skills = ({skill}) => {
  const icon = {
        Html: <FaHtml5/>,
        Css: <FaCss3/>,
        Tailwind: <SiTailwindcss/>,
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Redux: <SiRedux/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Mysql: <DiMysql/>,
        Java : <FaJava/>,
        SpringBoot: <SiSpringboot/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
