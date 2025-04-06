// import "./swiper.css";
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Typewriter } from 'react-simple-typewriter';

import Omolara from '../assets/Pictures/muminah_omolara.jpg';
import Latiifah from '../assets/Pictures/Aderolu_Latifah.jpg';
import Yunusa from '../assets/Pictures/yunusa_usman.jpg';
import Waliyah from '../assets/Pictures/Balogun_Waliyah.jpg';
import Aishah from '../assets/Pictures/Hammed_Aishah.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Muminah Omolara',
      image: Omolara,
      role: 'Web Developer',
      message:
        'IOTB-TECH Web Development Training gave me a solid foundation in building modern, responsive websites. I feel confident in my ability to create impactful solutions for real-world problems.',
    },
    {
      name: 'Yunusa Usman',
      image: Yunusa,
      role: 'Frontend Developer',
      message:
        'The training was intense yet rewarding. I gained hands-on experience with React and other cutting-edge frontend technologies, which transformed my approach to development.',
    },
    {
      name: 'Aderolu Latiifah',
      image: Latiifah,
      role: 'Web Developer',
      message:
        'Joining IOTB-TECH was a turning point for me. I learned how to build scalable and secure APIs with Node.js and PostgreSQL. The mentorship was top-notch!',
    },
    {
      name: 'Balogun Waliyah',
      image: Waliyah,
      role: 'Web Developer',
      message:
        'The hybrid training approach was exactly what I needed. From frontend to backend, I now have the skills to build fullstack applications with confidence.',
    },
    {
      name: 'Hammed Aishah',
      image: Aishah,
      role: 'Frontend Developer',
      message:
        'IOTB-TECH not only improved my coding skills but also taught me how to think like a problem-solver. The experience has been nothing short of life-changing.',
    },
  ];

  const TestimonialHeading = () => {
    const [triggerTypewriter, setTriggerTypewriter] = useState(false);
    const headingRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTriggerTypewriter(true);
            observer.disconnect(); // Stop observing after triggering once
          }
        },
        { threshold: 0.5 }, // Trigger when 50% of the element is visible
      );

      if (headingRef.current) {
        observer.observe(headingRef.current);
      }

      return () => {
        if (headingRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(headingRef.current);
        }
      };
    }, []);

    return (
      <div ref={headingRef} className="text-center mb-12 -mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {triggerTypewriter && (
            <Typewriter
              words={['Hear what some of our graduates are saying...']}
              cursor={false}
              typeSpeed={50}
              deleteSpeed={30}
              loop={1}
            />
          )}
        </h2>
      </div>
    );
  };

  return (
    <section>
      <TestimonialHeading />
      <div className="mt-8 bg-blue-50 py-12 px-6 mb-24">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mx-auto max-w-4xl space-y-6 md:space-y-0 md:space-x-8 py-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <p className="text-gray-800 text-lg font-light leading-relaxed md:mb-4">
                    {testimonial.message}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-800 mb-4">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
