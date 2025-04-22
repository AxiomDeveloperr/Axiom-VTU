import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircleQuestion, Award, CreditCard, User, Shield } from 'lucide-react';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('GENERAL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation effect when component loads
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleItem = (id) => {
    // Close other items when opening a new one
    if (!expandedItems[id]) {
      // Create a new object with all values set to false
      const closedState = {};
      Object.keys(expandedItems).forEach(key => {
        closedState[key] = false;
      });
      // Set only the clicked item to true
      setExpandedItems({
        ...closedState,
        [id]: true
      });
    } else {
      // Just close the clicked item
      setExpandedItems(prev => ({
        ...prev,
        [id]: false
      }));
    }
  };
  
  // Tab data with icons
  const tabs = [
    { id: 'GENERAL', icon: <MessageCircleQuestion size={16} />, fullName: 'GENERAL INFORMATION' },
    { id: 'SERVICES', icon: <User size={16} />, fullName: 'VTU SERVICES & FEATURES' },
    { id: 'PRICING', icon: <CreditCard size={16} />, fullName: 'PRICING & PAYMENTS' },
    { id: 'SUPPORT', icon: <Award size={16} />, fullName: 'TROUBLESHOOTING & SUPPORT' },
    { id: 'SECURITY', icon: <Shield size={16} />, fullName: 'ACCOUNT & SECURITY' },
  ];
  
  // Complete FAQ data structure with categories and tab assignments based on the new document
  const allFaqData = {
    'GENERAL INFORMATION': [
      { 
        id: 'what-is-majorsub', 
        question: 'What is MajorSub?', 
        answer: 'MajorSub is a VTU (Virtual Top-Up) subscription platform designed to simplify your everyday transactions. With MajorSub, you can: Instantly buy airtime and data bundles for all major networks in Nigeria (MTN, Airtel, Glo, 9mobile), Pay for electricity bills (PHCN, IKEDC, EKEDC, etc.), Renew your cable TV subscriptions (DStv, GOtv, Startimes), Purchase exam cards like WAEC and NECO scratch cards, Fund your wallet, track your transactions, and run your own VTU business if you\'re into reselling. Our platform is optimized for speed, simplicity, and reliability, with an easy-to-use dashboard that works on both mobile and desktop. Whether you\'re a personal user looking for convenience or a small business owner aiming to make profit from reselling, MajorSub is your plug.',
        tabs: ['GENERAL INFORMATION', 'VTU SERVICES & FEATURES']
      },
      { 
        id: 'who-can-use', 
        question: 'Who can use MajorSub?', 
        answer: 'Anyone with a mobile device and a Nigerian bank account or digital payment method can use MajorSub. Our platform is designed for: Individuals who want to top up airtime/data for themselves or loved ones, Entrepreneurs/resellers who want to earn profit by selling airtime, data, and utility services to others, Parents, students, workers, and freelancers who want to automate and simplify their regular bill payments, People living abroad who want to top-up or pay bills for family in Nigeria (as long as they have access to Nigerian payment methods). No special tech skills are required—if you can use WhatsApp, you can use MajorSub.',
        tabs: ['GENERAL INFORMATION', 'VTU SERVICES & FEATURES']
      },
      { 
        id: 'is-safe', 
        question: 'Is MajorSub safe to use?', 
        answer: 'Yes—100% secure and trusted. We take your security very seriously. Here\'s what we\'ve done to keep things locked down: SSL encryption protects all communication between your browser and our servers, We partner with trusted payment gateways like Paystack and Monnify to ensure smooth, secure transactions, Your wallet funds are traceable and linked to your verified user account, We never store sensitive card information or personal details in unsafe locations, Our support team is always on standby in case of suspicious activity. MajorSub is also compliant with Nigerian digital service regulations, and we\'re constantly improving our backend to keep you safe and satisfied.',
        tabs: ['GENERAL INFORMATION' , 'VTU SERVICES & FEATURES']
      }
    ],
    'VTU SERVICES & FEATURES': [
      { 
        id: 'what-can-i-do', 
        question: 'What can I do on MajorSub?', 
        answer: 'MajorSub offers a full suite of digital services to meet your everyday mobile and household needs. Here\'s a breakdown of the services you can access: Airtime Top-Up: Recharge your phone instantly for any network—MTN, Airtel, Glo, or 9mobile. You can also recharge for others or resell and make profit per transaction. Data Purchase: Buy affordable data bundles at wholesale prices. Enjoy flexible options—daily, weekly, monthly—and resell to earn margins. Cable TV Subscriptions: Pay for DStv, GOtv, and Startimes with just a few clicks. All you need is your smartcard or IUC number. Electricity Bill Payment: Pay for power across multiple providers like IKEDC, PHED, EKEDC, and others. Tokens are delivered instantly and can be used immediately. Exam Cards: Purchase WAEC and NECO scratch cards to check results or register—perfect for students, schools, or tutorial centers. Reseller Dashboard: If you want to run a VTU business, your MajorSub dashboard makes it easy to track sales, monitor earnings, and manage customers. Every transaction is recorded in your dashboard for full transparency.',
        tabs: ['VTU SERVICES & FEATURES']
      },
      { 
        id: 'bonuses-discounts', 
        question: 'Do you offer bonuses or discounts?', 
        answer: 'Yes, and we love rewarding our users. Here\'s what\'s in it for you: Discounted Airtime and Data: Buy at a cheaper rate than what\'s available on regular platforms. This is perfect if you want to save or resell. Referral Bonuses: Every time someone signs up using your unique referral link and funds their wallet, you earn a percentage of that transaction. Periodic Promos: We occasionally run giveaways, recharge bonuses, and loyalty programs for top users. If you\'re active, you win. Reseller Earnings: You get full profit control. You set your selling price; we supply the service at a lower base cost. It\'s like getting paid for what you\'re already doing.',
        tabs: ['VTU SERVICES & FEATURES'] 
      }
    ],
    'PRICING & PAYMENTS': [
      { 
        id: 'fund-wallet', 
        question: 'How do I fund my wallet?', 
        answer: 'To carry out any transaction on MajorSub, you need to fund your wallet. Here\'s how: Log into your dashboard, Click on "Fund Wallet", Choose your preferred funding method: Bank Transfer (auto-confirmed within seconds), Card Payment (secured via Paystack/Monnify), USSD Payment. Once the payment is processed, your wallet is instantly credited and you can begin making purchases. All payments are reflected in your transaction history with time stamps and details.',
        tabs: ['PRICING & PAYMENTS']
      },
      { 
        id: 'minimum-amount', 
        question: 'What is the minimum wallet funding amount?', 
        answer: 'You can start with as low as ₦100. That\'s enough to test the platform, make a quick recharge, or get started with micro-reselling. There\'s no high barrier to entry. Whether you\'re ballin\' or budgeting, we\'ve got space for you here.',
        tabs: ['PRICING & PAYMENTS']
      },
      { 
        id: 'hidden-charges', 
        question: 'Are there any hidden charges?', 
        answer: 'Nope. Zero shady business here. We\'re transparent about our pricing. Every transaction comes with a full breakdown before you confirm payment. No surprise deductions, No monthly maintenance charges, No "processing fee" slapped in at the last minute. What you see is exactly what you pay. Our goal is to earn your trust, not trick you into spending more.',
        tabs: ['PRICING & PAYMENTS']
      }
    ],
    'TROUBLESHOOTING & SUPPORT': [
      { 
        id: 'payment-no-service', 
        question: 'I made a payment but didn\'t receive my service. What do I do?', 
        answer: 'Here\'s how to handle it: Wait 1–5 minutes – Sometimes network traffic can delay processing. Check your transaction history – If the status is still pending, there may be a temporary network issue. Contact support – Provide your transaction reference ID or wallet email. We\'ll investigate the issue and: Retry the service OR Refund your wallet instantly. Your money or your service is guaranteed. We don\'t play with customer trust.',
        tabs: ['TROUBLESHOOTING & SUPPORT']
      },
      { 
        id: 'wallet-debited', 
        question: 'My wallet was debited, but I didn\'t get my airtime/data. Am I scammed?', 
        answer: 'Absolutely not. If your wallet was debited but the transaction failed: First, confirm that your wallet was actually credited with the money. If yes, and the service failed, the system either retries or refunds automatically. If no refund after 5–10 minutes, contact support—don\'t worry, we\'ve got logs to verify everything. Your funds are safe. We either complete the transaction or return your money. No long story.',
        tabs: ['TROUBLESHOOTING & SUPPORT']
      }
    ],
    'ACCOUNT & SECURITY': [
      { 
        id: 'create-account', 
        question: 'How do I create an account on MajorSub?', 
        answer: 'Quick and easy: Go to majorsub.com, Click on "Sign Up", Fill in your full name, phone number, email, and password, Click "Create Account". You\'ll receive a verification link or code—verify and you\'re good to go! Once logged in, you can start funding your wallet, buying services, and managing your account from your dashboard.',
        tabs: ['ACCOUNT & SECURITY']
      },
      { 
        id: 'update-details', 
        question: 'Can I update my personal details later?', 
        answer: 'Yes, your profile is fully editable. From your dashboard, you can: Change your name or phone number, Update your password, Add or change your bank account details, Enable or disable security alerts. We recommend using strong passwords and enabling all available security settings to keep your account safe.',
        tabs: ['ACCOUNT & SECURITY']
      }
    ],
    'RESELLERS & EARNINGS': [
      { 
        id: 'earn-money', 
        question: 'Can I earn money with MajorSub?', 
        answer: 'Definitely. Here are three ways to earn: Resell Services – Buy airtime, data, and utilities at lower prices and sell to customers at your own rate. Referral Program – Share your unique link. When people join and use the platform, you earn commissions. Scaling Up – Grow from individual reseller to full-blown agent. MajorSub supports your hustle with tools to manage multiple clients. You\'re not just using the platform—you\'re building a digital business.',
        tabs: ['VTU SERVICES & FEATURES', 'ACCOUNT & SECURITY']
      },
      { 
        id: 'referral-link', 
        question: 'How do I access my referral link?', 
        answer: 'Once you\'re logged in: Go to "Referral Program" in your dashboard, Copy your unique link, Share it via WhatsApp, Twitter, Instagram—wherever you vibe. You can track signups, earnings, and payout stats right from that same tab. No guessing game.',
        tabs: ['VTU SERVICES & FEATURES', 'ACCOUNT & SECURITY']
      }
    ],
    'CONTACT & CUSTOMER SUPPORT': [
      { 
        id: 'contact-help', 
        question: 'How can I contact MajorSub if I need help?', 
        answer: 'We\'re always ready to help. Here\'s how to reach us: Live chat via the website, WhatsApp support (available inside your dashboard), Email: [support@majorsub.com], Instagram & Twitter: @majorsub. Customer satisfaction is our top priority, and we respond quickly. You won\'t be left on read.',
        tabs: ['TROUBLESHOOTING & SUPPORT']
      },
      { 
        id: 'support-hours', 
        question: 'What are your support hours?', 
        answer: 'Our support team is available: Monday to Saturday: 8:00 AM – 10:00 PM, Sundays & public holidays: Limited support, but you can still drop a message—we\'ll reply ASAP. We monitor urgent transactions and wallet funding 24/7, so you\'re never really on your own.',
        tabs: ['TROUBLESHOOTING & SUPPORT']
      }
    ]
  };

  // Get all FAQ items for mobile view
  const getAllFaqItems = () => {
    const allItems = [];
    Object.keys(allFaqData).forEach(category => {
      allFaqData[category].forEach(item => {
        if (!allItems.some(existingItem => existingItem.id === item.id)) {
          allItems.push({...item, category});
        }
      });
    });
    return allItems;
  };

  // Filter FAQ categories and items based on the active tab
  const filterFaqByTab = () => {
    // For mobile view or if the active tab is GENERAL, show all FAQs
    if (isMobile || activeTab === 'GENERAL') {
      // Return all FAQ items
      const allItems = getAllFaqItems();
      const filteredItems = searchQuery 
        ? allItems.filter(item => 
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : allItems;
      
      // Group by category for display
      const groupedItems = {};
      filteredItems.forEach(item => {
        if (!groupedItems[item.category]) {
          groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
      });
      
      return groupedItems;
    }
    
    // Regular desktop view - filter by tab
    const filteredCategories = {};
    const tabFullName = tabs.find(tab => tab.id === activeTab)?.fullName || activeTab;
    
    Object.keys(allFaqData).forEach(category => {
      const filteredItems = allFaqData[category].filter(item => 
        item.tabs.includes(tabFullName)
      );
      
      if (filteredItems.length > 0) {
        filteredCategories[category] = filteredItems;
      }
    });
    
    return filteredCategories;
  };
  
  const filteredFaq = filterFaqByTab();
  
  // Further filter by search query if provided
  const searchFilteredFaq = () => {
    if (!searchQuery.trim()) return filteredFaq;
    
    const searchResults = {};
    
    Object.keys(filteredFaq).forEach(category => {
      const matchedItems = filteredFaq[category].filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (matchedItems.length > 0) {
        searchResults[category] = matchedItems;
      }
    });
    
    return searchResults;
  };
  
  const displayFaq = searchFilteredFaq();
  const categoryKeys = Object.keys(displayFaq);

  // Get background colors based on category
  const getCategoryColor = (category) => {
    const colors = {
      'GENERAL INFORMATION': 'bg-indigo-100',
      'VTU SERVICES & FEATURES': 'bg-emerald-100',
      'PRICING & PAYMENTS': 'bg-amber-100',
      'TROUBLESHOOTING & SUPPORT': 'bg-rose-100',
      'ACCOUNT & SECURITY': 'bg-blue-100',
      'RESELLERS & EARNINGS': 'bg-purple-100',
      'CONTACT & CUSTOMER SUPPORT': 'bg-pink-100'
    };
    
    return colors[category] || 'bg-gray-100';
  };

  // Get text colors based on category
  const getCategoryTextColor = (category) => {
    const colors = {
      'GENERAL INFORMATION': 'text-indigo-600',
      'VTU SERVICES & FEATURES': 'text-emerald-600',
      'PRICING & PAYMENTS': 'text-amber-600',
      'TROUBLESHOOTING & SUPPORT': 'text-rose-600',
      'ACCOUNT & SECURITY': 'text-blue-600',
      'RESELLERS & EARNINGS': 'text-purple-600',
      'CONTACT & CUSTOMER SUPPORT': 'text-pink-600'
    };
    
    return colors[category] || 'text-gray-600';
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Gradient */}
      <div className="primary-color text-white text-center py-16 px-4 shadow-lg">
        <h1 className="text-4xl font-bold mb-3 transition-all duration-300 transform hover:scale-105">
          Frequently Asked Questions
        </h1>
        <p className="mb-2 text-lg max-w-2xl mx-auto">
          We have answers to all your possible questions, contact us
        </p>
        <p className="text-blue-100">
          if you can't find the answers to your questions here
        </p>
        
        {/* Search Bar with Animation */}
        <div className="max-w-md mx-auto mt-8 relative transition-all duration-300 transform hover:scale-102">
          <input
            type="text"
            placeholder="Search here"
            className="bg-white w-full py-3 px-5 border-white rounded-full text-gray-800 pr-12 shadow-md focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-0 top-0 primary-color hover:primary-color text-white rounded-full p-3 mr-1 mt-1 transition-colors shadow-md">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Centered Smaller Tabs - Hide on mobile */}
      {!isMobile && (
        <div className="border-b border-gray-200 px-4 overflow-x-auto bg-white shadow-sm sticky top-0 z-10">
          <div className="flex justify-center max-w-2xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-3 mx-1 flex items-center gap-1 transition-all duration-200 text-xs whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'primary-color border-b-2 primary-color font-medium' 
                    : 'text-gray-500 hover:text-blue-400'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.id}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Content with Enhanced Styling */}
      <div className="max-w-5xl mx-auto w-full px-4 py-6 mb-8">
        {categoryKeys.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="md:w-1/2">
              {categoryKeys.slice(0, Math.ceil(categoryKeys.length / 2)).map((category, index) => (
                <div key={category} className="mb-10 transform transition-all duration-300 hover:translate-y-1">
                  <div className="flex items-center mb-5">
                    <div className={`w-8 h-8 ${getCategoryColor(category)} rounded-full flex items-center justify-center mr-3 shadow-sm`}>
                      <span className={`${getCategoryTextColor(category)} font-bold`}>{index + 1}</span>
                    </div>
                    <h2 className={`${getCategoryTextColor(category)} font-semibold text-lg`}>{category}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {displayFaq[category].map((item) => (
                      <div 
                        key={item.id} 
                        className="border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden transition-all duration-300"
                      >
                        <button
                          className={`flex justify-between items-center w-full text-left py-2 px-4 hover:bg-gray-50 transition-colors ${expandedItems[item.id] ? 'bg-gray-50' : ''}`}
                          onClick={() => toggleItem(item.id)}
                        >
                          <span className="text-gray-800 font-medium text-sm truncate">{item.question}</span>
                          <span className={`text-blue-500 transition-transform duration-300 flex-shrink-0 ml-2 ${expandedItems[item.id] ? 'rotate-180' : ''}`}>
                            <ChevronDown size={18} />
                          </span>
                        </button>
                        
                        <div 
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            expandedItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="py-3 px-4 text-gray-600 text-sm border-t border-gray-100 bg-gray-50">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="md:w-1/2">
              {categoryKeys.slice(Math.ceil(categoryKeys.length / 2)).map((category, index) => (
                <div key={category} className="mb-10 transform transition-all duration-300 hover:translate-y-1">
                  <div className="flex items-center mb-5">
                    <div className={`w-8 h-8 ${getCategoryColor(category)} rounded-full flex items-center justify-center mr-3 shadow-sm`}>
                      <span className={`${getCategoryTextColor(category)} font-bold`}>
                        {index + 1 + Math.ceil(categoryKeys.length / 2)}
                      </span>
                    </div>
                    <h2 className={`${getCategoryTextColor(category)} font-semibold text-lg`}>{category}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {displayFaq[category].map((item) => (
                      <div 
                        key={item.id} 
                        className="border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden transition-all duration-300"
                      >
                        <button
                          className={`flex justify-between items-center w-full text-left py-2 px-4 hover:bg-gray-50 transition-colors ${expandedItems[item.id] ? 'bg-gray-50' : ''}`}
                          onClick={() => toggleItem(item.id)}
                        >
                          <span className="text-gray-800 font-medium text-sm truncate">{item.question}</span>
                          <span className={`text-blue-500 transition-transform duration-300 flex-shrink-0 ml-2 ${expandedItems[item.id] ? 'rotate-180' : ''}`}>
                            <ChevronDown size={18} />
                          </span>
                        </button>
                        
                        <div 
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            expandedItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="py-3 px-4 text-gray-600 text-sm border-t border-gray-100 bg-gray-50">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-gray-400">
              <Search size={48} className="mx-auto border-amber-50 opacity-40" />
            </div>
            <p className="text-gray-500 text-lg">No FAQs found for the selected criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveTab('GENERAL');}}
              className="mt-4 primary-text hover:primary-text font-medium transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}