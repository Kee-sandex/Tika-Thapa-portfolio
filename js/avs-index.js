
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Language Translation Feature
const translations = {
  en: {
    "home": "Home",
    "avs-model": "AVS Model",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "name": "Tika Thhapa",
    "hero-title": "Strategic Investor & Network Leader",
    "hero-p1": "My journey is one of strategic investment, driven by a passion for building connections and creating opportunities.",
    "stat1": "Network Members",
    "stat2": "Monthly Income",
    "discover-avs": "Discover AVS Model",
    "join-team": "Join My Team",
    "about-title": "About Me",
    "about-h3": "From Employee to Empowered Leader – My Journey",
    "about-p1": "I am Tika Thhapa, and my story is about turning challenges into opportunities through passion, persistence, and the right network.",
    "about-p2": "My journey began with a demanding 9-to-8 job, but I always knew there was something greater waiting for me. Through dedication and a powerful system, I discovered a path that not only gave me freedom, but also allowed me to inspire and build a thriving community.",
    "about-p3": "Today, I’m proud to share that transformation with others. My success isn’t just about personal growth—it’s about empowering people around me to dream bigger and achieve more. I believe in connections, teamwork, and the strength of a united vision.",
    "about-p4": "If you want to know how I did it and be part of a journey that can change your life too, <strong>join my team and let’s grow together!</strong>",
    "avs-title": "About AVS Group of Companies",
    "step1-h3": "Membership",
    "step1-p": "Become a member by purchasing any AVS product with a ₹1,200 membership fee. ",
    "step2-h3": "Investment",
    "step2-p": "Invest any amount (e.g. ₹1,00,000). The company uses this to purchase dairy animals and infrastructure.",
    "step3-h3": "3% Monthly Return",
    "step3-p": "Receive 3% monthly return on your investment (₹3,000/month on ₹1,00,000 investment).",
    "income-opportunities": "Income Opportunities",
    "income-h4-1": "Direct Income",
    "income-p-1": "Earn commissions for bringing new investors to AVS Dairy",
    "income-h4-2": "Level Income",
    "income-p-2": "Earn from multiple levels in your network structure",
    "income-h4-3": "Matching Income",
    "income-p-3": "Receive bonuses based on your team's performance",
    "income-h4-4": "Leadership Bonus",
    "income-p-4": "Additional rewards for top performers and leaders",
    "avs-agreement": "AVS provides a 48-month agreement with consistent monthly returns. The company benefits as the dairy herd grows, creating a sustainable cycle for both investors and the business.",
    "start-journey": "Start Your Journey Today",
    "journey-title": "My Journey to Success",
    "journey-step1-h3": "Struggling Beginning",
    "journey-step1-p": "Working a 9am-8pm job earning just ₹50,000/month with no growth opportunities",
    "journey-step2-h3": "Discovering AVS",
    "journey-step2-p": "Learned about AVS Group's business model and investment opportunities in 2020",
    "journey-step3-h3": "Initial Investment",
    "journey-step3-p": "Started with a modest investment while continuing my regular job",
    "journey-step4-h3": "Building Network",
    "journey-step4-p": "Used my persuasive skills to build a team of 50 people in the first year",
    "journey-step5-h3": "Exponential Growth",
    "journey-step5-p": "My network grew to 500+ people by year 2, allowing me to quit my job",
    "journey-step6-h3": "Leadership Position",
    "journey-step6-p": "Reached 6,000+ network members and earning a consistent, high-level income that gave me complete freedom ",
    "why-join-h3": "Why Join My Team?",
    "why-join-li1": "Personal mentorship from me",
    "why-join-li2": "Proven strategies to build your network",
    "why-join-li3": "Weekly training sessions",
    "why-join-li4": "Marketing materials and support",
    "why-join-li5": "Monthly Team Tour",
    "contact-title": "Get In Touch",
    "contact-h4-1": "Location",
    "contact-p-1": "Delhi, India",
    "contact-h4-2": "Phone",
    "contact-p-2": "+91 9517173555",
    "contact-h4-3": "Email",
    "contact-p-3": "avsdairy786@gmail.com",
    "contact-form-h3": "Send a Message",
    "form-label-name": "Full Name",
    "form-placeholder-name": "Your Name",
    "form-label-email": "Email Address",
    "form-placeholder-email": "Your Email",
    "form-label-phone": "Phone Number",
    "form-placeholder-phone": "Your Phone",
    "form-label-message": "Your Message",
    "form-placeholder-message": "How can I help you?",
    "send-message": "Send Message",
    "footer-h3-1": "Tika Thhapa",
    "footer-p-1": "Strategic Investor & Top Network Leader at AVS Group of Companies. Empowering others to achieve financial freedom through smart investments.",
    "footer-h3-2": "Quick Links",
    "footer-h3-3": "AVS Group Companies",
    "avs-dairy": "AVS Dairy",
    "avs-flour": "AVS Flour Mills",
    "avs-restaurants": "AVS Restaurants",
    "avs-properties": "AVS Properties",
    "avs-resorts": "AVS Resorts",
    "copyright": "© 2025 TikkaThapa - AVS Group Leader. All Rights Reserved.",
    "footer-address": "AVS Dairy Projects Limited | Registered Office: Fatehpur Beri, Delhi"
  },
  hi: {
    "home": "होम",
    "avs-model": "एवीएस मॉडल",
    "portfolio": "पोर्टफोलियो",
    "contact": "संपर्क करें",
    "name": "टीका थापा",
    "hero-title": "रणनीतिक निवेशक और नेटवर्क लीडर",
    "hero-p1": "मेरा सफर रणनीतिक निवेश का है, जो संबंध बनाने और अवसर पैदा करने के जुनून से प्रेरित है।",
    "stat1": "नेटवर्क सदस्य",
    "stat2": "मासिक आय",
    "discover-avs": "एवीएस मॉडल जानें",
    "join-team": "मेरी टीम में शामिल हों",
    "about-title": "मेरे बारे में",
    "about-h3": "“नौकरी से लेकर लीडर बनने तक – मेरी कहानी”",
    "about-p1": "मैं टीका थापा हूँ, और मेरी कहानी जुनून, लगन और सही नेटवर्क के माध्यम से चुनौतियों को अवसरों में बदलने के बारे में है।",
    "about-p2": "मेरी यात्रा एक मांग वाली 9-से-8 की नौकरी से शुरू हुई थी, लेकिन मैं हमेशा जानता था कि मेरे लिए कुछ और बड़ा इंतजार कर रहा है। समर्पण और एक शक्तिशाली प्रणाली के माध्यम से, मैंने एक ऐसा रास्ता खोजा जिसने न केवल मुझे स्वतंत्रता दी, बल्कि मुझे एक फलता-फूलता समुदाय बनाने और प्रेरित करने की अनुमति भी दी।",
    "about-p3": "आज, मुझे उस बदलाव को दूसरों के साथ साझा करने पर गर्व है। मेरी सफलता केवल व्यक्तिगत विकास के बारे में नहीं है – यह मेरे आस-पास के लोगों को बड़े सपने देखने और अधिक हासिल करने के लिए सशक्त बनाने के बारे में है। मुझे संबंधों, टीम वर्क और एक एकजुट दृष्टि की ताकत में विश्वास है।",
    "about-p4": "यदि आप जानना चाहते हैं कि मैंने यह कैसे किया और एक ऐसी यात्रा का हिस्सा बनना चाहते हैं जो आपके जीवन को भी बदल सकती है, तो मेरी टीम में शामिल हों और आइए मिलकर आगे बढ़ें! ",
    "avs-title": "एवीएस ग्रुप ऑफ कंपनीज के बारे में",
    "step1-h3": "सदस्यता",
    "step1-p": "₹1,200 की सदस्यता शुल्क के साथ कोई भी एवीएस उत्पाद खरीदकर सदस्य बनें। ",
    "step2-h3": "निवेश",
    "step2-p": "कोई भी राशि निवेश करें (उदाहरण के लिए ₹1,00,000)। कंपनी इसका उपयोग दुधारू पशुओं और बुनियादी ढांचे को खरीदने के लिए करती है।",
    "step3-h3": "3% मासिक रिटर्न",
    "step3-p": "अपने निवेश पर 3% मासिक रिटर्न प्राप्त करें (₹1,00,000 के निवेश पर ₹3,000/माह)।",
    "income-opportunities": "आय के अवसर",
    "income-h4-1": "प्रत्यक्ष आय",
    "income-p-1": "एवीएस डेयरी में नए निवेशकों को लाने के लिए कमीशन कमाएं",
    "income-h4-2": "लेवल इनकम",
    "income-p-2": "अपने नेटवर्क संरचना में कई स्तरों से कमाएं",
    "income-h4-3": "मैचिंग इनकम",
    "income-p-3": "अपनी टीम के प्रदर्शन के आधार पर बोनस प्राप्त करें",
    "income-h4-4": "नेतृत्व बोनस",
    "income-p-4": "शीर्ष प्रदर्शन करने वालों और नेताओं के लिए अतिरिक्त पुरस्कार",
    "avs-agreement": "डेयरी व्यवसाय बढ़ने से कंपनी को लाभ होता है, जिससे निवेशकों और व्यवसाय दोनों के लिए एक स्थायी चक्र का निर्माण होता है।",
    "start-journey": "आज ही अपनी यात्रा शुरू करें",
    "journey-title": "मेरी सफलता की यात्रा",
    "journey-step1-h3": "संघर्षपूर्ण शुरुआत",
    "journey-step1-p": "एक 9am-8pm की नौकरी कर रहा था, जिसमें कोई विकास के अवसर नहीं थे और केवल ₹50,000/माह कमा रहा था",
    "journey-step2-h3": "एवीएस की खोज",
    "journey-step2-p": "2020 में एवीएस ग्रुप के व्यवसाय मॉडल और निवेश के अवसरों के बारे में जाना",
    "journey-step3-h3": "प्रारंभिक निवेश",
    "journey-step3-p": "अपनी नियमित नौकरी जारी रखते हुए एक मामूली निवेश के साथ शुरुआत की",
    "journey-step4-h3": "नेटवर्क का निर्माण",
    "journey-step4-p": "पहले वर्ष में 50 लोगों की टीम बनाने के लिए अपने प्रेरक कौशल का उपयोग किया",
    "journey-step5-h3": "घातांक वृद्धि",
    "journey-step5-p": "दूसरे वर्ष तक मेरा नेटवर्क 500+ लोगों तक बढ़ गया, जिससे मुझे अपनी नौकरी छोड़ने की अनुमति मिली",
    "journey-step6-h3": "नेतृत्व की स्थिति",
    "journey-step6-p": "6,000 से अधिक नेटवर्क सदस्यों तक पहुंच और एक निरंतर, उच्च-स्तरीय आय अर्जित करना जिससे मुझे पूर्ण स्वतंत्रता मिली",
    "why-join-h3": "मेरी टीम में क्यों शामिल हों?",
    "why-join-li1": "मुझसे व्यक्तिगत मार्गदर्शन",
    "why-join-li2": "अपने नेटवर्क को बनाने के लिए सिद्ध रणनीतियाँ",
    "why-join-li3": "साप्ताहिक प्रशिक्षण सत्र",
    "why-join-li4": "विपणन सामग्री और सहायता",
    "why-join-li5": "मासिक टीम टूर",
    "contact-title": "संपर्क में रहें",
    "contact-h4-1": "स्थान",
    "contact-p-1": "दिल्ली, भारत",
    "contact-h4-2": "फोन",
    "contact-p-2": "+91 98765 43210",
    "contact-h4-3": "ईमेल",
    "contact-p-3": "tika.thapa@avsgroup.com",
    "contact-form-h3": "एक संदेश भेजें",
    "form-label-name": "पूरा नाम",
    "form-placeholder-name": "आपका नाम",
    "form-label-email": "ईमेल पता",
    "form-placeholder-email": "आपका ईमेल",
    "form-label-phone": "फ़ोन नंबर",
    "form-placeholder-phone": "आपका फ़ोन",
    "form-label-message": "आपका संदेश",
    "form-placeholder-message": "मैं आपकी कैसे मदद कर सकता हूँ?",
    "send-message": "संदेश भेजें",
    "footer-h3-1": "टीका थापा",
    "footer-p-1": "एवीएस ग्रुप ऑफ कंपनीज में रणनीतिक निवेशक और शीर्ष नेटवर्क लीडर। स्मार्ट निवेश के माध्यम से दूसरों को वित्तीय स्वतंत्रता प्राप्त करने के लिए सशक्त बनाना।",
    "footer-h3-2": "त्वरित लिंक",
    "footer-h3-3": "एवीएस ग्रुप कंपनियां",
    "avs-dairy": "एवीएस डेयरी",
    "avs-flour": "एवीएस आटा मिल्स",
    "avs-restaurants": "एवीएस रेस्टोरेंट्स",
    "avs-properties": "एवीएस प्रॉपर्टीज",
    "avs-resorts": "एवीएस रिसॉर्ट्स",
    "copyright": "© 2025 टीका थापा - एवीएस ग्रुप लीडर। सर्वाधिकार सुरक्षित।",
    "footer-address": "एवीएस डेयरी प्रोजेक्ट्स लिमिटेड | पंजीकृत कार्यालय: फतेहपुर बेरी, दिल्ली"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll('[data-translate-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate-key');
    const targetText = translations[lang][key];

    if (targetText !== undefined) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = targetText;
      } else {
        element.textContent = targetText;
      }
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');

  localStorage.setItem('lang', lang);
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hi').addEventListener('click', () => setLanguage('hi'));

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});
