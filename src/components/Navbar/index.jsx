import React from 'react';
import { useEffect } from 'react';
import './style.scss';

const NavElement = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'Blogs',
    link: 'https://bdbose123.medium.com/',
  },
];

const Navbar = () => {
  useEffect(() => {
    if (document) {
      const navbar = document.querySelector('nav');
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > 0) {
          navbar.classList.add('nav-background');
        } else {
          navbar.classList.remove('nav-background');
        }
      });
    }
  }, []);

  return (
    <nav>
      <a href='/' className='logo'>
        BoseCode
      </a>
      <div className='nav-elements'>
        {NavElement.map((ele) => {
          return (
            <a
              key={ele.title}
              href={ele.link}
              className={`nav-links ${
                window.location.pathname === ele.link ? 'nav-active' : ''
              }`}>
              {ele.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
