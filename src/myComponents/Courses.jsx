import { Typewriter } from 'react-simple-typewriter';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Course data with direct image URLs
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Learn to build modern, responsive, and scalable websites using the latest technologies like React, Node.js, and Tailwind CSS.',
      image:
        'https://res.cloudinary.com/domu5mpva/image/upload/v1738621701/web%20pages/cih8sueg0xmu7aomc6et.jpg',
    },
    {
      id: 2,
      title: 'Graphics Designing',
      description:
        'Master the art of visual storytelling with tools like Adobe Photoshop, Illustrator, and Figma. Create stunning designs for web and print.',
      image:
        'https://res.cloudinary.com/domu5mpva/image/upload/v1738621915/web%20pages/r0jprq7ockrgskcbyobj.jpg',
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description:
        'Explore cloud platforms like AWS, Azure, and Google Cloud. Learn to deploy, manage, and scale applications in the cloud.',
      image:
        'https://res.cloudinary.com/domu5mpva/image/upload/v1738621565/web%20pages/i8qcridjdv0174vwrajx.jpg',
    },
    {
      id: 4,
      title: 'Product Designing',
      description:
        'Design user-centric products with a focus on usability and aesthetics. Learn prototyping, wireframing, and user testing.',
      image:
        'https://res.cloudinary.com/domu5mpva/image/upload/v1738620915/web%20pages/cgiap2potm3moanpkmdq.jpg',
    },
    {
      id: 5,
      title: 'Motion Design',
      description:
        'Bring your designs to life with motion graphics. Learn animation principles, After Effects, and Lottie for interactive animations.',
      image:
        'https://res.cloudinary.com/domu5mpva/image/upload/v1738620505/web%20pages/vnx1yusr4ew3iznoxkqe.jpg',
    },
    {
      id: 6,
      title: 'Data Analysis',
      description:
        'Unlock the power of data with Python, SQL, and Tableau. Learn to analyze, visualize, and interpret data for actionable insights.',
      image:
        'https://res.cloudinary.com/domu5mpva/image/upload/v1738620488/web%20pages/y9kgansytvuyxguxpz9o.jpg',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gray-50 py-12" ref={ref}>
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Discover Our Courses
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gray-800 font-bold">
            <Typewriter
              words={['Expand your skills', 'Become Future-ready']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>{' '}
          with our top-notch training programs.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-95 hover:shadow-2xl"
            variants={cardVariants}
          >
            <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Courses;
