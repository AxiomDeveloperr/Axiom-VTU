import { useRef, useState, useEffect } from 'react';
import About from '../myComponents/About';
import Benefits from '../myComponents/Benefits';
import Card from '../myComponents/Card';
import ComingSoon from '../myComponents/ComingSoon';
import Courses from '../myComponents/Courses';
import Newsletter from '../myComponents/Newsletter';
import Team from '../myComponents/Team';
import Testimonial from '../myComponents/Testimonial';
import Upcoming from '../myComponents/upcoming';
import { FaArrowUp } from 'react-icons/fa';
import Application from '../myComponents/Application';
import Hero from '../myComponents/Hero';
import Nav from '../myComponents/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../myComponents/Footer';
// import { clearAuthState, logoutUser } from '../redux/features/auth/authSlice';
import { persistor } from '../redux/store/store';
import Loader from '../components/Loader';
import { clearEntireState } from '../redux/store/thunks';

function LandingPage() {
  const hasLoadedRef = useRef(false); // Track initial load
  const [loading, setLoading] = useState(true); // State to control the spinner
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
   dispatch(clearEntireState());
    persistor.purge(); // Clear persisted Redux state (if using Redux Persist)
    persistor.purge();
  };

  // Scroll functions
  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeam = () => {
    teamRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonial = () => {
    testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll-to-top button logic
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show spinner only on the first load
  useEffect(() => {
    if (!hasLoadedRef.current) {
      // Set a timeout for 5 seconds or wait for the hero image to load
      const timer = setTimeout(() => {
        setLoading(false);
        hasLoadedRef.current = true; // Mark as loaded
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // Skip the spinner on subsequent visits
    }
  }, []);

  return (
    <>
      {/* Show the spinner while loading */}
      {loading && <Loader />}

      {/* Pass scroll functions to Nav */}
      <Nav
        scrollToCourses={scrollToCourses}
        scrollToAbout={scrollToAbout}
        scrollToTeam={scrollToTeam}
        scrollToContact={scrollToContact}
        scrollToTestimonial={scrollToTestimonial}
        user={user}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />

      {/* Hero Section */}
      <Hero onImageLoad={() => setLoading(false)} />

      {/* Main Content */}
      <div className="font-montserrat">
        <Card />

        <section ref={coursesRef}>
          <Courses />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <Benefits />

        <Application />

        <section ref={contactRef}>
          <Newsletter />
        </section>

        <ComingSoon />

        <section ref={teamRef}>
          <Team />
        </section>

        <section ref={testimonialRef}>
          <Testimonial />
        </section>

        <Upcoming />
      </div>

      <Footer user={user} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      {/* Scroll-to-top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 z-[999] right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default LandingPage;
