/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");
  const [portfolioData, setPortfolioData] = useState({
    events: [],
    education: [],
    health: [],
    publicSpaces: [],
  });

  const initialItemsToShow = 3; // Initial number of items to show
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const portfolioRef = useRef(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  useEffect(() => {
    filterItems(filter);
  }, [filter, portfolioData]);

  const fetchPortfolioData = async () => {
    try {
      const eventsResponse = await fetch(
        "http://localhost:2000/users/getApprovedData"
      );
      const eventsResult = await eventsResponse.json();

      const projectsResponse = await fetch(
        "http://localhost:2000/users/getApprovedProjects"
      );
      const projectsResult = await projectsResponse.json();

      setPortfolioData({
        events: eventsResult || [],
        education: projectsResult.education || [],
        health: projectsResult.health || [],
        publicSpaces: projectsResult.publicSpaces || [],
      });
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };

  const handleFilter = (category) => {
    setFilter(category);
    setItemsToShow(initialItemsToShow); // Reset itemsToShow on filter change
    setShowLoadMore(true); // Reset showLoadMore on filter change
    portfolioRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + initialItemsToShow);
    if (itemsToShow + initialItemsToShow >= getTotalItems()) {
      setShowLoadMore(false);
    }
  };

  const handleLoadLess = () => {
    setItemsToShow(initialItemsToShow);
    setShowLoadMore(true);
    portfolioRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getTotalItems = () => {
    let totalItems = 0;
    if (filter === "events") totalItems = portfolioData.events.length;
    else if (filter === "education")
      totalItems = portfolioData.education.length;
    else if (filter === "publicSpaces")
      totalItems = portfolioData.publicSpaces.length;
    else if (filter === "health") totalItems = portfolioData.health.length;
    else
      totalItems =
        portfolioData.events.length +
        portfolioData.education.length +
        portfolioData.publicSpaces.length +
        portfolioData.health.length;
    return totalItems;
  };

  const filterItems = (category) => {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      if (category === "*" || itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const renderPortfolioItems = (items, category) => {
    if (!Array.isArray(items)) return null;
    return items.slice(0, itemsToShow).map((item) => (
      <div
        className={`col-lg-4 col-md-6 portfolio-item`}
        data-category={category}
        key={item._id}
      >
        <div className="portfolio-wrap">
          <div
            className="portfolio-image"
            style={{
              backgroundImage: item.imagePath
                ? `url(${item.imagePath ? item.imagePath[0] : ""})`
                : "none",
              backgroundColor: item.imagePath ? "transparent" : "#f0f0f0",
              objectFit:"cover"
            }}
          >
            {!item.imagePath && (
              <p className="no-image-text">No Image Available</p>
            )}
          </div>
          <div
            className="portfolio-title"
            style={{ backgroundColor: "#ecf5f9" }}
          >
            <p style={{ color: "black" }}>
              {item.name || item.schoolName || item.projectName}
            </p>
          </div>
          <div className="portfolio-links">
            <a
              href={item.imagePath || "placeholder.jpg"}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title={item.name}
            >
              <i className="bx bx-plus"></i>
            </a>
            <Link to={`/description/${item._id}/${category}`}>
              <i className="bx bx-link"></i>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>Portfolio</h2>
        <p style={{ color: "black" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="row" data-aos="fade-in" ref={portfolioRef}>
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li
              onClick={() => handleFilter("*")}
              className={filter === "*" ? "filter-active" : ""}
            >
              All Projects
            </li>
            <li
              onClick={() => handleFilter("events")}
              className={filter === "events" ? "filter-active" : ""}
            >
              Events
            </li>
            <li
              onClick={() => handleFilter("education")}
              className={filter === "education" ? "filter-active" : ""}
            >
              Education
            </li>
            <li
              onClick={() => handleFilter("publicSpaces")}
              className={filter === "publicSpaces" ? "filter-active" : ""}
            >
              Public Infrastructure
            </li>
            <li
              onClick={() => handleFilter("health")}
              className={filter === "health" ? "filter-active" : ""}
            >
              Health
            </li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up">
        {filter === "events" &&
          renderPortfolioItems(portfolioData.events, "events")}
        {filter === "education" &&
          renderPortfolioItems(portfolioData.education, "education")}
        {filter === "publicSpaces" &&
          renderPortfolioItems(portfolioData.publicSpaces, "publicSpaces")}
        {filter === "health" &&
          renderPortfolioItems(portfolioData.health, "health")}
        {filter === "*" && (
          <>
            {renderPortfolioItems(portfolioData.events, "events")}
            {renderPortfolioItems(portfolioData.education, "education")}
            {renderPortfolioItems(portfolioData.publicSpaces, "publicSpaces")}
            {renderPortfolioItems(portfolioData.health, "health")}
          </>
        )}
      </div>

      <div className="text-center mt-4">
        {showLoadMore && itemsToShow < getTotalItems() && (
          <button className="btn btn-primary mx-5" onClick={handleLoadMore}>
            Load More
          </button>
        )}
        {!showLoadMore && <p className="text-muted">No more items to load</p>}
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
