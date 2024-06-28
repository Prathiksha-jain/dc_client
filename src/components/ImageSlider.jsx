import React, { useEffect, useRef } from 'react';
import '../Styles/ImageSlider.css'; 
import img1 from '../assets/kola.jpg';
import img2 from '../assets/publics.jpg';
import img3 from '../assets/health.jpg';
const ImageSlider = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const prevSlideButtonRef = useRef(null);
  const nextSlideButtonRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const prevSlideButton = prevSlideButtonRef.current;
    const nextSlideButton = nextSlideButtonRef.current;
    const sliderScrollbar = scrollbarThumb.parentElement;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const handleThumbDrag = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    scrollbarThumb.addEventListener('mousedown', handleThumbDrag);

    const handleSlideButtons = () => {
      prevSlideButton.style.display = imageList.scrollLeft <= 0 ? 'none' : 'flex';
      nextSlideButton.style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
    };

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener('scroll', () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });

    const handleSlide = (direction) => {
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    prevSlideButton.addEventListener('click', () => handleSlide(-1));
    nextSlideButton.addEventListener('click', () => handleSlide(1));

    window.addEventListener('resize', () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });

    handleSlideButtons();
    updateScrollThumbPosition();

    return () => {
      scrollbarThumb.removeEventListener('mousedown', handleThumbDrag);
      prevSlideButton.removeEventListener('click', () => handleSlide(-1));
      nextSlideButton.removeEventListener('click', () => handleSlide(1));
    };
  }, []);

  return (
    <div className="container">
      <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded" ref={prevSlideButtonRef}>
          chevron_left
        </button>
        <ul className="image-list" ref={imageListRef}>
          <img className="image-item" src={img1} alt="img-1" />
          <img className="image-item" src={img2} alt="img-2" />
          <img className="image-item" src={img3} alt="img-3" />
          <img className="image-item" src={img1} alt="img-4" />
          <img className="image-item" src={img2} alt="img-5" />
          <img className="image-item" src={img3} alt="img-6" />
          <img className="image-item" src={img1} alt="img-7" />
          <img className="image-item" src={img2} alt="img-8" />
          <img className="image-item" src={img3} alt="img-9" />
          <img className="image-item" src={img1} alt="img-10" />
        </ul>
        <button id="next-slide" className="slide-button material-symbols-rounded" ref={nextSlideButtonRef}>
          chevron_right
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
