
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
});

const translations = {
  en: {
    homeLink: "Home",
    companyLink: "AVS Model",
    portfolioLink: "Portfolio",
    contactLink: "Contact",
    heroTitle: "AVS Dairy Business Model",
    heroDescription: "An in-depth look at the AVS Group's operational and investment model, offering insights into their dairy, food, and property ventures.",
    investmentBtn: "Investment Plan",
    companyProfileTitle: "Company Profile",
    detailsTitle: "Details",
    companyNameLabel: "Company Name:",
    companyNameValue: "AVS (Arthis Versus Dairy Projects Limited)",
    cmdLabel: "CMD:",
    cmdValue: "Shri Rajendra Singh",
    startDateLabel: "Start Date:",
    startDateValue: "October 21, 2020",
    locationsTitle: "Locations",
    headOfficeLabel: "Head Office & Plant:",
    headOfficeValue: "Fatehpur Beri, Delhi",
    farmsLabel: "Farms:",
    farmsValue: "Fatehpur Beri (2), Narela (1), Sohna (2), Palwal (1), Faridabad (1)",
    restaurantsLabel: "Restaurants:",
    restaurantsValue: "Fatehpur Beri, Gurgaon (Gwal Pahari & Dunda Hera), Faridabad, Kotla Mubarakpur",
    businessVerticalsTitle: "Business Verticals",
    dairyLabel: "Dairy:",
    dairyValue: "3000+ buffaloes, 250+ cows, 30,000+ liters of milk sold daily.",
    flourMillsLabel: "Flour Mills:",
    flourMillsValue: "Located in Alwar, Rajasthan, producing flour, oil, semolina, and more.",
    foodStoresLabel: "Food Stores & Restaurants:",
    foodStoresValue: "Multiple locations across Delhi and Gurgaon.",
    propertiesLabel: "Properties:",
    propertiesValue: "Residential properties, villas, and resorts in various locations.",
    downloadTitle: "Download Brochure",
    downloadDescription: "You can download the full company profile for more details.",
    downloadButton: "Download PDF",
    investmentTitle: "Investment & Returns Model",
    joiningParagraph1: "To join AVS Dairy, a one-time membership fee of ₹1,200 is required, which can be used to purchase products or dine at their restaurants. After joining, members receive a unique ID and password.",
    agreementTitle: "The 48-Month Agreement",
    agreementParagraph: "For an investment of ₹1,00,000, the company offers a 48-month agreement, providing a 3% monthly return. This means an investor receives ₹3,000 every month for four years, totaling ₹1,44,000 in returns. At the end of the agreement, the original investment of ₹1,00,000 is also returned.",
    returnMethodTitle: "How the 3% Return is Generated",
    returnMethodParagraph1: "The company uses the ₹1,00,000 investment to purchase a buffalo and a calf. The buffalo produces approximately 10 liters of milk daily. The member has two options:",
    option1: "Receive 1.5 liters of milk daily",
    option1Desc: "Fresh milk delivered to your doorstep daily",
    option2: "Receive ₹3,000 per month",
    option2Desc: "Equivalent to the value of the milk (1.5 liters x 30 days)",
    returnMethodParagraph2: "The remaining 8.5 liters of milk is sold or used in the company's restaurants, which is how the company generates its profit.",
    withdrawalPolicyTitle: "Withdrawal Policy",
    withdrawalPolicy1: "If a member wishes to withdraw their investment before 24 months, a 10% deduction will be made from the total amount.",
    withdrawalPolicy2: "After completing 24 months, the full investment can be withdrawn without any deductions.",
    earlyWithdrawal: "Early Withdrawal",
    earlyWithdrawalDesc: "10% deduction if withdrawn before 24 months",
    fullWithdrawal: "Full Withdrawal",
    fullWithdrawalDesc: "No deductions after completing 24 months",
    requirementsTitle: "Required Documents",
    requirementsDescription: "To become a member, the following documents are mandatory:",
    doc1: "Aadhaar Card",
    doc1Desc: "Government ID proof",
    doc2: "PAN Card",
    doc2Desc: "Tax identification card",
    doc3: "Bank Details",
    doc3Desc: "Bank Name, Account Number, IFSC Code",
    doc4: "Bank-linked Mobile Number",
    doc4Desc: "For verification purposes",
    doc5: "Nominee Details",
    doc5Desc: "Name, Age of nominee",
    contactTitle: "Contact Information",
    contactDescription: "For more information, please reach out to us.",
    emailLabel: "Email:",
    emailValue: "avsdairy786@gmail.com",
    phoneLabel: "Phone:",
    phoneValue: "+91-9517173555",
  },
  hi: {
    homeLink: "होम",
    companyLink: "एवीएस मॉडल",
    portfolioLink: "पोर्टफोलियो",
    contactLink: "संपर्क",
    heroTitle: "एवीएस डेयरी बिजनेस मॉडल",
    heroDescription: "एवीएस समूह के परिचालन और निवेश मॉडल पर एक गहन नज़र, उनके डेयरी, खाद्य और संपत्ति के उद्यमों में अंतर्दृष्टि प्रदान करती है।",
    investmentBtn: "निवेश योजना",
    companyProfileTitle: "कंपनी प्रोफ़ाइल",
    detailsTitle: "विवरण",
    companyNameLabel: "कंपनी का नाम:",
    companyNameValue: "एवीएस (अर्थिश बनाम डेयरी प्रोजेक्ट्स लिमिटेड)",
    cmdLabel: "सीएमडी:",
    cmdValue: "श्री राजेन्द्र सिंह",
    startDateLabel: "शुरुआत की तारीख:",
    startDateValue: "21 अक्टूबर 2020",
    locationsTitle: "स्थान",
    headOfficeLabel: "हेड ऑफिस और प्लांट:",
    headOfficeValue: "फतेहपुर बेरी, दिल्ली",
    farmsLabel: "फार्म:",
    farmsValue: "फतेहपुर बेरी (2), नरेला (1), सोहना (2), पलवल (1), फरीदाबाद (1)",
    restaurantsLabel: "रेस्टोरेंट:",
    restaurantsValue: "फतेहपुर बेरी, गुड़गांव (ग्वाल पहाड़ी और डूंडा हेरा), फरीदाबाद, कोटला मुबारकपुर",
    businessVerticalsTitle: "बिजनेस वर्टिकल",
    dairyLabel: "डेयरी:",
    dairyValue: "3000+ भैंसे, 250+ गाय, 30,000+ लीटर दूध प्रतिदिन बेचा जाता है।",
    flourMillsLabel: "आटा मिल्स:",
    flourMillsValue: "अलवर, राजस्थान में स्थित है, जो आटा, तेल, सूजी और अन्य उत्पादों का उत्पादन करता है।",
    foodStoresLabel: "फूड स्टोर और रेस्टोरेंट:",
    foodStoresValue: "दिल्ली और गुड़गांव में कई स्थानों पर।",
    propertiesLabel: "प्रॉपर्टीज:",
    propertiesValue: "विभिन्न स्थानों पर आवासीय संपत्तियां, विला और रिसॉर्ट।",
    downloadTitle: "ब्रोशर डाउनलोड करें",
    downloadDescription: "आप अधिक जानकारी के लिए पूर्ण कंपनी प्रोफ़ाइल डाउनलोड कर सकते हैं।",
    downloadButton: "पीडीएफ डाउनलोड करें",
    investmentTitle: "निवेश और रिटर्न मॉडल",
    joiningParagraph1: "एवीएस डेयरी से जुड़ने के लिए, ₹1,200 का एक बार का सदस्यता शुल्क आवश्यक है, जिसका उपयोग उत्पादों को खरीदने या उनके रेस्टोरेंट में भोजन करने के लिए किया जा सकता है। शामिल होने के बाद, सदस्यों को एक अद्वितीय आईडी और पासवर्ड मिलता है।",
    agreementTitle: "48-महीने का समझौता",
    agreementParagraph: "₹1,00,000 के निवेश के लिए, कंपनी 48 महीने का समझौता प्रदान करती है, जिसमें 3% मासिक रिटर्न मिलता है। इसका मतलब है कि एक निवेशक को चार साल तक हर महीने ₹3,000 मिलते हैं, कुल मिलाकर ₹1,44,000 का रिटर्न मिलता है। समझौते के अंत में, ₹1,00,000 का मूल निवेश भी वापस कर दिया जाता है।",
    returnMethodTitle: "3% रिटर्न कैसे उत्पन्न होता है",
    returnMethodParagraph1: "कंपनी ₹1,00,000 के निवेश का उपयोग एक भैंस और एक बछड़ा खरीदने के लिए करती है। भैंस प्रतिदिन लगभग 10 लीटर दूध का उत्पादन करती है। सदस्य के पास दो विकल्प होते हैं:",
    option1: "प्रतिदिन 1.5 लीटर दूध प्राप्त करें",
    option1Desc: "ताजा दूध सीधे आपके घर पर दिया जाएगा",
    option2: "प्रति माह ₹3,000 प्राप्त करें",
    option2Desc: "दूध के मूल्य के बराबर (1.5 लीटर x 30 दिन)",
    returnMethodParagraph2: "शेष 8.5 लीटर दूध कंपनी द्वारा बेचा जाता है या रेस्टोरेंट में उपयोग किया जाता है, जिससे कंपनी को लाभ होता है।",
    withdrawalPolicyTitle: "निकासी नीति",
    withdrawalPolicy1: "यदि कोई सदस्य 24 महीने से पहले अपना निवेश निकालना चाहता है, तो कुल राशि में से 10% की कटौती की जाएगी।",
    withdrawalPolicy2: "24 महीने पूरे करने के बाद, बिना किसी कटौती के पूरा निवेश निकाला जा सकता है।",
    earlyWithdrawal: "जल्दी निकासी",
    earlyWithdrawalDesc: "24 महीने से पहले निकालने पर 10% कटौती",
    fullWithdrawal: "पूर्ण निकासी",
    fullWithdrawalDesc: "24 महीने पूरे होने के बाद कोई कटौती नहीं",
    requirementsTitle: "आवश्यक दस्तावेज़",
    requirementsDescription: "सदस्य बनने के लिए, निम्नलिखित दस्तावेज़ अनिवार्य हैं:",
    doc1: "आधार कार्ड",
    doc1Desc: "सरकारी आईडी प्रमाण",
    doc2: "पैन कार्ड",
    doc2Desc: "कर पहचान पत्र",
    doc3: "बैंक विवरण",
    doc3Desc: "बैंक का नाम, खाता संख्या, IFSC कोड",
    doc4: "बैंक से जुड़ा मोबाइल नंबर",
    doc4Desc: "सत्यापन उद्देश्यों के लिए",
    doc5: "नामांकित व्यक्ति का विवरण",
    doc5Desc: "नामांकित व्यक्ति का नाम, आयु",
    contactTitle: "संपर्क जानकारी",
    contactDescription: "अधिक जानकारी के लिए, कृपया हमसे संपर्क करें।",
    emailLabel: "ईमेल:",
    emailValue: "avsdairy786@gmail.com",
    phoneLabel: "फ़ोन:",
    phoneValue: "+91-9517173555",
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll('[data-translate-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[lang][key]) {
      // Check if there is an icon inside the element
      const icon = element.querySelector('i');
      if (icon) {
        // If an icon exists, update the text and re-add the icon
        const text = translations[lang][key];
        element.innerHTML = `${icon.outerHTML} ${text}`;
      } else {
        // Otherwise, just update the text content
        element.textContent = translations[lang][key];
      }
    }
  });
  localStorage.setItem('lang', lang);
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hi').addEventListener('click', () => setLanguage('hi'));

// Set initial language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});
