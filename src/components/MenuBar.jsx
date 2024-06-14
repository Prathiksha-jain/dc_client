import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import Training from './Training';

const Menubar = () => {
  
  const items = [
    { title: 'Home', path: '/' },
    { title: 'Events', path: '/events' },
    { title: 'Public-Infra', path: '/infra' },
    { title: 'Education', path: '/education' },
    { title: 'Health', path: '/health' },
    { title: 'Tourism', path: '/tourism' },
    { title: 'Contact-Us', path: '/contact' },
  ];




  return (
    <div class="menu-bar">  
      <Link to={ Training } >Home</Link>
      <Link to={ Training } >Events</Link>
      <Link to={ Training } >Public-Infra</Link>
      <Link to={ Training } >Education</Link>
      <Link to={ Training } >Health</Link>
      <Link to={ Training } >Tourism</Link>
      <Link to={ Training } >Contact-Us</Link>
      
      
      
        
    </div>
    
    

  );
};

export default Menubar;


