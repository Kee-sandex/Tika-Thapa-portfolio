
document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      "home": "Home",
      "avs-model": "AVS Model",
      "portfolio": "Portfolio",
      "contact": "Contact",
      "hero-title": "Invest with <span>Tika Thhapa</span> & AVS Group",
      "hero-subtitle": "Join our network of successful investors and start your journey to financial freedom. With proven results and a sustainable business model, AVS Dairy offers you an opportunity to grow your wealth while contributing to India's dairy industry.",
      "apply-now": "Apply Now",
      "why-invest-title": "Why Invest with AVS Dairy?",
      "why-invest-text": "Under the leadership of Tika Thhapa, our team has helped thousands of investors achieve financial independence through the AVS business model. With multiple income streams and a solid track record, this is your opportunity to transform your financial future.",
      "benefit-1-title": "3% Monthly Returns",
      "benefit-1-text": "Consistent monthly returns",
      "benefit-2-title": "Multiple Income Streams",
      "benefit-2-text": "Diverse earning options",
      "benefit-3-title": "Secure Investment",
      "benefit-3-text": "Backed by real assets",
      "benefit-4-title": "Team Support",
      "benefit-4-text": "Expert guidance",
      "success-title": "Success Stories",
      "success-story-1": "Former workers earning ₹12-15 lakhs/month",
      "success-story-2": "5,000+ members in our network",
      "success-story-3": "Proven wealth creation system",
      "form-title": "Investment Application",
      "form-description": "Complete this form to begin your investment journey with AVS Dairy and Tika Thhapa's team. Our representative will contact you within 24 hours.",
      "signature-title": "AVS Team Leader & Investment Advisor",
      "signature-quote": "I personally invite you to join our growing network of successful investors. With the AVS system and my team's guidance, we can help you achieve financial freedom just as I and thousands of others have.",
      "footer-h3-1": "Tika Thhapa",
      "footer-p-1": "Strategic Investor & Top Network Leader at AVS Group of Companies. Empowering others to achieve financial freedom through smart investments.",
      "footer-h3-2": "Quick Links",
      "footer-h3-3": "AVS Group Companies",
      "avs-dairy": "AVS Dairy",
      "avs-flour": "AVS Flour Mills",
      "avs-restaurants": "AVS Restaurants",
      "avs-properties": "AVS Properties",
      "avs-resorts": "AVS Resorts",
      "copyright": "© 2025 Tika Thhapa- AVS Group Leader. All Rights Reserved.",
      "footer-address": "AVS Dairy Projects Limited | Visit My Office : H. Office : Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074"
    },
    hi: {
      "home": "होम",
      "avs-model": "एवीएस मॉडल",
      "portfolio": "पोर्टफोलियो",
      "contact": "संपर्क",
      "hero-title": "<span>टीका थापा</span> और एवीएस ग्रुप के साथ निवेश करें",
      "hero-subtitle": "हमारे सफल निवेशकों के नेटवर्क में शामिल हों और वित्तीय स्वतंत्रता की अपनी यात्रा शुरू करें। सिद्ध परिणामों और एक स्थायी व्यवसाय मॉडल के साथ, एवीएस डेयरी आपको भारत की डेयरी उद्योग में योगदान देते हुए अपनी संपत्ति बढ़ाने का अवसर प्रदान करती है।",
      "apply-now": "अभी आवेदन करें",
      "why-invest-title": "एवीएस डेयरी के साथ क्यों निवेश करें?",
      "why-invest-text": "टीका थापा के नेतृत्व में, हमारी टीम ने एवीएस व्यवसाय मॉडल के माध्यम से हजारों निवेशकों को वित्तीय स्वतंत्रता प्राप्त करने में मदद की है। कई आय स्रोतों और एक ठोस ट्रैक रिकॉर्ड के साथ, यह आपके वित्तीय भविष्य को बदलने का आपका अवसर है।",
      "benefit-1-title": "3% मासिक रिटर्न",
      "benefit-1-text": "लगातार मासिक रिटर्न",
      "benefit-2-title": "कई आय स्रोत",
      "benefit-2-text": "विविध आय विकल्प",
      "benefit-3-title": "सुरक्षित निवेश",
      "benefit-3-text": "वास्तविक परिसंपत्तियों द्वारा समर्थित",
      "benefit-4-title": "टीम समर्थन",
      "benefit-4-text": "विशेषज्ञ मार्गदर्शन",
      "success-title": "सफलता की कहानियाँ",
      "success-story-1": "पूर्व कर्मचारी ₹12-15 लाख/माह कमा रहे हैं",
      "success-story-2": "हमारे नेटवर्क में 5,000+ सदस्य",
      "success-story-3": "सिद्ध धन सृजन प्रणाली",
      "form-title": "निवेश आवेदन",
      "form-description": "एवीएस डेयरी और टीका थापा की टीम के साथ अपनी निवेश यात्रा शुरू करने के लिए इस फॉर्म को पूरा करें। हमारा प्रतिनिधि 24 घंटों के भीतर आपसे संपर्क करेगा।",
      "signature-title": "एवीएस टीम लीडर और निवेश सलाहकार",
      "signature-quote": "मैं व्यक्तिगत रूप से आपको हमारे बढ़ते सफल निवेशकों के नेटवर्क में शामिल होने के लिए आमंत्रित करता हूँ। एवीएस प्रणाली और मेरी टीम के मार्गदर्शन के साथ, हम आपको वित्तीय स्वतंत्रता प्राप्त करने में मदद कर सकते हैं जैसा कि मैंने और हजारों अन्य लोगों ने किया है।",
      "footer-h3-1": "टिका थापा",
      "footer-p-1": "एवीएस ग्रुप ऑफ कंपनीज में स्ट्रैटेजिक इन्वेस्टर और टॉप नेटवर्क लीडर। स्मार्ट निवेश के माध्यम से दूसरों को वित्तीय स्वतंत्रता प्राप्त करने में सशक्त बनाना।",
      "footer-h3-2": "त्वरित लिंक",
      "footer-h3-3": "एवीएस ग्रुप कंपनियां",
      "avs-dairy": "एवीएस डेयरी",
      "avs-flour": "एवीएस आटा मिल्स",
      "avs-restaurants": "एवीएस रेस्तरां",
      "avs-properties": "एवीएस प्रॉपर्टीज",
      "avs-resorts": "एवीएस रिसॉर्ट्स",
      "copyright": "© 2025 टिका थापा - एवीएस ग्रुप लीडर। सर्वाधिकार सुरक्षित।",
      "footer-address": "एवीएस डेयरी प्रोजेक्ट्स लिमिटेड | Visit My Office : H. Office : Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074"
    }
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[lang][key]) {
        // Preserve inner HTML if it contains other elements (like <span> or <i>)
        const originalContent = element.innerHTML;
        const translatedText = translations[lang][key];
        // If there's a <span> inside the element (like in the main title), replace the text while keeping the span
        if (originalContent.includes('<span>')) {
          const newContent = originalContent.replace(/<span.*?>.*?<\/span>/, '<span>' + translations['en'][key].match(/<span>(.*?)<\/span>/)[1] + '</span>');
          element.innerHTML = translatedText.replace(/<span>(.*?)<\/span>/, originalContent.match(/<span>(.*?)<\/span>/)[0]);
        } else if (originalContent.includes('<i')) {
          const iconHtml = originalContent.match(/<i.*?<\/i>/);
          if (iconHtml) {
            element.innerHTML = iconHtml[0] + ' ' + translatedText;
          } else {
            element.textContent = translatedText;
          }
        } else {
          element.textContent = translatedText;
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    localStorage.setItem('lang', lang);
  }

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  function setMode(mode) {
    if (mode === 'dark-mode') {
      body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      body.classList.remove('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('mode', mode);
  }

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Initial setup on page load
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  const savedMode = localStorage.getItem('mode') || '';
  setMode(savedMode);

  // Event listeners
  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-hi').addEventListener('click', () => setLanguage('hi'));

  themeToggle.addEventListener('click', () => {
    const currentMode = body.classList.contains('dark-mode') ? '' : 'dark-mode';
    setMode(currentMode);
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ?
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
