import { useEffect ,useState} from 'react';
import kola from '../assets/img/portfolio/portfolio-1.jpg';
import edu from '../assets/img/portfolio/portfolio-2.jpg';
import donate from '../assets/img/portfolio/portfolio-3.jpg';
import donate1 from '../assets/img/portfolio/portfolio-4.jpg';
import publics from '../assets/img/portfolio/portfolio-5.jpg';
import commu from '../assets/img/portfolio/portfolio-6.jpg';
import {Link} from 'react-router-dom';

const Portfolio = () => {
    const [filter, setFilter] = useState('*'); // State to hold the current filter

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

  return (
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>Portfolio</h2>
        <p style={{color:"black"}}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="row" data-aos="fade-in">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li onClick={() => handleFilter('*')} className={filter === '*' ? 'filter-active' : ''}>All Projects</li>
            <li onClick={() => handleFilter('filter-app')} className={filter === 'filter-app' ? 'filter-active' : ''}>Public Infrastructure</li>
            <li onClick={() => handleFilter('filter-card')} className={filter === 'filter-card' ? 'filter-active' : ''}>Events</li>
            <li onClick={() => handleFilter('filter-web')} className={filter === 'filter-web' ? 'filter-active' : ''}>Education</li>
            <li onClick={() => handleFilter('filter-card')} className={filter === 'filter-card' ? 'filter-active' : ''}>Health</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up">
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={kola} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <Link to="/description"><i className="bx bx-link"></i></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src={edu} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={donate} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src={donate1} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src={kola} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={publics} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src={commu} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src={edu} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src={kola} className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;