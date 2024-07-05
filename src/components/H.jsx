 import '../assets/vendor/bootstrap/css/bootstrap.min.css';
  import '../Styles/style.css';
  import '../assets/vendor/bootstrap/css/bootstrap.min.css';
  import '../assets/vendor/boxicons/css/boxicons.min.css';
  import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
  import Faq from './Faq';
  import Footers from '../components/Footers.jsx';
  import Portfolio from '../components/Portfolio.jsx';
  import Action from '../components/Action.jsx';
  import About from '../components/About.jsx';
  import Contact from '../components/Contact.jsx'
  import Team from '../components/Team.jsx';
  import Testimonials from '../components/Testimonials.jsx';
  import Statistics from '../components/Statistics.jsx';
  import Services from '../components/Services.jsx';
  import AboutUs from '../components/AboutUs.jsx';
  import '../assets/vendor/swiper/swiper-bundle.min.css';
  // import dk from '../assets/dk.jpg';
  // import donate from '../assets/donate.jpg';
  // import donate1 from '../assets/donate1.jpg';
  // import edu from '../assets/edu.jpg';
  // import publics from '../assets/publics.jpg';
  // import kola from '../assets/kola.jpg';
  // import commu from '../assets/commu.jpg';
import Header from '../components/Header.jsx';  
  const H = () => {
    return (
      <>
      <header id="header" className="head fixed-top header-transparent">
      <Header/>
    </header>

    <section id="hero">
      <div className="hero-container" data-aos="fade-up">
        <h1>Welcome to Dakshina Kannada Funding Portal</h1>
        <h2>Be the change maker</h2>
        <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
      </div>
    </section>

    <main id="main">
  
   
    <section id="about" className="about">
      <AboutUs/>
      </section>

      <section id="counts" className="counts  section-bg">
        <Statistics/>
      </section>


      <section id="portfolio" className="portfolio">
    <Portfolio/>
    </section>

    <section id="how">
        <About/>
      </section>


      <section id="cta" className="cta">
        <Action/>
      </section>

    <section id="services" className="services">
        <Services/>
      </section>


      <section id="testimonials" className="testimonials section-bg">
      <Testimonials/>
</section>


    <Faq/>


    
    <section id="team" className="team">
       <Team/>
      </section>

      <section id="contact" className="contact section-bg">
        <Contact/>
      </section>


      </main>
        <footer id="footer">
          <Footers/>
        </footer>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i></a>

      </>
    );
  };

  export default H;
