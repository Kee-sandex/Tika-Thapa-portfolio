
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const langEnBtn = document.getElementById('lang-en');
  const langHiBtn = document.getElementById('lang-hi');

  // Translation dictionary
  const translations = {
    'en': {
      'home': 'Home',
      'avs-model': 'AVS Model',
      'portfolio': 'Portfolio',
      'contact': 'Contact',
      'name': 'Tika Thhapa ',
      'hero-title': 'Investor at AVS Group',
      'hero-p1': 'I have invested in AVS Group of Companies and achieved financial independence. Now I\'m financially free and earning well.',
      'stat1': 'Financially Independent',
      'stat2': 'Years Investing',
      'discover-avs': 'Discover AVS Investments',
      'join-team': 'Contact Me',
      'about-title': 'About Me',
      'about-h3': 'From Employee to Financially Free Investor',
      'about-p1': 'I am Tika Thhapa , an investor in AVS Group of Companies. My investment journey has given me financial freedom and the ability to do whatever I want in life.',
      'about-p2': 'After investing in AVS Group, I achieved complete financial independence. Now I\'m earning well and living life on my own terms.',
      'about-p3': 'This portfolio contains all the details about my investment journey with AVS Group. You can explore how I achieved financial freedom through smart investments.',
      'about-p4': 'AVS Group is one of the best investment companies where you can invest your money and earn good returns. If you want to know how you can also achieve financial freedom through AVS investments, feel free to contact me directly.',
      'about-p5': 'You can read more about my investment journey and AVS Group on this website. I\'m happy to share my experience and help others achieve similar success.',
      'view-portfolio': 'View My Portfolio',
      'contact-me': 'Contact Me Directly',
      'footer-h3-1': 'Tika Thhapa ',
      'footer-p-1': 'Investor at AVS Group of Companies. Achieved financial freedom through strategic investments and now helping others do the same.',
      'footer-h3-2': 'Quick Links',
      'footer-h3-3': 'AVS Group Companies',
      'avs-dairy': 'AVS Dairy',
      'avs-flour': 'AVS Flour Mills',
      'avs-restaurants': 'AVS Restaurants',
      'avs-properties': 'AVS Properties',
      'avs-resorts': 'AVS Resorts',
      'copyright': '© 2025 Tika Thhapa  - AVS Group Investor. All Rights Reserved.',
      'footer-address': 'AVS Dairy Projects Limited | Visit My Office : H. Office : Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074'
    },
    'hi': {
      'home': 'होम',
      'avs-model': 'AVS मॉडल',
      'portfolio': 'पोर्टफोलियो',
      'contact': 'संपर्क',
      'name': 'टीका थापा',
      'hero-title': 'AVS ग्रुप में निवेशक',
      'hero-p1': 'मैंने AVS ग्रुप ऑफ कंपनीज़ में निवेश किया है और वित्तीय स्वतंत्रता प्राप्त की है। अब मैं वित्तीय रूप से स्वतंत्र हूं और अच्छी कमाई कर रहा हूं।',
      'stat1': 'वित्तीय रूप से स्वतंत्र',
      'stat2': 'वर्षों से निवेश',
      'discover-avs': 'AVS निवेश खोजें',
      'join-team': 'मुझसे संपर्क करें',
      'about-title': 'मेरे बारे में',
      'about-h3': 'कर्मचारी से वित्तीय रूप से स्वतंत्र निवेशक तक',
      'about-p1': 'मैं टीका थापा हूं, AVS ग्रुप ऑफ कंपनीज़ में एक निवेशक। मेरे निवेश यात्रा ने मुझे वित्तीय स्वतंत्रता दी है और जीवन में जो चाहे करने की क्षमता दी है।',
      'about-p2': 'AVS ग्रुप में निवेश करने के बाद, मैंने पूरी वित्तीय स्वतंत्रता प्राप्त की। अब मैं अच्छी कमाई कर रहा हूं और अपनी शर्तों पर जीवन जी रहा हूं।',
      'about-p3': 'इस पोर्टफोलियो में AVS ग्रुप के साथ मेरी निवेश यात्रा के सभी विवरण शामिल हैं। आप जान सकते हैं कि मैंने स्मार्ट निवेश के through वित्तीय स्वतंत्रता कैसे प्राप्त की।',
      'about-p4': 'AVS ग्रुप सबसे अच्छी निवेश कंपनियों में से एक है जहां आप अपना पैसा निवेश कर सकते हैं और अच्छा रिटर्न कमा सकते हैं। यदि आप जानना चाहते हैं कि आप AVS निवेश के through वित्तीय स्वतंत्रता कैसे प्राप्त कर सकते हैं, तो बेझिझक मुझसे सीधे संपर्क करें।',
      'about-p5': 'आप इस वेबसाइट पर मेरी निवेश यात्रा और AVS ग्रुप के बारे में और पढ़ सकते हैं। मैं अपना अनुभव साझा करके और दूसरों को समान सफलता प्राप्त करने में मदद करके खुश हूं।',
      'view-portfolio': 'मेरा पोर्टफोलियो देखें',
      'contact-me': 'सीधे संपर्क करें',
      'footer-h3-1': 'टीका थापा',
      'footer-p-1': 'AVS ग्रुप ऑफ कंपनीज़ में निवेशक। रणनीतिक निवेश के through वित्तीय स्वतंत्रता प्राप्त की और अब दूसरों की मदद कर रहे हैं।',
      'footer-h3-2': 'त्वरित लिंक',
      'footer-h3-3': 'AVS ग्रुप कंपनियां',
      'avs-dairy': 'AVS डेयरी',
      'avs-flour': 'AVS आटा मिल्स',
      'avs-restaurants': 'AVS रेस्तरां',
      'avs-properties': 'AVS प्रॉपर्टीज',
      'avs-resorts': 'AVS रिसॉर्ट्स',
      'copyright': '© 2025 Tika Thhapa  - AVS ग्रुप निवेशक। सर्वाधिकार सुरक्षित।',
      'footer-address': 'AVS Dairy Projects Limited | Visit My  Office: H. Office : Plot NO. 9/1 Mustil No.4, Dera Village Near Asthal Mandir New Delhi - 110074'
    }
  };

  // Set language function
  function setLanguage(lang) {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Store language preference
    localStorage.setItem('preferred-language', lang);
  }

  // Language switcher event listeners
  langEnBtn.addEventListener('click', () => setLanguage('en'));
  langHiBtn.addEventListener('click', () => setLanguage('hi'));

  // Check for saved language preference or default to English
  const preferredLanguage = localStorage.getItem('preferred-language') || 'en';
  setLanguage(preferredLanguage);

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
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

  // Dark Mode Toggle
  if (themeToggleBtn) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      themeToggleBtn.querySelector('i').classList.remove('fa-moon');
      themeToggleBtn.querySelector('i').classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        themeToggleBtn.querySelector('i').classList.remove('fa-moon');
        themeToggleBtn.querySelector('i').classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggleBtn.querySelector('i').classList.remove('fa-sun');
        themeToggleBtn.querySelector('i').classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
