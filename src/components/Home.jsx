// import React from 'react';
import HeaderBar from './HeaderBar';
import H from './H';
import HeaderBar2 from './HeaderBar2';
import Slides from './Slides'; // Import the Slides component
import Mainpage from './Mainpage';
import '../Styles/Home.css'; // Import CSS file for custom styles
// import Emotional from './Emotional';
import Faq from './Faq';
import Main from './Main';
import Guide from './Guide';
import Footer from './Footer';
// import SuccessStories from './SuccessStories';
import About from './About';
// import RecentFunders from './RecentFunders';
import Upcoming from './Upcoming';
import DonationChoices from './DonationChoices';
// import Analysis from './Analysis';
// import Training from './Training';
import New from './New';
  const Home = () => {
    return (
      <div className="home-container">
       {/* <HeaderBar /> 
        <HeaderBar2 />
        <Main/>
        <Mainpage/>
        <Slides/>
        <New/>  */}
        <H/>
        {/* <About/> */}
        {/* <Upcoming/> */}
        {/* <DonationChoices/> */}
        {/* <Guide/> */}
        {/* <RecentFunders/> */}
        {/* <SuccessStories/> */}
        {/* <Faq/> */}
      </div>
    );
  }

export default Home;
// 