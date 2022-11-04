import React from 'react';

const Footer = ({ SocialLinks }) => {
  return (
    <footer>
      <h2>BOSE.CODE</h2>
      <div className='footer-links-wrapper'>
        {SocialLinks.map((ele) => (
          <a
            className='socail-link-href'
            href={ele.link}
            key={ele.link}
            target='_blank'
            rel='noreferrer'>
            <img className='img-icon' src={ele.icon} alt='' />
          </a>
        ))}
      </div>
      <div className='footer-links-container'>
        <a href='/'>Home</a>
        <span>•</span>
        <a href='/project'>Project</a>
        <span>•</span>
        <a href='/contact'>Contact</a>
      </div>
      <h6>COPYRIGHT © 2022 BIDIPTO BOSE</h6>
    </footer>
  );
};

export default Footer;
