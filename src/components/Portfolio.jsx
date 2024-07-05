import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import yaksha from '../assets/yakshagana.png';
import edu from '../assets/img/portfolio/portfolio-2.jpg';
import donate from '../assets/img/portfolio/portfolio-3.jpg';
import donate1 from '../assets/img/portfolio/portfolio-4.jpg';
import publics from '../assets/img/portfolio/portfolio-5.jpg';
import commu from '../assets/img/portfolio/portfolio-6.jpg';
import kola from '../assets/kola.jpg';
import edu1 from '../assets/edu1.jpg';
import edu2 from '../assets/edu2.jpg';
import edu3 from '../assets/edu2.jpg';
import publics1 from '../assets/publics1.jpg';
import publics2 from '../assets/publics2.jpg';
import publics3 from '../assets/publics3.jpg';
import publics4 from '../assets/publics4.jpg';
import health1 from '../assets/health1.jpg';
import health2 from '../assets/health2.jpg';
import health3 from '../assets/health3.jpg';
import event from '../assets/event.jpg';
const Portfolio = () => {
  const initialItemsToShow = 6; // Initial number of items to show
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [filter, setFilter] = useState('*'); // State to hold the current filter

  const portfolioRef = useRef(null); // Reference to the portfolio section

  // Simulated data for portfolio items
  const portfolioItems = [
    { category: 'filter-public', image: publics2, title: 'App 1', description: 'Yakshagana Performance' },
    { category: 'filter-education', image: edu3, title: 'Web 3', description: 'Educational Workshop' },
    { category: 'filter-health', image: health1, title: 'Web 3', description: 'Health Camp' },
    { category: 'filter-health', image: health2, title: 'Web 3', description: 'Health Seminar' },
    { category: 'filter-health', image: health3, title: 'Web 3', description: 'Medical Conference' },
    { category: 'filter-health', image: health1, title: 'Web 3', description: 'Healthcare Expo' },
    { category: 'filter-health', image: edu, title: 'Web 3', description: 'Wellness Program' },
    { category: 'filter-public', image: publics1, title: 'App 2', description: 'Public Donation Event' },
    { category: 'filter-public', image: publics4, title: 'App 2', description: 'Charity Drive' },
    { category: 'filter-public', image: publics3, title: 'App 2', description: 'Fundraising Gala' },
    { category: 'filter-public', image: publics2, title: 'App 2', description: 'Community Support' },
    { category: 'filter-event', image: kola, title: 'Card 2', description: 'Corporate Event' },
    { category: 'filter-education', image: edu1, title: 'Web 2', description: 'School Fair' },
    { category: 'filter-public', image: publics4, title: 'App 3', description: 'Public Meeting' },
    { category: 'filter-event', image: yaksha, title: 'Card 1', description: 'Social Gathering' },
    { category: 'filter-event', image: event, title: 'Card 3', description: 'Networking Event' },
    { category: 'filter-education', image: edu2, title: 'Web 3', description: 'College Seminar' },
  ];

  // useEffect to filter items based on 'filter' state
  useEffect(() => {
    filterItems(filter); // Initialize with all items displayed
  }, [filter]);

  // Function to handle filter clicks
  const handleFilter = (category) => {
    setFilter(category); // Update the filter state based on the category clicked
  };

  // Function to filter and display portfolio items
  const filterItems = (category) => {
    const portfolioItems = document.querySelectorAll('.portfolio-item'); // Select all portfolio items
    portfolioItems.forEach((item) => {
      const itemCategories = item.classList; // Get categories for each item
      if (category === '*' || itemCategories.contains(category)) {
        item.style.display = 'block'; // Show items that match the category or show all if '*' is selected
      } else {
        item.style.display = 'none'; // Hide items that do not match the selected category
      }
    });
  };

  // Function to handle Load More button click
  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + initialItemsToShow);
    if (itemsToShow + initialItemsToShow >= portfolioItems.length) {
      setShowLoadMore(false);
    }
  };

  // Function to handle Load Less button click
  const handleLoadLess = () => {
    setItemsToShow(initialItemsToShow);
    setShowLoadMore(true);
    // Scroll to the top of the portfolio section
    portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>Donate Funds</h2>
        <p style={{ color: 'black' }}>
        Your contribution can turn dreams into reality. By funding our projects, you help build a brighter future for our community. Every donation, no matter the size, brings us one step closer to achieving our goals.
         Be the change-maker and invest in a better tomorrow today!
        </p>
      </div>

      <div className="row" data-aos="fade-in">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li onClick={() => handleFilter('*')} className={filter === '*' ? 'filter-active' : ''}>
              All Projects
            </li>
            <li
              onClick={() => handleFilter('filter-public')}
              className={filter === 'filter-public' ? 'filter-active' : ''}
            >
              Public Infrastructure
            </li>
            <li
              onClick={() => handleFilter('filter-event')}
              className={filter === 'filter-event' ? 'filter-active' : ''}
            >
              Events
            </li>
            <li
              onClick={() => handleFilter('filter-education')}
              className={filter === 'filter-education' ? 'filter-active' : ''}
            >
              Education
            </li>
            <li
              onClick={() => handleFilter('filter-health')}
              className={filter === 'filter-health' ? 'filter-active' : ''}
            >
              Health
            </li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" ref={portfolioRef}>
        {portfolioItems
          .filter((item) => filter === '*' || item.category === filter)
          .slice(0, itemsToShow)
          .map((item, index) => (
            <div key={index} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <div className="portfolio-wrap">
                <div className="portfolio-description">
                  {item.description}
                </div>
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link to="/description">
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="text-center mt-4">
        {showLoadMore && itemsToShow < portfolioItems.length && (
          <button className="btn btn-primary mx-5" onClick={handleLoadMore}>
            Load More
          </button>
        )}
        {!showLoadMore && (
          <p className="text-muted">No more images to load</p>
        )}
        {itemsToShow > initialItemsToShow && (
          <button className="btn btn-primary" onClick={handleLoadLess}>
            Load Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
