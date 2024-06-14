import React from 'react';
import HeaderBar from './HeaderBar';
import HeaderBar2 from './HeaderBar2';
import Slides from './Slides'; // Import the Slides component
import Mainpage from './Mainpage';
import '../Styles/Home.css'; // Import CSS file for custom styles
import Emotional from './Emotional';
import Faq from './Faq';

  const Home = () => {
    return (
      <div className="home-container">
        <HeaderBar />
        <HeaderBar2 />
        <Mainpage/>
        <Slides/>
        <Emotional/>
        <Faq/>
      </div>
    );
  }

export default Home;
