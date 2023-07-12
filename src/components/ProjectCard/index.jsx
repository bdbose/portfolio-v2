import React from 'react';
import './style.scss';

const ProjectCard = ({ link, img, title, desc, tech }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='project-card-wrapper'>
      <img src={img} alt='' />
      <div className='project-details'>
        <div className='project-title'>{title}</div>
        <div className='project-tech'>{tech}</div>
        <div className='project-description'>{desc}</div>
      </div>
    </a>
  );
};

export default ProjectCard;
