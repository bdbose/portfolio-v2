import React from 'react';
import FbLogo from '../../assets/svgs/fb.svg';
import InstaLogo from '../../assets/svgs/insta.svg';
import LinkedInLogo from '../../assets/svgs/linkedin.svg';
import GithubLogo from '../../assets/svgs/github.svg';
import TwitterLogo from '../../assets/svgs/twitter.svg';
import YtLogo from '../../assets/svgs/youtube.svg';
import FbLogoActive from '../../assets/svgs/facebook_active.png';
import InstaLogoActive from '../../assets/svgs/instagram_active.png';
import LinkedInLogoActive from '../../assets/svgs/linkedin_active.png';
import GithubLogoActive from '../../assets/svgs/github_active.png';
import TwitterLogoActive from '../../assets/svgs/twitter_active.png';
import YtLogoActive from '../../assets/svgs/youtube_active.png';
import './style.scss';

const SocialLinks = [
  {
    icon: LinkedInLogo,
    active: LinkedInLogoActive,
    link: 'https://www.linkedin.com/in/bidipto-bose-981b541b6/',
  },
  {
    icon: GithubLogo,
    link: 'https://github.com/bdbose',
    active: GithubLogoActive,
  },
  {
    icon: TwitterLogo,
    link: 'https://twitter.com/bdbose123',
    active: TwitterLogoActive,
  },
  {
    icon: YtLogo,
    link: 'https://www.youtube.com/channel/UC-8SZhRIyLvv2TMHkpghjCQ',
    active: YtLogoActive,
  },
  {
    icon: FbLogo,
    link: 'https://www.facebook.com/bidipto.bose',
    active: FbLogoActive,
  },
  {
    icon: InstaLogo,
    link: 'https://www.instagram.com/bdbose/',
    active: InstaLogoActive,
  },
];

const Footer = () => {
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
