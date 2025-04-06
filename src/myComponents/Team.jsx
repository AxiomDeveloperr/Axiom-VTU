import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Moscow from '../assets/Pictures/abdulkareem-mustafa.jpg';
import Kishky from '../assets/Pictures/kishky.png';
import Almajiri from '../assets/Pictures/Almajiri.jpg';
import MD from '../assets/Pictures/Akeem_MD.jpg';
import Slytech from '../assets/Pictures/Slytech.jpg';
import rarebreed from '../assets/Pictures/rarebreed.jpg';
import MS from '../assets/Pictures/Oyedeji_MS.jpg';
import Rofiat from '../assets/Pictures/RofiatAdebakin.jpg';
import Rokeeb from '../assets/Pictures/Rokeeb_Abdul.jpg';
import Aishah from '../assets/Pictures/salahudeen-aisha.jpg';
import Abdullah from '../assets/Pictures/Odewole_Abdullahi.jpg';
import Hassan from '../assets/Pictures/Hassan_Yaya.jpeg';
import SM from '../assets/Pictures/ibraheem-semiat.jpg';

const Team = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const slideInAnimation = {
    initial: { opacity: 0, y: 50 }, // Start below the viewport
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const teamMembers = [
    {
      name: 'Ibn Ahmad Abdurahman Kishky ',
      image: Kishky,
      position: 'Cloud Solutions Architect',
    },
    {
      name: 'Adewuyi Awwal Muhammad',
      image: Almajiri,
      position: 'FullStack Engineer',
    },
    {
      name: 'Oyedeji Adekunle Shuaraudeen',
      image: MS,
      position: 'Product Designer',
    },

    { name: 'Akeem Muhyideen Folahan', image: MD, position: 'Cloud Engineer/DevOps Engineer' },
    { name: 'Hassan Yahyah', image: Hassan, position: 'FullStack Engineer' },
    { name: 'Ibraheem Semiat', image: SM, position: 'Project Manager' },
    {
      name: 'Odewole Abdullah Adewale',
      image: Abdullah,
      position: 'Brand Designer',
    },
    { name: 'Sulaiman Olusokun', image: Slytech, position: 'Cloud Engineer/Program Analyst' },
    {
      name: 'Salahudeen Aishah',
      image: Aishah,
      position: 'Project MAnager, Freelancer',
    },

    { name: 'Rokeeb Abdul', image: Rokeeb, position: 'Product Dsigner' },
    {
      name: 'Adepoju Abdulquadri',
      image: rarebreed,
      position: 'Computer Technician/Cloud Administrator',
    },

    {
      name: 'Rofiat Atinuke Adebakin',
      image: Rofiat,
      position: 'Product Designer',
    },
    {
      name: 'Abdulkareem Mustopha',
      image: Moscow,
      position: 'Project Manager/Cloud Administrator',
    },
  ];

  return (
    <motion.section
      className="mt-24 bg-gray-50 py-12 px-6 md:px-12 lg:px-20 mb-24"
      ref={sectionRef}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={slideInAnimation}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet the Amazing Team Behind Our Organization
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Check out the names that help IOTB-TECH be a reference in Technology
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg mb-16 p-4 hover:shadow-2xl transition-shadow duration-300 h-72">
              {' '}
              {/* Fixed height */}
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <h3 className="text-lg font-medium text-gray-800 whitespace-normal">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Team;
