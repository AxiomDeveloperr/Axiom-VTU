
import { useState } from 'react';
import {
  FaBars,
  FaWhatsapp,
  FaQuestionCircle,
  FaComments,
  FaPhoneAlt,
  FaRegSadTear,
  FaStar,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const helpLinks = [
  {
    title: 'Frequently Asked Questions',
    description: 'See FAQ',
    icon: <FaQuestionCircle size={24} />,
    color: 'text-red-600 bg-red-400  ',
    link: '/faq',
  },
  {
    title: 'Live Chat',
    description: 'Chat Now',
    icon: <FaComments size={24} />,
    color: 'text-blue-600 bg-blue-100 ',
    link: '/chat',
  },
  {
    title: 'WhatsApp',
    description: 'Drop a Message',
    icon: <FaWhatsapp size={24} />,
    color: 'text-green-600 bg-green-100',
    link: '/whatsapp',
  },
  {
    title: 'Phone Call',
    description: 'Call Us',
    icon: <FaPhoneAlt size={24} />,
    color: 'text-blue-600 bg-blue-100',
    link: '/phone',
  },
  {
    title: 'Report Our Support',
    description: 'Not Satisfied?',
    icon: <FaRegSadTear size={24} />,
    color: 'text-red-600 bg-red-100',
    link: '/report',
  },
  {
    title: 'Review Our App',
    description: 'Coming Soon',
    icon: <FaStar size={24} />,
    color: 'text-green-600 bg-green-100',
    link: '/review',
  },
];

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
  

  return (
    <div className="min-h-screen bg-white sm:ml-56 max-sm:ml-10 max-sm:mr-6 lg:ml-44">
    
            <div className='md:hidden tertiary-color h-9 -ml-10  -mr-6'>

            <button onClick={() => setShowSidebar(!showSidebar)} className="md:hidden  mr-2 flex justify-self-end">
                   <FaBars className="text-xl primary-text mt-1 " />
                   </button>
            </div>
                 
                
                  <div className=" flex justify-between mt-8 sm:mr-16 max-sm:mt-4 max-sm:mb-1  items-center mb-6">
                       <h2 className="text-xl font-bold sm:ml-14  ">Help and Support</h2>
                       <div className="flex items-center sm:mr- lg:mr-56 gap-4">
                         <button className="px-3 py-1 text-sm font-semibold  primary-text rounded hidden sm:hidden xl:block lg:block">
                           Upgrade to Merchant
                         </button>
                         <FaBell size={20} />
                         <FaUserCircle size={24} />
                       </div>
                     </div>
           
                 
                 {showSidebar && (
                   <div
                     className="fixed inset-0 z-50 bg-blue-100 bg-opacity-30"
                     onClick={() => setShowSidebar(false)}
                   >
                     <div
                       className="absolute top-0 left-0 w-64 bg-white h-full p-6"
                       onClick={(e) => e.stopPropagation()}
                     >
                       
                       
                     </div>
                   </div>
                 )}
          <div className="grid grid-cols-1 sm:grid-cols-1 mt-10  lg:grid-cols-2 gap-5  xl:mr-96">
            {helpLinks.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="flex items-start gap-1 py-3 px-1 lg:w-80 sm:w-96 sm:ml-14  bg-gray-50 hover:bg-gray-100 rounded-3xl shadow-sm border tertiary-color"
              >
                <div className={`p-3 rounded-full ${item.color}`}>{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-md">{item.title}</h3>
                  <p className="text-sm primary-text">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        
      </div>
    
  );
}


