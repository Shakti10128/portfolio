import React from 'react';
import {FaGithub, FaLinkedin,FaWhatsapp} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  console.log(process.env.REACT_APP_EMAIL_ID)
  return (
    <footer>
      <h4>Developed by Shakti Kumar</h4>
      <h4>Copyright &copy; 2025 SK</h4>
      <div className='footerLinks'>
        <a href={process.env.REACT_APP_GITHUB_URL} target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href={process.env.REACT_APP_LINKEDIN_URL} target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href={"emailto:"+process.env.REACT_APP_EMAIL} target='_blank' rel="noreferrer"><GrMail/></a>
        <a href={process.env.REACT_APP_LEETCODE_URL} target="_blank" rel="noreferrer"><SiLeetcode/></a>
        <a href={process.env.REACT_APP_WHATSAPP_API + process.env.REACT_APP_WHATSAPP_NUMBER} target="_blank" rel="noreferrer"><FaWhatsapp/></a>
      </div>
    </footer>
  )
}

export default Footer