
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-menu');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeMenu = document.getElementById('close-menu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileSidebar.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    // Disable scrolling when menu is open
    document.body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
  });

  closeMenu.addEventListener('click', function () {
    hamburger.classList.remove('active');
    mobileSidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking on overlay
  mobileOverlay.addEventListener('click', function () {
    hamburger.classList.remove('active');
    mobileSidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking on menu links
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileSidebar.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Initialize particles background
  if (window.particlesJS) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#10b981"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#10b981",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
  }

  // Minimize portfolio introduction
  const introText = document.getElementById('intro-text');
  const readMoreBtn = document.getElementById('read-more-btn');

  readMoreBtn.addEventListener('click', function () {
    introText.classList.toggle('expanded');
    if (introText.classList.contains('expanded')) {
      readMoreBtn.textContent = currentLanguage === 'hi' ? 'कम पढ़ें' : 'Read Less';
    } else {
      readMoreBtn.textContent = currentLanguage === 'hi' ? 'और पढ़ें' : 'Read More';
    }
  });

  // Language translation functionality
  const translations = {
    en: {
      // Hero section
      hero_title: "I'm Tika<span>Thapa</span>",
      hero_description: "I am Tika Thapa, and my journey is one of strategic investment, driven by a passion for building connections and creating opportunities. I have found my success as a strategic investor in AVS Group of Companies. My journey started with a demanding 9-to-8 job that paid a modest ₹30,000 per month. By investing in AVS, I have been able to build a thriving network of over 5,000 individuals, and this has enabled me to transition to a life of financial freedom, earning a monthly income of ₹12-15 lakhs. My goal now is to empower you to achieve the same level of success I have.",
      read_more: "Read More",
      view_work: "View My Work",

      // Profile section
      personal_profile: "Personal Profile - Tika Thapa",
      professional_profile: "Professional Profile",
      name_label: "Name:",
      name_value: "Tika Thapa",
      profession_label: "Profession:",
      profession_value: "Network Marketer",
      company_label: "Company:",
      company_value: "AVS (Arthish Versus Dairy Projects Limited)",
      traits_title: "Personality Traits",
      trait1: "Charismatic",
      trait2: "Persuasive",
      trait3: "Smooth Talker",
      trait4: "Leadership-Oriented",
      achievements_title: "Career Achievements",
      achievement1: "Former 9 to 5 job worker earning ₹30,000/month",
      achievement2: "Now earning ₹12–15 lakhs/month",
      achievement3: "Built a downline of over 5,000 people in AVS",
      achievement4: "Living proof of success through network marketing",
      mission_title: "Mission",
      mission_text: "Tika Thapa now wants to help others replicate his success through the AVS system and guidance.",

      // Success story
      success_story: "How I Achieved Success",
      journey_title: "My Journey",
      journey_text1: "Joined AVS as a member/investor with product purchase and membership",
      journey_text2: "Built a strong network (downline) of 5,000+ members",
      initial_income: "Initial Income",
      current_income: "Current Income",
      income_title: "Income Streams",
      income1: "Royalty Income",
      income1_desc: "From your direct referrals",
      income2: "Downline Income",
      income2_desc: "From your team's performance",
      income3: "Monthly Bonus",
      income3_desc: "Based on rank and performance",
      income4: "Travel Fund",
      income4_desc: "For achieving targets",
      success_summary: "My success is not just about personal achievement but about creating a system where everyone in my network can thrive.",

      // Portfolio
      portfolio_title: "My Portfolio",
      portfolio1: "Avs Group of Companies Profile",
      portfolio2: "Avs Group of Companies Detail",
      portfolio3: "AVS Group Of Companies Video",
      video_not_supported: "Your browser does not support the video tag.",

      // Footer
      footer_about: "About",
      footer_model: "AVS Model",
      footer_portfolio: "Portfolio",
      footer_contact: "Contact",
      footer_rights: "All rights reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",

      // Mobile menu
      menu_home: "Home",
      menu_home_desc: "About Tika Thapa",
      menu_model: "AVS Model",
      menu_model_desc: "Business structure & plan",
      menu_portfolio: "Portfolio",
      menu_portfolio_desc: "Work samples & achievements",
      menu_contact: "Contact",
      menu_contact_desc: "Get in touch with us",
      connect_text: "Connect with Tika Thapa"
    },
    hi: {
      // Hero section
      hero_title: "मैं हूँ टिका<span>थापा</span>",
      hero_description: "मैं टिका थापा हूं, और मेरी यात्रा रणनीतिक निवेश की है, जो कनेक्शन बनाने और अवसर पैदा करने के जुनून से प्रेरित है। मैंने एवीएस ग्रुप ऑफ कंपनीज में एक रणनीतिक निवेशक के रूप में सफलता पाई है। मेरी यात्रा एक मांगलिक 9-से-8 नौकरी से शुरू हुई जो महीने में मामूली ₹30,000 का भुगतान करती थी। एवीएस में निवेश करके, मैं 5,000 से अधिक व्यक्तियों का एक संपन्न नेटवर्क बनाने में सक्षम हुआ हूं, और इसने मुझे वित्तीय स्वतंत्रता के जीवन में संक्रमण करने में सक्षम बनाया है, जिससे मैं महीने में ₹12-15 लाख कमाता हूं। मेरा लक्ष्य अब आपको वही सफलता हासिल करने में सशक्त बनाना है जो मैंने हासिल की है।",
      read_more: "और पढ़ें",
      view_work: "मेरा काम देखें",

      // Profile section
      personal_profile: "व्यक्तिगत प्रोफाइल - टिका थापा",
      professional_profile: "पेशेवर प्रोफाइल",
      name_label: "नाम:",
      name_value: "टिका थापा",
      profession_label: "पेशा:",
      profession_value: "नेटवर्क मार्केटर",
      company_label: "कंपनी:",
      company_value: "एवीएस (आर्थिश वर्सेस डेयरी प्रोजेक्ट्स लिमिटेड)",
      traits_title: "व्यक्तित्व लक्षण",
      trait1: "करिश्माई",
      trait2: "प्रेरक",
      trait3: "मधुर वक्ता",
      trait4: "नेतृत्व उन्मुख",
      achievements_title: "कैरियर की उपलब्धियां",
      achievement1: "पूर्व 9 से 5 नौकरी जहाँ ₹30,000/माह कमाते थे",
      achievement2: "अब ₹12-15 लाख/माह कमा रहे हैं",
      achievement3: "एवीएस में 5,000+ लोगों की डाउनलाइन बनाई",
      achievement4: "नेटवर्क मार्केटिंग के माध्यम से सफलता का जीवंत प्रमाण",
      mission_title: "मिशन",
      mission_text: "टिका थापा अब एवीएस सिस्टम और मार्गदर्शन के माध्यम से दूसरों को अपनी सफलता को दोहराने में मदद करना चाहते हैं।",

      // Success story
      success_story: "मैंने सफलता कैसे प्राप्त की",
      journey_title: "मेरी यात्रा",
      journey_text1: "उत्पाद खरीद और सदस्यता के साथ एवीएस में सदस्य/निवेशक के रूप में शामिल हुए",
      journey_text2: "5,000+ सदस्यों का मजबूत नेटवर्क (डाउनलाइन) बनाया",
      initial_income: "प्रारंभिक आय",
      current_income: "वर्तमान आय",
      income_title: "आय स्रोत",
      income1: "रॉयल्टी आय",
      income1_desc: "आपके प्रत्यक्ष रेफरल से",
      income2: "डाउनलाइन आय",
      income2_desc: "आपकी टीम के प्रदर्शन से",
      income3: "मासिक बोनस",
      income3_desc: "रैंक और प्रदर्शन के आधार पर",
      income4: "यात्रा कोष",
      income4_desc: "लक्ष्यों को प्राप्त करने के लिए",
      success_summary: "मेरी सफलता सिर्फ व्यक्तिगत उपलब्धि के बारे में नहीं है बल्कि एक ऐसी प्रणाली बनाने के बारे में है जहाँ मेरे नेटवर्क में हर कोई फल-फूल सके।",

      // Portfolio
      portfolio_title: "मेरा पोर्टफोलियो",
      portfolio1: "एवीएस ग्रुप ऑफ कंपनीज प्रोफाइल",
      portfolio2: "एवीएस ग्रुप ऑफ कंपनीज विवरण",
      portfolio3: "एवीएस ग्रुप ऑफ कंपनीज वीडियो",
      video_not_supported: "आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।",

      // Footer
      footer_about: "हमारे बारे में",
      footer_model: "एवीएस मॉडल",
      footer_portfolio: "पोर्टफोलियो",
      footer_contact: "संपर्क करें",
      footer_rights: "सर्वाधिकार सुरक्षित।",
      footer_privacy: "गोपनीयता नीति",
      footer_terms: "सेवा की शर्तें",

      // Mobile menu
      menu_home: "होम",
      menu_home_desc: "टिका थापा के बारे में",
      menu_model: "एवीएस मॉडल",
      menu_model_desc: "व्यापार संरचना और योजना",
      menu_portfolio: "पोर्टफोलियो",
      menu_portfolio_desc: "कार्य नमूने और उपलब्धियां",
      menu_contact: "संपर्क करें",
      menu_contact_desc: "हमसे संपर्क करें",
      connect_text: "टिका थापा से जुड़ें"
    }
  };

  let currentLanguage = 'en';
  const langEnBtn = document.getElementById('lang-en');
  const langHiBtn = document.getElementById('lang-hi');

  function setLanguage(lang) {
    currentLanguage = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Update read more button text
    const readMoreBtn = document.getElementById('read-more-btn');
    if (document.getElementById('intro-text').classList.contains('expanded')) {
      readMoreBtn.textContent = lang === 'hi' ? 'कम पढ़ें' : 'Read Less';
    } else {
      readMoreBtn.textContent = lang === 'hi' ? 'और पढ़ें' : 'Read More';
    }
  }

  // Set up language switchers
  langEnBtn.addEventListener('click', () => setLanguage('en'));
  langHiBtn.addEventListener('click', () => setLanguage('hi'));

  // Initialize with English
  setLanguage('en');
});

