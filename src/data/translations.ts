export type LanguageCode =
  | 'en'
  | 'hi'
  | 'mr'
  | 'gu'
  | 'bn'
  | 'ta'
  | 'te'
  | 'kn'
  | 'ml'
  | 'pa';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം' },
  { code: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
];

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    packages: string;
    about: string;
    contact: string;
    startLearning: string;
    language: string;
    menu: string;
    close: string;
  };
  hero: {
    tagline: string;
    heading: string;
    subheading: string;
    exploreBtn: string;
    aboutBtn: string;
    disclaimerBanner: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
  };
  common: {
    readMore: string;
    viewAll: string;
    getStarted: string;
    contactUs: string;
    faqs: string;
    educationalOnly: string;
    disclaimerTitle: string;
    disclaimerText: string;
    allRightsReserved: string;
    designedBy: string;
  };
  popup: {
    title: string;
    subtitle: string;
    nameLabel: string;
    phoneLabel: string;
    stateLabel: string;
    segmentLabel: string;
    capitalLabel: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
    privacyNote: string;
  };
}

export const translations: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Our Services',
      packages: 'Our Packages',
      about: 'About Us',
      contact: 'Contact Us',
      startLearning: 'Start Learning',
      language: 'Language',
      menu: 'Open Menu',
      close: 'Close Menu',
    },
    hero: {
      tagline: '100% Educational & Compliance-Focused Financial Learning',
      heading: 'Understand the Stock Market. Build Your Market Knowledge.',
      subheading: 'Share Market Expert delivers structured, beginner-to-advanced stock market education based in Navi Mumbai. Learn price action, risk management, and market fundamentals without noise or speculative trading calls.',
      exploreBtn: 'Explore Courses',
      aboutBtn: 'About Our Platform',
      disclaimerBanner: 'Pure stock market education. No stock tips, advisory, or profit guarantees.',
    },
    features: {
      badge: 'Structured Curriculum',
      title: 'What You Will Learn',
      subtitle: 'From core fundamentals to institutional risk management, our structured learning pathways empower you with clear financial knowledge.',
    },
    common: {
      readMore: 'Read Full Guide',
      viewAll: 'View All Resources',
      getStarted: 'Enroll in Learning Plan',
      contactUs: 'Contact Education Desk',
      faqs: 'Frequently Asked Questions',
      educationalOnly: 'Educational purpose only. Securities, charts and examples are for illustration, not a recommendation.',
      disclaimerTitle: 'Regulatory & Risk Awareness Notice',
      disclaimerText: 'Share Market Expert is an educational platform and is NOT registered with SEBI as a Research Analyst or Investment Adviser. Nothing here is investment advice or a recommendation. Securities trading involves substantial risk of loss. Consult a SEBI-registered adviser before investing.',
      allRightsReserved: '© 2026 Share Market Expert. All Rights Reserved.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'Begin Your Market Education',
      subtitle: 'Connect with our educational counselors to choose the right learning module for your experience level.',
      nameLabel: 'Full Name *',
      phoneLabel: 'Mobile Number *',
      stateLabel: 'State / Union Territory',
      segmentLabel: 'Preferred Learning Focus',
      capitalLabel: 'Educational Capital Experience',
      submitBtn: 'Request Educational Syllabus',
      submitting: 'Submitting Request...',
      successTitle: 'Thank You for Reaching Out!',
      successMsg: 'Our academic counselor will get in touch with you shortly with the syllabus overview.',
      privacyNote: 'We strictly protect your privacy. We never offer stock tips, advisory services, or ask for account credentials.',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      services: 'हमारी सेवाएं',
      packages: 'हमारे पैकेज',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
      startLearning: 'सीखना शुरू करें',
      language: 'भाषा',
      menu: 'मेनू खोलें',
      close: 'मेनू बंद करें',
    },
    hero: {
      tagline: '100% शैक्षणिक एवं वित्तीय बाजार अध्ययन मंच',
      heading: 'शेयर बाजार को समझें। अपना बाजार ज्ञान मजबूत बनाएं।',
      subheading: 'शेयर मार्केट एक्सपर्ट नवी मुंबई से संचालित एक संरचित वित्तीय शिक्षा मंच है। बिना किसी भ्रामक टिप्स के प्राइस एक्शन, जोखिम प्रबंधन और बाजार के बुनियादी सिद्धांतों को समझें।',
      exploreBtn: 'पाठ्यक्रम देखें',
      aboutBtn: 'हमारे बारे में जानें',
      disclaimerBanner: 'विशुद्ध रूप से शैक्षणिक मंच। कोई टिप्स, सिफारिश या लाभ की गारंटी नहीं।',
    },
    features: {
      badge: 'संरचित पाठ्यक्रम',
      title: 'आप क्या सीखेंगे',
      subtitle: 'बाजार की बुनियादी बातों से लेकर तकनीकी विश्लेषण और जोखिम नियंत्रण तक का सुव्यवस्थित ज्ञान।',
    },
    common: {
      readMore: 'विस्तार से पढ़ें',
      viewAll: 'सभी संसाधन देखें',
      getStarted: 'शिक्षा योजना चुनें',
      contactUs: 'संपर्क करें',
      faqs: 'अक्सर पूछे जाने वाले प्रश्न',
      educationalOnly: 'केवल शैक्षणिक उद्देश्य हेतु। प्रस्तुत चार्ट व उदाहरण केवल समझाने के लिए हैं।',
      disclaimerTitle: 'वैधानिक एवं जोखिम प्रकटीकरण',
      disclaimerText: 'शेयर मार्केट एक्सपर्ट एक शैक्षणिक मंच है और यह SEBI के साथ रिसर्च एनालिस्ट या इन्वेस्टमेंट एडवाइजर के रूप में पंजीकृत नहीं है। यहां दी गई कोई भी जानकारी निवेश सलाह या सिफारिश नहीं है।',
      allRightsReserved: '© 2026 Share Market Expert. सर्वाधिकार सुरक्षित।',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'अपनी बाजार शिक्षा प्रारंभ करें',
      subtitle: 'अपने स्तर के अनुसार सही पाठ्यक्रम चुनने के लिए हमारे शैक्षणिक परामर्शदाता से जुड़ें।',
      nameLabel: 'पूरा नाम *',
      phoneLabel: 'मोबाइल नंबर *',
      stateLabel: 'राज्य / केंद्र शासित प्रदेश',
      segmentLabel: 'अध्ययन क्षेत्र',
      capitalLabel: 'अध्ययन पूंजी अनुभव',
      submitBtn: 'पाठ्यक्रम विवरण प्राप्त करें',
      submitting: 'अनुरोध भेजा जा रहा है...',
      successTitle: 'संपर्क करने के लिए धन्यवाद!',
      successMsg: 'हमारे काउंसलर जल्द ही आपसे पाठ्यक्रम विवरण साझा करेंगे।',
      privacyNote: 'हम आपकी गोपनीयता का पूर्ण सम्मान करते हैं। हम कभी भी टिप्स या पासवर्ड नहीं मांगते।',
    },
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      services: 'आमच्या सेवा',
      packages: 'आमचे पॅकेजेस',
      about: 'आमच्याबद्दल',
      contact: 'संपर्क करा',
      startLearning: 'शिकायला सुरुवात करा',
      language: 'भाषा',
      menu: 'मेनू उघडा',
      close: 'मेनू बंद करा',
    },
    hero: {
      tagline: '१००% शैक्षणिक आणि विश्वासार्ह शेअर मार्केट शिक्षण',
      heading: 'शेअर बाजार समजून घ्या. आपले बाजार ज्ञान समृद्ध करा.',
      subheading: 'शेअर मार्केट एक्सपर्ट नवी मुंबईतून थेट आणि संरचित शेअर मार्केट शिक्षण प्रदान करते. चार्ट्स, फंडामेंटल्स आणि रिस्क मॅनेजमेंटचे शास्त्रोक्त ज्ञान मिळवा.',
      exploreBtn: 'कोर्सेस पहा',
      aboutBtn: 'आमच्याविषयी अधिक माहिती',
      disclaimerBanner: 'फक्त शैक्षणिक उद्देश. कोणतीही शेअर्सची खरेदी-विक्री शिफारस दिली जात नाही.',
    },
    features: {
      badge: 'पद्धतशीर अभ्यासक्रम',
      title: 'तुम्ही काय शिकाल',
      subtitle: 'पायाभूत संकल्पनांपासून ते प्रगत तांत्रिक विश्लेषणापर्यंत सर्वांगीण मार्गदर्शन.',
    },
    common: {
      readMore: 'अधिक वाचा',
      viewAll: 'सर्व संसाधने पहा',
      getStarted: 'प्रवेश घ्या',
      contactUs: 'आमच्याशी संपर्क साधा',
      faqs: 'वारंवार विचारले जाणारे प्रश्न',
      educationalOnly: 'केवळ शैक्षणिक उद्देशासाठी. दाखवलेली उदाहरणे अभ्यासासाठी आहेत.',
      disclaimerTitle: 'कायदेशीर व जोखीम सूचना',
      disclaimerText: 'शेअर मार्केट एक्सपर्ट हे शैक्षणिक व्यासपीठ असून सेबी (SEBI) कडे रिसर्च अ‍ॅनालिस्ट किंवा इन्व्हेस्टमेंट अ‍ॅडव्हायझर म्हणून नोंदणीकृत नाही. येथे कोणताही गुंतवणुकीचा सल्ला दिला जात नाही.',
      allRightsReserved: '© 2026 Share Market Expert. सर्व हक्क राखीव.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'आपला शैक्षणिक प्रवास सुरू करा',
      subtitle: 'आपल्या गरजेनुसार योग्य अभ्यासक्रम निवडण्यासाठी आमच्या समुपदेशकांशी चर्चा करा.',
      nameLabel: 'पूर्ण नाव *',
      phoneLabel: 'मोबाईल क्रमांक *',
      stateLabel: 'राज्य',
      segmentLabel: 'अभ्यासाचा विषय',
      capitalLabel: 'भांडवल अनुभव',
      submitBtn: 'माहिती मिळवा',
      submitting: 'प्रक्रिया सुरू आहे...',
      successTitle: 'धन्यवाद!',
      successMsg: 'आमचे प्रतिनिधी लवकरच आपल्याशी संपर्क साधतील.',
      privacyNote: 'आम्ही आपल्या गोपनीयतेची काळजी घेतो. आम्ही कधीही टिप्स देत नाही.',
    },
  },
  gu: {
    nav: {
      home: 'હોમ',
      services: 'અમારી સેવાઓ',
      packages: 'અમારા પેકેજ',
      about: 'અમારા વિશે',
      contact: 'સંપર્ક કરો',
      startLearning: 'શીખવાનું શરૂ કરો',
      language: 'ભાષા',
      menu: 'મેનુ ખોલો',
      close: 'મેનુ બંધ કરો',
    },
    hero: {
      tagline: '૧૦૦% શૈક્ષણિક અને વ્યવસ્થિત માર્કેટ લર્નિંગ',
      heading: 'શેર બજારને સમજો. તમારું માર્કેટ જ્ઞાન મજબૂત બનાવો.',
      subheading: 'શેર માર્કેટ એક્સપર્ટ નવી મુંબઈ સ્થિત એક સંપૂર્ણ શૈક્ષણિક પ્લેટફોર્મ છે. કોઈ પણ ખોટી ટિપ્સ વિના પ્રાઇસ એક્શન અને જોખમ વ્યવસ્થાપન શીખો.',
      exploreBtn: 'કોર્સ જુઓ',
      aboutBtn: 'અમારા વિશે',
      disclaimerBanner: 'કેવળ શૈક્ષણિક હેતુ. કોઈ પણ શેરની લે-વેચ ટિપ્સ આપવામાં આવતી નથી.',
    },
    features: {
      badge: 'સંકલિત અભ્યાસક્રમ',
      title: 'તમે શું શીખશો',
      subtitle: 'બેઝિક્સથી લઈને એડવાન્સ ટેકનિકલ એનાલિસિસ સુધીનું સંપૂર્ણ જ્ઞાન.',
    },
    common: {
      readMore: 'વધુ વાંચો',
      viewAll: 'બધા સંસાધનો',
      getStarted: 'શરૂ કરો',
      contactUs: 'સંપર્ક કરો',
      faqs: 'વારંવાર પૂછાતા પ્રશ્નો',
      educationalOnly: 'માત્ર શૈક્ષણિક ઉદ્દેશ માટે. ચાર્ટ્સ અને ઉદાહરણો ફક્ત સમજૂતી માટે છે.',
      disclaimerTitle: 'કાનૂની અને જોખમ સૂચના',
      disclaimerText: 'શેર માર્કેટ એક્સપર્ટ એક શૈક્ષણિક મંચ છે અને SEBI સાથે રજિસ્ટર્ડ રિસર્ચ એનાલિસ્ટ નથી. અહીં કોઈ રોકાણ સલાહ અપાતી નથી.',
      allRightsReserved: '© 2026 Share Market Expert. સર્વાધિકાર સુરક્ષિત.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'તમારું માર્કેટ શિક્ષણ શરૂ કરો',
      subtitle: 'તમારી પસંદગી અનુસાર કોર્સ માહિતી મેળવો.',
      nameLabel: 'પૂરું નામ *',
      phoneLabel: 'મોબાઇલ નંબર *',
      stateLabel: 'રાજ્ય',
      segmentLabel: 'વિષય',
      capitalLabel: 'મૂડી અનુભવ',
      submitBtn: 'વિગત મેળવો',
      submitting: 'મોકલી રહ્યું છે...',
      successTitle: 'આભાર!',
      successMsg: 'અમારા સલાહકાર ટૂંક સમયમાં તમારો સંપર્ક કરશે.',
      privacyNote: 'અમે તમારી અંગત માહિતી સુરક્ષિત રાખીએ છીએ.',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      services: 'আমাদের সেবাসমূহ',
      packages: 'প্যাকেজসমূহ',
      about: 'আমাদের সম্পর্কে',
      contact: 'যোগাযোগ',
      startLearning: 'শেখা শুরু করুন',
      language: 'ভাষা',
      menu: 'মেনু খুলুন',
      close: 'মেনু বন্ধ করুন',
    },
    hero: {
      tagline: '১০০% শিক্ষামূলক ও নির্ভরযোগ্য আর্থিক বাজার শিক্ষা',
      heading: 'শেয়ার বাজার বুঝুন। আপনার বাজার জ্ঞান বৃদ্ধি করুন।',
      subheading: 'শেয়ার মার্কেট এক্সপার্ট নাভি মুম্বাই ভিত্তিক একটি পেশাদার স্টক মার্কেট শিক্ষা প্ল্যাটফর্ম। কোনো ধরণের টিপস ছাড়াই চার্ট এবং ঝুঁকি ব্যবস্থাপনা শিখুন।',
      exploreBtn: 'কোর্সসমূহ দেখুন',
      aboutBtn: 'আমাদের সম্পর্কে',
      disclaimerBanner: 'কেবলমাত্র শিক্ষামূলক উদ্দেশ্যে। কোনো স্টক টিপস বা নিশ্চিত আয়ের দাবি নেই।',
    },
    features: {
      badge: 'পরিকল্পিত পাঠ্যক্রম',
      title: 'আপনি যা শিখবেন',
      subtitle: 'মৌলিক তত্ত্ব থেকে শুরু করে আধুনিক প্রযুক্তিগত বিশ্লেষণ পর্যন্ত স্পষ্ট দিকনির্দেশনা।',
    },
    common: {
      readMore: 'বিস্তারিত পড়ুন',
      viewAll: 'সকল রিসোর্স দেখুন',
      getStarted: 'এনরোল করুন',
      contactUs: 'যোগাযোগ করুন',
      faqs: 'সাধারণ জিজ্ঞাসা',
      educationalOnly: 'কেবলমাত্র শিক্ষামূলক উদ্দেশ্যে। চার্ট ও উদাহরণসমূহ কেবল শিক্ষার জন্য।',
      disclaimerTitle: 'আইনি ও ঝুঁকি বিজ্ঞপ্তি',
      disclaimerText: 'শেয়ার মার্কেট এক্সপার্ট একটি শিক্ষামূলক প্ল্যাটফর্ম এবং এটি সেবি (SEBI) নিবন্ধিত নয়। এখানে কোনো বিনিয়োগের পরামর্শ দেওয়া হয় না।',
      allRightsReserved: '© 2026 Share Market Expert. সর্বস্বত্ব সংরক্ষিত।',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'আপনার বাজার শিক্ষা শুরু করুন',
      subtitle: 'সঠিক কোর্স বেছে নিতে আমাদের সাথে যুক্ত হন।',
      nameLabel: 'সম্পূর্ণ নাম *',
      phoneLabel: 'মোবাইল নম্বর *',
      stateLabel: 'রাজ্য',
      segmentLabel: 'পছন্দের বিষয়',
      capitalLabel: 'পুঁজির অভিজ্ঞতা',
      submitBtn: 'সিলেবাস অনুরোধ করুন',
      submitting: 'জমা হচ্ছে...',
      successTitle: 'ধন্যবাদ!',
      successMsg: 'আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।',
      privacyNote: 'আমরা আপনার তথ্যের পূর্ণ সুরক্ষা নিশ্চিত করি।',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      services: 'எங்கள் சேவைகள்',
      packages: 'திட்டங்கள்',
      about: 'எங்களை பற்றி',
      contact: 'தொடர்பு கொள்ள',
      startLearning: 'கற்க தொடங்குங்கள்',
      language: 'மொழி',
      menu: 'பட்டியலைத் திற',
      close: 'மூடு',
    },
    hero: {
      tagline: '100% கல்வி மற்றும் விழிப்புணர்வு சார்ந்த சந்தை கல்வி',
      heading: 'பங்குச் சந்தையைப் புரிந்து கொள்ளுங்கள். உங்கள் அறிவை வளர்த்துக் கொள்ளுங்கள்.',
      subheading: 'ஷேர் மார்க்கெட் எக்ஸ்பெர்ட் நவி மும்பையிலிருந்து முறையான பங்குச் சந்தை கல்வியை வழங்குகிறது. டிப்ஸ்கள் இன்றி பகுப்பாய்வு மற்றும் இடர் மேலாண்மையைக் கற்றுக்கொள்ளுங்கள்.',
      exploreBtn: 'பாடங்களை பார்க்கவும்',
      aboutBtn: 'எங்களை பற்றி',
      disclaimerBanner: 'முழுக்க முழுக்க கல்வி நோக்கம் மட்டுமே. எந்தவித பங்கு பரிந்துரைகளும் வழங்கப்படுவதில்லை.',
    },
    features: {
      badge: 'கட்டமைக்கப்பட்ட பாடத்திட்டம்',
      title: 'நீங்கள் என்ன கற்றுக்கொள்வீர்கள்',
      subtitle: 'அடிப்படை கோட்பாடுகள் முதல் தொழில்நுட்ப பகுப்பாய்வு வரை தெளிவான வழிகாட்டல்.',
    },
    common: {
      readMore: 'மேலும் படிக்க',
      viewAll: 'அனைத்து வளங்கள்',
      getStarted: 'தொடங்கவும்',
      contactUs: 'தொடர்பு கொள்ள',
      faqs: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      educationalOnly: 'கல்வி நோக்கத்திற்காக மட்டுமே. விளக்கப்படங்கள் வழிகாட்டுதலுக்கு மட்டுமே.',
      disclaimerTitle: 'சட்டரீதியான மற்றும் இடர் அறிவிப்பு',
      disclaimerText: 'ஷேர் மார்க்கெட் எக்ஸ்பெர்ட் ஒரு கல்வி தளம் மட்டுமே; இது SEBI-யில் பதிவு செய்யப்படவில்லை. முதலீட்டு ஆலோசனைகள் எதுவும் வழங்கப்படுவதில்லை.',
      allRightsReserved: '© 2026 Share Market Expert. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'உங்கள் சந்தைக் கல்வியைத் தொடங்குங்கள்',
      subtitle: 'உங்கள் நிலைக்கு ஏற்ற பாடத்திட்டத்தை தேர்வு செய்ய ஆலோசனை பெறுங்கள்.',
      nameLabel: 'முழு பெயர் *',
      phoneLabel: 'அலைபேசி எண் *',
      stateLabel: 'மாநிலம்',
      segmentLabel: 'கற்க விரும்பும் பிரிவு',
      capitalLabel: 'முதலீட்டு அனுபவம்',
      submitBtn: 'விவரம் கோருக',
      submitting: 'பதிவேற்றப்படுகிறது...',
      successTitle: 'நன்றி!',
      successMsg: 'எங்கள் ஆலோசகர் விரைவில் உங்களைத் தொடர்புகொள்வார்.',
      privacyNote: 'உங்கள் தகவல்கள் பாதுகாப்பானவை. நாங்கள் டிப்ஸ்கள் வழங்குவதில்லை.',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      services: 'మా సేవలు',
      packages: 'మా ప్యాకేజీలు',
      about: 'మా గురించి',
      contact: 'సంప్రదించండి',
      startLearning: 'నేర్చుకోవడం ప్రారంభించండి',
      language: 'భాష',
      menu: 'మెనూ తెరవండి',
      close: 'మూసివేయండి',
    },
    hero: {
      tagline: '100% విద్యాపరమైన మరియు విశ్వసనీయ మార్కెట్ లెర్నింగ్',
      heading: 'స్టాక్ మార్కెట్‌ను అర్థం చేసుకోండి. మార్కెట్ పరిజ్ఞానాన్ని పెంపొందించుకోండి.',
      subheading: 'షేర్ మార్కెట్ ఎక్స్‌పర్ట్ నవీ ముంబై కేంద్రంగా నాణ్యమైన స్టాక్ మార్కెట్ విద్యను అందిస్తుంది. ఎటువంటి తప్పుడు టిప్స్ లేకుండా ప్రైస్ యాక్షన్ మరియు రిస్క్ మేనేజ్‌మెంట్ నేర్చుకోండి.',
      exploreBtn: 'కోర్సులు చూడండి',
      aboutBtn: 'మా గురించి',
      disclaimerBanner: 'కేవలం విద్యా ప్రయోజనాల కోసం మాత్రమే. ఎలాంటి స్టాక్ టిప్స్ లేదా లాభ హామీలు ఇవ్వబడవు.',
    },
    features: {
      badge: 'నిర్మాణాత్మక పాఠ్యాంశాలు',
      title: 'మీరు ఏమి నేర్చుకుంటారు',
      subtitle: 'ప్రాథమిక అంశాల నుండి అధునాతన సాంకేతిక విశ్లేషణ వరకు సమగ్ర విద్యా మార్గం.',
    },
    common: {
      readMore: 'మరింత చదవండి',
      viewAll: 'అన్ని వనరులు',
      getStarted: 'చేరండి',
      contactUs: 'సంప్రదించండి',
      faqs: 'తరచుగా అడిగే ప్రశ్నలు',
      educationalOnly: 'విద్యా ప్రయోజనం కోసం మాత్రమే. చార్టులు మరియు ఉదాహరణలు అవగాహన కొరకు మాత్రమే.',
      disclaimerTitle: 'చట్టపరమైన మరియు రిస్క్ ప్రకటన',
      disclaimerText: 'షేర్ మార్కెట్ ఎక్స్‌పర్ట్ ఒక విద్యా వేదిక మాత్రమే, ఇది సెబీ (SEBI) లో నమోదిత పరిశోధనా సంస్థ కాదు. ఇక్కడ ఎలాంటి పెట్టుబడి సలహాలు ఇవ్వబడవు.',
      allRightsReserved: '© 2026 Share Market Expert. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'మీ మార్కెట్ విద్యను ప్రారంభించండి',
      subtitle: 'మీకు తగిన కోర్సును ఎంచుకోవడానికి మా సలహాదారులను సంప్రదించండి.',
      nameLabel: 'పూర్తి పేరు *',
      phoneLabel: 'మొబైల్ నంబర్ *',
      stateLabel: 'రాష్ట్రం',
      segmentLabel: 'అధ్యయన విభాగం',
      capitalLabel: 'మూలధన అనుభవం',
      submitBtn: 'వివరాలు పొందండి',
      submitting: 'సమర్పిస్తోంది...',
      successTitle: 'ధన్యవాదాలు!',
      successMsg: 'మా ప్రతినిధి త్వరలోనే మిమ్మల్ని సంప్రదిస్తారు.',
      privacyNote: 'మీ సమాచారం గోప్యంగా ఉంచబడుతుంది. మేము టిప్స్ ఇవ్వము.',
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      services: 'ನಮ್ಮ ಸೇವೆಗಳು',
      packages: 'ಪ್ಯಾಕೇಜ್‌ಗಳು',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      startLearning: 'ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ',
      language: 'ಭಾಷೆ',
      menu: 'ಮೆನು ತೆರೆಯಿರಿ',
      close: 'ಮುಚ್ಚಿ',
    },
    hero: {
      tagline: '೧೦೦% ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಪಾರದರ್ಶಕ ಮಾರುಕಟ್ಟೆ ಕಲಿಕೆ',
      heading: 'ಷೇರು ಮಾರುಕಟ್ಟೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಹೆಚ್ಚಿಸಿ.',
      subheading: 'ಷೇರ್ ಮಾರ್ಕೆಟ್ ಎಕ್ಸ್‌ಪರ್ಟ್ ನವಿ ಮುಂಬೈನಿಂದ ಶಿಸ್ತುಬದ್ಧ ಷೇರು ಮಾರುಕಟ್ಟೆ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಯಾವುದೇ ಟಿಪ್ಸ್ ಇಲ್ಲದೆ ಚಾರ್ಟ್ ಹಾಗೂ ರಿಸ್ಕ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಕಲಿಯಿರಿ.',
      exploreBtn: 'ಕೋರ್ಸ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
      aboutBtn: 'ನಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ',
      disclaimerBanner: 'ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ. ಯಾವುದೇ ಷೇರು ಶಿಫಾರಸುಗಳನ್ನು ನೀಡಲಾಗುವುದಿಲ್ಲ.',
    },
    features: {
      badge: 'ರಚನಾತ್ಮಕ ಪಠ್ಯಕ್ರಮ',
      title: 'ನೀವು ಏನು ಕಲಿಯುವಿರಿ',
      subtitle: 'ಮೂಲಭೂತ ವಿಷಯಗಳಿಂದ ಹಿಡಿದು ಸುಧಾರಿತ ತಾಂತ್ರಿಕ ವಿಶ್ಲೇಷಣೆಯವರೆಗಿನ ಸಂಪೂರ್ಣ ಜ್ಞಾನ.',
    },
    common: {
      readMore: 'ಮತ್ತಷ್ಟು ಓದಿ',
      viewAll: 'ಎಲ್ಲಾ ಸಂಪನ್ಮೂಲಗಳು',
      getStarted: 'ಪ್ರವೇಶ ಪಡೆಯಿರಿ',
      contactUs: 'ಸಂಪರ್ಕಿಸಿ',
      faqs: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು',
      educationalOnly: 'ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಚಾರ್ಟ್‌ಗಳು ಕೇವಲ ವಿವರಣೆಗಾಗಿವೆ.',
      disclaimerTitle: 'ಕಾನೂನು ಮತ್ತು ಅಪಾಯದ ಪ್ರಕಟಣೆ',
      disclaimerText: 'ಷೇರ್ ಮಾರ್ಕೆಟ್ ಎಕ್ಸ್‌ಪರ್ಟ್ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆಯಾಗಿದ್ದು SEBI ಯಲ್ಲಿ ನೋಂದಾಯಿತ ಸಲಹಾ ಸಂಸ್ಥೆಯಲ್ಲ. ಇಲ್ಲಿ ಯಾವುದೇ ಹೂಡಿಕೆ ಸಲಹೆ ನೀಡಲಾಗುವುದಿಲ್ಲ.',
      allRightsReserved: '© 2026 Share Market Expert. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆ ಶಿಕ್ಷಣ ಆರಂಭಿಸಿ',
      subtitle: 'ಸರಿಯಾದ ಕಲಿಕಾ ಮಾರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ.',
      nameLabel: 'ಪೂರ್ಣ ಹೆಸರು *',
      phoneLabel: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *',
      stateLabel: 'ರಾಜ್ಯ',
      segmentLabel: 'ಕಲಿಕೆಯ ವಿಷಯ',
      capitalLabel: 'ಬಂಡವಾಳ ಅನುಭವ',
      submitBtn: 'ಮಾಹಿತಿ ವಿನಂತಿಸಿ',
      submitting: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
      successTitle: 'ಧನ್ಯವಾದಗಳು!',
      successMsg: 'ನಮ್ಮ ಪ್ರತಿನಿಧಿಗಳು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
      privacyNote: 'ನಿಮ್ಮ ಮಾಹಿತಿಯು ಸುರಕ್ಷಿತವಾಗಿದೆ. ನಾವು ಟಿಪ್ಸ್ ನೀಡುವುದಿಲ್ಲ.',
    },
  },
  ml: {
    nav: {
      home: 'ഹോം',
      services: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
      packages: 'പാക്കേജുകൾ',
      about: 'ഞങ്ങളെക്കുറിച്ച്',
      contact: 'ബന്ധപ്പെടുക',
      startLearning: 'പഠനം ആരംഭിക്കൂ',
      language: 'ഭാഷ',
      menu: 'മെനു തുറക്കുക',
      close: 'അടയ്ക്കുക',
    },
    hero: {
      tagline: '100% വിദ്യാഭ്യാസപരമായ ഓഹരി വിപണി പഠനം',
      heading: 'ഓഹരി വിപണിയെ മനസ്സിലാക്കൂ. വിപണി അറിവ് വളർത്തൂ.',
      subheading: 'ഷെയർ മാർക്കറ്റ് എക്സ്പെർട്ട് നവി മുംബൈയിൽ നിന്നുള്ള പ്രൊഫഷണൽ സാമ്പത്തിക വിദ്യാഭ്യാസ പ്ലാറ്റ്‌ഫോമാണ്. തെറ്റായ ട്രേഡിംഗ് ടിപ്പുകളില്ലാതെ ശാസ്ത്രീയമായി വിപണി പഠിക്കൂ.',
      exploreBtn: 'കോഴ്സുകൾ കാണുക',
      aboutBtn: 'ഞങ്ങളെക്കുറിച്ച്',
      disclaimerBanner: 'പൂർണ്ണമായും വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് മാത്രം. ഓഹരി വാങ്ങൽ/വിൽക്കൽ ടിപ്പുകൾ നൽകുന്നില്ല.',
    },
    features: {
      badge: 'ചിട്ടയായ സിലബസ്',
      title: 'നിങ്ങൾ എന്താണ് പഠിക്കുന്നത്',
      subtitle: 'അടിസ്ഥാന കാര്യങ്ങൾ മുതൽ സാങ്കേതിക വിശകലനം വരെയുള്ള കൃത്യമായ പഠനരീതി.',
    },
    common: {
      readMore: 'കൂടുതൽ വായിക്കുക',
      viewAll: 'എല്ലാ വിഭവങ്ങളും',
      getStarted: 'ചേരുക',
      contactUs: 'ബന്ധപ്പെടുക',
      faqs: 'പതിവുചോദ്യങ്ങൾ',
      educationalOnly: 'വിദ്യാഭ്യാസപരമായ ആവശ്യങ്ങൾക്ക് മാത്രം. ചാർട്ടുകൾ പഠനത്തിനായി നൽകിയിട്ടുള്ളതാണ്.',
      disclaimerTitle: 'നിയമപരമായ അറിയിപ്പ്',
      disclaimerText: 'ഷെയർ മാർക്കറ്റ് എക്സ്പെർട്ട് ഒരു വിദ്യാഭ്യാസ വേദി മാത്രമാണ്. SEBI രജിസ്റ്റർ ചെയ്ത സ്ഥാപനമല്ല. നിക്ഷേപ ഉപദേശങ്ങൾ നൽകുന്നില്ല.',
      allRightsReserved: '© 2026 Share Market Expert. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'വിപണി പഠനം ആരംഭിക്കൂ',
      subtitle: 'നിങ്ങൾക്ക് അനുയോജ്യമായ കോഴ്സ് തിരഞ്ഞെടുക്കാൻ ഞങ്ങളുടെ കൗൺസിലറുമായി ബന്ധപ്പെടൂ.',
      nameLabel: 'പൂർണ്ണ നാമം *',
      phoneLabel: 'മൊബൈൽ നമ്പർ *',
      stateLabel: 'സംസ്ഥാനം',
      segmentLabel: 'പഠന വിഷയം',
      capitalLabel: 'മുതൽമുടക്ക് പരിചയം',
      submitBtn: 'വിവരങ്ങൾ നൽകുക',
      submitting: 'സമർപ്പിക്കുന്നു...',
      successTitle: 'നന്ദി!',
      successMsg: 'ഞങ്ങളുടെ പ്രതിനിധി ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.',
      privacyNote: 'നിങ്ങളുടെ വിവരങ്ങൾ സുരക്ഷിതമാണ്. ഞങ്ങൾ ടിപ്പുകൾ നൽകാറില്ല.',
    },
  },
  pa: {
    nav: {
      home: 'ਮੁੱਖ ਪੰਨਾ',
      services: 'ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ',
      packages: 'ਸਾਡੇ ਪੈਕੇਜ',
      about: 'ਸਾਡੇ ਬਾਰੇ',
      contact: 'ਸੰਪਰਕ ਕਰੋ',
      startLearning: 'ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ',
      language: 'ਭਾਸ਼ਾ',
      menu: 'ਮੀਨੂ ਖੋਲ੍ਹੋ',
      close: 'ਮੀਨੂ ਬੰਦ ਕਰੋ',
    },
    hero: {
      tagline: '100% ਸਿੱਖਿਆ ਅਤੇ ਵਿੱਤੀ ਮਾਰਕੀਟ ਸਿਖਲਾਈ',
      heading: 'ਸ਼ੇਅਰ ਬਾਜ਼ਾਰ ਨੂੰ ਸਮਝੋ। ਆਪਣਾ ਮਾਰਕੀਟ ਗਿਆਨ ਵਧਾਓ।',
      subheading: 'ਸ਼ੇਅਰ ਮਾਰਕੀਟ ਐਕਸਪਰਟ ਨਵੀਂ ਮੁੰਬਈ ਵੱਲੋਂ ਇੱਕ ਭਰੋਸੇਯੋਗ ਵਿੱਤੀ ਸਿੱਖਿਆ ਪਲੇਟਫਾਰਮ ਹੈ। ਬਿਨਾਂ ਕਿਸੇ ਟਿਪਸ ਦੇ ਪ੍ਰਾਈਸ ਐਕਸ਼ਨ ਅਤੇ ਜੋਖਮ ਪ੍ਰਬੰਧਨ ਸਿੱਖੋ।',
      exploreBtn: 'ਕੋਰਸ ਦੇਖੋ',
      aboutBtn: 'ਸਾਡੇ ਬਾਰੇ ਜਾਣੋ',
      disclaimerBanner: 'ਸਿਰਫ਼ ਵਿਦਿਅਕ ਉਦੇਸ਼ਾਂ ਲਈ। ਕੋਈ ਸ਼ੇਅਰ ਖਰੀਦਣ ਜਾਂ ਵੇਚਣ ਦੀ ਸਲਾਹ ਨਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ।',
    },
    features: {
      badge: 'ਸੁਚੱਜਾ ਸਿਲੇਬਸ',
      title: 'ਤੁਸੀਂ ਕੀ ਸਿੱਖੋਗੇ',
      subtitle: 'ਮੁੱਢਲੇ ਨਿਯਮਾਂ ਤੋਂ ਲੈ ਕੇ ਤਕਨੀਕੀ ਵਿਸ਼ਲੇਸ਼ਣ ਤੱਕ ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ।',
    },
    common: {
      readMore: 'ਹੋਰ ਪੜ੍ਹੋ',
      viewAll: 'ਸਾਰੇ ਵਸੀਲੇ',
      getStarted: 'ਸ਼ੁਰੂ ਕਰੋ',
      contactUs: 'ਸੰਪਰਕ ਕਰੋ',
      faqs: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ',
      educationalOnly: 'ਸਿਰਫ਼ ਵਿਦਿਅਕ ਉਦੇਸ਼ ਲਈ। ਚਾਰਟ ਅਤੇ ਉਦਾਹਰਣਾਂ ਕੇਵਲ ਸਮਝਾਉਣ ਲਈ ਹਨ।',
      disclaimerTitle: 'ਕਾਨੂੰਨੀ ਅਤੇ ਜੋਖਮ ਸੂਚਨਾ',
      disclaimerText: 'ਸ਼ੇਅਰ ਮਾਰਕੀਟ ਐਕਸਪਰਟ ਇੱਕ ਵਿਦਿਅਕ ਮੰਚ ਹੈ ਅਤੇ ਇਹ SEBI ਕੋਲ ਰਜਿਸਟਰਡ ਨਹੀਂ ਹੈ। ਇੱਥੇ ਕੋਈ ਨਿਵੇਸ਼ ਸਲਾਹ ਨਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ।',
      allRightsReserved: '© 2026 Share Market Expert. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
      designedBy: 'Designed by Noorweb',
    },
    popup: {
      title: 'ਆਪਣੀ ਮਾਰਕੀਟ ਸਿੱਖਿਆ ਸ਼ੁਰੂ ਕਰੋ',
      subtitle: 'ਆਪਣੇ ਲਈ ਸਹੀ ਕੋਰਸ ਚੁਣਨ ਲਈ ਸਾਡੇ ਨਾਲ ਜੁੜੋ।',
      nameLabel: 'ਪੂਰਾ ਨਾਮ *',
      phoneLabel: 'ਮੋਬਾਈਲ ਨੰਬਰ *',
      stateLabel: 'ਰਾਜ',
      segmentLabel: 'ਅਧਿਐਨ ਦਾ ਵਿਸ਼ਾ',
      capitalLabel: 'ਪੂੰਜੀ ਦਾ ਤਜਰਬਾ',
      submitBtn: 'ਜਾਣਕਾਰੀ ਮੰਗੋ',
      submitting: 'ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...',
      successTitle: 'ਧੰਨਵਾਦ!',
      successMsg: 'ਸਾਡੇ ਪ੍ਰਤੀਨਿਧੀ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਰਾਬਤਾ ਕਾਇਮ ਕਰਨਗੇ।',
      privacyNote: 'ਤੁਹਾਡਾ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਹੈ। ਅਸੀਂ ਕਦੇ ਵੀ ਟਿਪਸ ਨਹੀਂ ਦਿੰਦੇ।',
    },
  },
};
