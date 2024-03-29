import React from 'react';
import './style.scss';
import ProjectCard from '../../components/ProjectCard';

const data = {
  'Live Projects': [
    {
      title: 'Vamo - A Online Fashion Brand',
      link: 'https://vamo.co.in/',
      img: '/project/p2.webp',
      tech: 'NextJs + NodeJS + MongoDb + AWS(EC2)',
      desc: 'Vamo is an online store offering the latest trendy clothing. Built with Next.js and Node.js, it leverages MongoDB for data storage. Cashfree integration provides a secure and seamless payment solution, ensuring a smooth shopping experience for customers. Vamo combines modern web technologies to deliver a dynamic and reliable e-commerce platform for fashion enthusiasts.',
    },
    {
      title: 'Pocket Trainer - A Online Fitness Trainer',
      link: 'https://pocket-trainer.netlify.app/',
      img: '/project/p1.webp',
      tech: 'ReactJs + NodeJS + MongoDb',
      desc: 'Pocket Trainer is an online gym that offers personalized training courses and sessions. Built with React.js, Node.js, and MongoDB, it provides a seamless and interactive user experience. Users can access a variety of fitness programs, receive personalized guidance, and track their progress. With Razorpay as the payment solution, Pocket Trainer ensures secure and convenient transactions for its users.',
    },
    {
      title: 'QuizAce - The Smart Quiz App',
      link: 'https://play.google.com/store/apps/details?id=com.bosecodequizace&hl=en_IN&gl=US',
      img: '/project/p3.webp',
      tech: 'React Native + Firebase',
      desc: "QuizAce - The Smart Quiz App is an engaging mobile game available exclusively on the Google Play Store. Developed using React Native, the app offers a seamless and immersive quiz experience for Android users. Leveraging the power of FireBase, the game utilizes its robust backend infrastructure for efficient data storage, user authentication, and real-time updates. With React Native's cross-platform capabilities and FireBase's reliability, QuizAce delivers a smooth and interactive user interface, making it a must-have game for Android users looking to test their knowledge across various topics.",
    },
    {
      title: 'Raxel - The Pixel Art Maker',
      link: 'https://raxel.vercel.app/',
      img: '/project/p4.webp',
      tech: 'NextJs',
      desc: "Raxel - The Pixel Art Maker is a Web App built using Next.js, a popular React framework. It enables users to create pixel art designs by placing individual pixels on a canvas. Next.js provides server-side rendering and optimized performance, while React's component-based architecture ensures a seamless user interface. Raxel leverages Next.js's routing capabilities for easy navigation and incorporates responsive design principles for a consistent experience across devices.",
    },
    {
      title: 'ChatRoom - A Online ChatRoom',
      link: 'https://www.youtube.com/watch?v=Wuz6HkswdAM',
      img: '/project/p5.webp',
      tech: 'ReactJs + NodeJs + SocketIO',
      desc: 'This Chat App is built using React.js for the front-end, Node.js for the back-end, and Socket.IO for real-time communication. It allows users to chat in real-time, sending and receiving messages instantly. The React.js components provide a dynamic user interface, while Node.js and Socket.IO handle the server-side logic, enabling seamless communication between clients.',
    },
  ],
  'NPM Packages': [
    {
      title: 'react-responsive-calendar-picker',
      link: 'https://www.npmjs.com/package/react-responsive-calendar-picker',
      tech: 'Monthly 200+ downloads',
      desc: 'A Date Picker Calendar that is fully custom for hotel business. We can block dates/select/add custom data to every date.',
      img: '',
    },
    {
      title: 'multi-date',
      link: 'https://www.npmjs.com/package/multi-date',
      tech: 'Monthly 150+ downloads',
      desc: 'Multi-date have various functions to make your date handling easy.',
      img: '',
    },
    {
      title: 'responsive-navbar-react',
      link: 'https://www.npmjs.com/package/responsive-navbar-react',
      tech: 'Monthly 250+ downloads',
      desc: 'A Responsive Navbar Component for making Navbars easily.',
      img: '',
    },
  ],
};

const Project = () => {
  return (
    <main>
      <div className='project-wrapper'>
        {Object.keys(data).map((ele) => {
          return (
            <section key={ele}>
              <h2>{ele}</h2>
              <div className='project-contaienr'>
                {data[ele].map((e) => {
                  return <ProjectCard {...e} key={e.title} />;
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Project;
