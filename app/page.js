"use client";

import { useEffect, useState } from "react";

const copy = {
  hi: {
    brandSub: "लर्निंग इनिशिएटिव",
    nav: ["परिचय", "प्रोग्राम", "प्रतियोगिता", "घोषणाएं", "सवाल-जवाब", "संपर्क"],
    navIds: ["about", "programs", "competitions", "announcements", "faq", "contact"],
    registerNow: "रजिस्टर करें",
    langLabel: "भाषा",
    heroEyebrow: "कक्षा 1 से 10 तक ट्यूशन + स्किल डेवलपमेंट",
    heroTitle: "बेहतर पढ़ाई, बेहतर आत्मविश्वास",
    heroText:
      "Scholars Space आपके शहर में पढ़ाई, बोलने की कला, प्रतियोगिताओं और समग्र विकास के लिए मजबूत सहयोग देता है।",
    heroBadges: ["स्मार्ट बोर्ड (AI Powered)", "वर्चुअल स्टडी (SenseXR)", "ब्रेन गेम्स + फिजिकल फन", "पब्लिक स्पीकिंग + डिबेट"],
    heroMeta: ["योगा प्रैक्टिस + हेल्दी डाइट नॉलेज", "सोशल और साइंटिफिक इनपुट", "IELTS और मिलिट्री स्कूल के लिए स्पेशल फोकस"],
    activityEyebrow: "हम क्या सिखाते हैं",
    activityTitle: "एक्टिविटी, गेम्स और साइंस के साथ सीखना",
    activityShowcase: [
      ["/images/yoga-preschoolers.jpg", "योगा और एक्टिविटी क्लब", "योगा, मूवमेंट और समूह गतिविधियों से अनुशासन और आत्मविश्वास बढ़ता है।"],
      ["/images/kids-classroom-group.jpg", "क्लासरूम ग्रुप लर्निंग", "ग्रुप लर्निंग और क्लासरूम एंगेजमेंट से कॉन्सेप्ट और भागीदारी मजबूत होती है।"],
      ["/images/kids-science-lab-group.jpg", "साइंस लैब", "हैंड्स-ऑन साइंस और मॉडल-आधारित सीखने से कॉन्सेप्ट स्पष्ट होते हैं।"]
    ],
    ctaPrimary: "रजिस्ट्रेशन शुरू करें",
    ctaSecondary: "प्रोग्राम देखें",
    admissionsTitle: "मुख्य सेवाएँ",
    admissionsText: "कक्षा 1 से 10 तक विद्यार्थियों के लिए प्रमुख सर्विस मॉड्यूल।",
    admissionsList: [
      "अत्याधुनिक तकनीक से अध्यापन",
      "स्मार्ट बोर्ड (AI Powered)",
      "वर्चुअल स्टडी (SenseXR)",
      "ब्रेन गेम्स और फिजिकल फन एक्टिविटी",
      "योगा प्रैक्टिस और हेल्दी डाइट नॉलेज",
      "पब्लिक स्पीकिंग और डिबेट्स",
      "सोशल और साइंटिफिक इनपुट",
      "IELTS और मिलिट्री स्कूल पर स्पेशल फोकस"
    ],
    innovationCards: [
      ["/images/kids-classroom-group.jpg", "स्मार्ट क्लासरूम में समूह विद्यार्थी", "AI स्मार्ट क्लासरूम"],
      ["/images/speech-debate-final.png", "माइक के साथ स्पीच और डिबेट प्रैक्टिस", "स्पीच और डिबेट लैब"]
    ],
    reserveSeat: "अपनी सीट रिजर्व करें",
    aboutEyebrow: "इस पहल के बारे में",
    aboutTitle: "हमारे शहर के लिए एक मजबूत अकादमिक प्लेटफ़ॉर्म",
    aboutText1:
      "Scholars Space उन अभिभावकों और विद्यार्थियों के लिए है जो सामान्य ट्यूशन से आगे बढ़कर संवाद, आत्मविश्वास और अनुशासन चाहते हैं।",
    aboutText2:
      "स्थानीय पहुंच और प्रोफेशनल स्टैंडर्ड्स के साथ विद्यार्थियों को पूरे शैक्षणिक वर्ष में लगातार विकास का सहयोग मिलता है।",
    programEyebrow: "उपलब्ध प्रोग्राम",
    programTitle: "बैनर आधारित सर्विस ट्रैक (कक्षा 1 से 10)",
    programs: [
      ["स्मार्ट क्लासरूम और वर्चुअल स्टडी", "AI-सक्षम स्मार्ट बोर्ड और SenseXR आधारित कॉन्सेप्ट विज़ुअलाइजेशन।"],
      ["ब्रेन गेम्स + फिजिकल फन", "लर्निंग के साथ एक्टिविटी, रिफ्लेक्स और कॉग्निटिव विकास।"],
      ["योगा, हेल्दी डाइट और पर्सनैलिटी ग्रोथ", "दैनिक अनुशासन, स्वास्थ्य जागरूकता और आत्मविश्वास विकास।"],
      ["पब्लिक स्पीकिंग, डिबेट और करियर फोकस", "स्पीकिंग स्किल्स के साथ IELTS और मिलिट्री स्कूल तैयारी सपोर्ट।"]
    ],
    compEyebrow: "विद्यार्थी प्रतियोगिताएं",
    compTitle: "अकादमिक और कम्युनिकेशन गतिविधियां",
    competitions: ["डिबेट चैलेंज", "निबंध लेखन प्रतियोगिता", "टाउन क्विज लीग", "स्पीच और एलोक्यूशन", "साइंस कॉन्सेप्ट शोकेस", "जनरल नॉलेज स्प्रिंट"],
    regEyebrow: "रजिस्ट्रेशन प्रक्रिया",
    regTitle: "अभिभावकों और विद्यार्थियों के लिए आसान चरण",
    regSteps: [
      ["बेसिक डिटेल भरें", "स्टूडेंट और अभिभावक की जानकारी फॉर्म में भरें।"],
      ["प्रोग्राम ट्रैक चुनें", "कक्षा स्तर के अनुसार मॉड्यूल चुनें।"],
      ["कन्फर्मेशन कॉल", "टीम शेड्यूल और बैच डिटेल कन्फर्म करेगी।"],
      ["पेमेंट पूरा करें (फेज 2)", "ऑनलाइन पेमेंट अगले फेज में आएगा।"]
    ],
    regFormTitle: "स्टूडेंट रजिस्ट्रेशन (फ्रंटएंड मॉकअप)",
    studentName: "स्टूडेंट का पूरा नाम",
    parentName: "अभिभावक का नाम",
    classLabel: "कक्षा",
    selectClass: "कक्षा चुनें",
    classOptions: ["कक्षा 1-4", "कक्षा 5-7", "कक्षा 8-10"],
    mobileLabel: "मोबाइल नंबर",
    programLabel: "रुचि वाला प्रोग्राम",
    selectProgram: "प्रोग्राम चुनें",
    programOptions: ["स्मार्ट बोर्ड + वर्चुअल स्टडी", "ब्रेन गेम्स + फिजिकल एक्टिविटी", "पब्लिक स्पीकिंग + डिबेट", "IELTS/मिलिट्री फोकस ट्रैक"],
    submitReg: "रजिस्ट्रेशन जमा करें",
    payLater: "ऑनलाइन पेमेंट (अगले फेज में)",
    trustEyebrow: "परिवार हम पर भरोसा क्यों करते हैं",
    trustTitle: "पारदर्शिता, अनुशासन और स्थानीय जिम्मेदारी",
    trustPoints: [
      ["प्रमाणित अकादमिक मेंटर", "अनुभवी शिक्षक और प्रशिक्षित फेसिलिटेटर प्रोग्राम गाइड करते हैं।"],
      ["अभिभावक संवाद", "नियमित अपडेट और स्पष्ट शेड्यूल परिवारों को भरोसा देते हैं।"],
      ["परिणाम-केंद्रित गतिविधियां", "विद्यार्थी कम्युनिकेशन, आत्मविश्वास और अनुशासन में सुधार करते हैं।"]
    ],
    testimonialsEyebrow: "प्रशंसापत्र",
    testimonialTitle: "अभिभावकों और विद्यार्थियों की राय",
    testimonialPrev: "पिछला",
    testimonialNext: "अगला",
    testimonials: [
      ["“मेरी बेटी अब स्पीकिंग प्रतियोगिताओं में बहुत आत्मविश्वासी हो गई है।”", "- अभिभावक, कक्षा 8 विद्यार्थी"],
      ["“क्विज कोचिंग व्यवस्थित और बहुत प्रेरक रही।”", "- विद्यार्थी, कक्षा 10"],
      ["“कम्युनिकेशन साफ है और पूरा प्रोसेस भरोसेमंद लगता है।”", "- अभिभावक, कक्षा 6 विद्यार्थी"]
    ],
    galleryEyebrow: "गैलरी",
    galleryTitle: "वर्कशॉप और प्रतियोगिता के पल",
    galleryImages: [
      ["/images/gallery-preprimary-1.jpg", "समूह गतिविधि में छोटे विद्यार्थी"],
      ["/images/gallery-preprimary-2.jpg", "एक्टिविटी-आधारित क्लासरूम गेम सत्र"],
      ["/images/yoga-preschoolers.jpg", "योग और वेलनेस गतिविधि में विद्यार्थी"],
      ["/images/kids-science-lab-group.jpg", "साइंस एक्टिविटी में विद्यार्थी"]
    ],
    announcementEyebrow: "घोषणाएं और परिणाम",
    announcementTitle: "अभिभावकों और विद्यार्थियों के लिए ताजा अपडेट",
    announcements: [
      ["टाउन क्विज लीग परिणाम जारी", "जूनियर और सीनियर कैटेगरी के परिणाम उपलब्ध हैं।", "रिजल्ट PDF देखें (प्लेसहोल्डर)", "#"],
      ["नया डिबेट बैच 15 जून से शुरू", "कक्षा 8 से 10 के लिए सीमित सीटें उपलब्ध हैं।", "अगले बैच के लिए रजिस्टर करें", "#register"],
      ["निबंध प्रतियोगिता का विषय जारी", "इस महीने का विषय: विद्यार्थी अपने शहर को बेहतर बनाने में कैसे योगदान दें।", "थीम ब्रीफ डाउनलोड करें (प्लेसहोल्डर)", "#"]
    ],
    faqEyebrow: "अक्सर पूछे जाने वाले सवाल",
    faqTitle: "अभिभावकों के सामान्य सवाल",
    faqs: [
      ["क्या यह सिर्फ टॉपर्स के लिए है?", "नहीं। प्रोग्राम सभी प्रेरित विद्यार्थियों के लिए हैं।"],
      ["सेशन कितनी बार होते हैं?", "अधिकतर ट्रैक वीकेंड में चलते हैं।"],
      ["क्या अभिभावकों को प्रोग्रेस अपडेट मिलते हैं?", "हाँ, हर साइकिल के बाद अपडेट शेयर होते हैं।"],
      ["क्या ऑनलाइन पेमेंट अभी उपलब्ध है?", "ऑनलाइन पेमेंट फेज 2 में सक्षम किया जाएगा।"]
    ],
    contactEyebrow: "संपर्क",
    contactTitle: "संपर्क करें",
    contactText: "Scholars Space लर्निंग सेंटर, मेन रोड, आपका शहर, भारत",
    phoneLabel: "फोन",
    emailLabel: "ईमेल",
    hoursLabel: "समय",
    hoursText: "सोमवार से शनिवार, सुबह 9:00 बजे से शाम 7:00 बजे तक",
    contactFormTitle: "पूछताछ भेजें",
    fullName: "पूरा नाम",
    msgLabel: "संदेश",
    mobileContactLabel: "मोबाइल नंबर",
    submitPlaceholder: "कक्षा, क्षेत्र और रुचि लिखें...",
    send: "मैसेज भेजें",
    appEyebrow: "भविष्य विस्तार",
    appTitle: "Scholars Space एंड्रॉयड ऐप जल्द आ रहा है",
    appText: "आने वाले फेज में अभिभावकों को उपस्थिति, नोटिफिकेशन और स्कोरकार्ड एक ही जगह मिलेंगे।",
    appBtn: "एंड्रॉयड ऐप - फेज 2 में",
    legalTitle: "कानूनी जानकारी",
    legalLinks: ["प्राइवेसी पॉलिसी (प्लेसहोल्डर)", "नियम और शर्तें (प्लेसहोल्डर)", "रिफंड पॉलिसी (प्लेसहोल्डर)"],
    quickTitle: "क्विक लिंक",
    quickLinks: [
      ["रजिस्ट्रेशन", "#register"],
      ["परिणाम", "#announcements"],
      ["सवाल-जवाब", "#faq"]
    ],
    socialTitle: "सोशल",
    socialLinks: ["फेसबुक (प्लेसहोल्डर)", "इंस्टाग्राम (प्लेसहोल्डर)", "यूट्यूब (प्लेसहोल्डर)"],
    footerBrand: "Scholars Space",
    footerBrandText: "स्कूल विद्यार्थियों के विकास और अकादमिक गतिविधियों के लिए भरोसेमंद स्थानीय प्लेटफ़ॉर्म।",
    footer: "© 2026 Scholars Space. All rights reserved."
  },
  en: {
    brandSub: "Learning Initiative",
    nav: ["About", "Programs", "Competitions", "Announcements", "FAQ", "Contact"],
    navIds: ["about", "programs", "competitions", "announcements", "faq", "contact"],
    registerNow: "Register Now",
    langLabel: "Language",
    heroEyebrow: "Tuition + Skill Development For Classes 1 to 10",
    heroTitle: "Better Learning, Better Confidence For Your Child",
    heroText:
      "Scholars Space gives simple and strong support for studies, speaking skills, competitions, and overall growth in our town.",
    heroBadges: ["Smart Board (AI Powered)", "Virtual Study (SenseXR)", "Brain Games + Physical Fun", "Public Speaking + Debate"],
    heroMeta: ["Yoga Practice + Healthy Diet Knowledge", "Social and Scientific Input", "Special Focus for IELTS and Military School"],
    activityEyebrow: "What We Deliver",
    activityTitle: "Learning Through Activities, Games, and Science",
    activityShowcase: [
      ["/images/yoga-preschoolers.jpg", "Yoga & Activity Club", "Yoga and movement-based group sessions to improve confidence and discipline."],
      ["/images/kids-classroom-group.jpg", "Classroom Group Learning", "Strong classroom engagement and group participation for better concept clarity."],
      ["/images/kids-science-lab-group.jpg", "Science Lab", "Hands-on science experiments and model-based learning for clear concepts."]
    ],
    ctaPrimary: "Start Registration",
    ctaSecondary: "Explore Programs",
    admissionsTitle: "Core Services",
    admissionsText: "Key service modules for students from Class 1 to 10.",
    admissionsList: [
      "Advanced technology-enabled teaching",
      "Smart Board (AI Powered)",
      "Virtual Study (SenseXR)",
      "Brain games and physical fun activities",
      "Yoga practice and healthy diet knowledge",
      "Public speaking and debates",
      "Social and scientific input",
      "Special focus on IELTS and Military School preparation"
    ],
    innovationCards: [
      ["/images/kids-classroom-group.jpg", "Group students in smart classroom", "AI Smart Classroom"],
      ["/images/speech-debate-final.png", "Speech and debate practice with microphone", "Speech & Debate Lab"]
    ],
    reserveSeat: "Reserve Your Seat",
    aboutEyebrow: "About The Initiative",
    aboutTitle: "A Serious Academic Development Platform for Our Town",
    aboutText1:
      "Scholars Space is designed for parents and students who want more than regular tuition, with communication, confidence, and discipline.",
    aboutText2:
      "Our approach combines local accessibility with professional standards for safe and meaningful student growth all year.",
    programEyebrow: "Programs Offered",
    programTitle: "Banner-Aligned Service Tracks (Class 1 to 10)",
    programs: [
      ["Smart Classroom and Virtual Study", "AI-enabled board learning and SenseXR-supported concept visualization."],
      ["Brain Games + Physical Fun", "Balanced cognitive and activity-based growth for school students."],
      ["Yoga, Healthy Diet and Personality Growth", "Regular discipline, wellness habits, and confidence building."],
      ["Public Speaking, Debate and Career Focus", "Communication training with IELTS and Military School preparation support."]
    ],
    compEyebrow: "Student Competitions",
    compTitle: "Academic & Communication Activities",
    competitions: ["Debate Challenge", "Essay Writing Contest", "Town Quiz League", "Speech and Elocution", "Science Concept Showcase", "General Knowledge Sprint"],
    regEyebrow: "Registration Process",
    regTitle: "Simple Steps for Parents and Students",
    regSteps: [
      ["Fill Basic Details", "Enter student and parent details in the form below."],
      ["Select Program Track", "Choose development modules suitable for class level."],
      ["Confirmation Call", "Our team confirms schedule, batch, and orientation date."],
      ["Complete Payment (Phase 2)", "Online payment integration is planned in the next phase."]
    ],
    regFormTitle: "Student Registration (Frontend Mockup)",
    studentName: "Student Full Name",
    parentName: "Parent Name",
    classLabel: "Class",
    selectClass: "Select class",
    classOptions: ["Class 1-4", "Class 5-7", "Class 8-10"],
    mobileLabel: "Mobile Number",
    programLabel: "Program Interested In",
    selectProgram: "Select a program",
    programOptions: ["Smart Board + Virtual Study", "Brain Games + Physical Activity", "Public Speaking + Debate", "IELTS/Military Focus Track"],
    submitReg: "Submit Registration",
    payLater: "Pay Online (Coming In Next Phase)",
    trustEyebrow: "Why Families Trust Us",
    trustTitle: "Built on Transparency, Discipline, and Local Accountability",
    trustPoints: [
      ["Verified Academic Mentors", "Programs are guided by teachers and trained facilitators."],
      ["Parent Communication", "Regular updates and clear schedules build family confidence."],
      ["Outcome-Focused Activities", "Students improve confidence, communication, and discipline."]
    ],
    testimonialsEyebrow: "Testimonials",
    testimonialTitle: "What Parents And Students Say",
    testimonialPrev: "Prev",
    testimonialNext: "Next",
    testimonials: [
      ["“My daughter became far more confident in speaking competitions.”", "- Parent, Class 8 Student"],
      ["“The quiz coaching was structured and motivating this year.”", "- Student, Class 10"],
      ["“Communication is clear and the process feels highly credible.”", "- Parent, Class 6 Student"]
    ],
    galleryEyebrow: "Gallery",
    galleryTitle: "Moments From Workshops And Competitions",
    galleryImages: [
      ["/images/gallery-preprimary-1.jpg", "Group activity with young students"],
      ["/images/gallery-preprimary-2.jpg", "Activity-based classroom game session"],
      ["/images/yoga-preschoolers.jpg", "Students in yoga and wellness activity"],
      ["/images/kids-science-lab-group.jpg", "Students doing science activity"]
    ],
    announcementEyebrow: "Announcements & Results",
    announcementTitle: "Latest Updates for Parents and Students",
    announcements: [
      ["Town Quiz League Results Published", "Scorecards and winner list for junior and senior categories are now available.", "View Result PDF (Placeholder)", "#"],
      ["New Debate Batch Starts 15 June", "Limited seats available for Classes 8 to 10.", "Register For Next Batch", "#register"],
      ["Essay Competition Theme Released", "This month topic: How Students Can Contribute to a Better Town Community.", "Download Theme Brief (Placeholder)", "#"]
    ],
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      ["Is this only for toppers?", "No. Programs are designed for all motivated students."],
      ["How often are sessions conducted?", "Most tracks run on weekends with weekly practice tasks."],
      ["Do parents get progress updates?", "Yes. Parent updates are shared after each cycle."],
      ["Is online payment available now?", "Online payments will be enabled in Phase 2."]
    ],
    contactEyebrow: "Contact",
    contactTitle: "Contact Us",
    contactText: "Scholars Space Learning Center, Main Road, Your Town, India",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Hours",
    hoursText: "Monday to Saturday, 9:00 AM to 7:00 PM",
    msgLabel: "Message",
    contactFormTitle: "Send An Enquiry",
    fullName: "Full Name",
    mobileContactLabel: "Mobile Number",
    submitPlaceholder: "Tell us class, area, and interest...",
    send: "Send Message",
    appEyebrow: "Future Expansion",
    appTitle: "Scholars Space Android App Coming Soon",
    appText:
      "In next phase, parents will get attendance, notifications, and scorecards in one place.",
    appBtn: "Android App - Coming In Phase 2",
    legalTitle: "Legal",
    legalLinks: ["Privacy Policy (Placeholder)", "Terms & Conditions (Placeholder)", "Refund Policy (Placeholder)"],
    quickTitle: "Quick Links",
    quickLinks: [
      ["Registration", "#register"],
      ["Results", "#announcements"],
      ["FAQs", "#faq"]
    ],
    socialTitle: "Social",
    socialLinks: ["Facebook (Placeholder)", "Instagram (Placeholder)", "YouTube (Placeholder)"],
    footerBrand: "Scholars Space",
    footerBrandText: "A trusted local platform for school student growth and academic activities.",
    footer: "© 2026 Scholars Space. All rights reserved."
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("hi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const t = copy[lang];
  const totalTestimonials = t.testimonials.length;

  const withBasePath = (path) => (path.startsWith("/") ? `${publicBasePath}${path}` : path);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    setActiveTestimonial(0);
  }, [lang]);

  useEffect(() => {
    if (isTestimonialPaused) {
      return undefined;
    }
    const autoplay = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % totalTestimonials);
    }, 5000);
    return () => clearInterval(autoplay);
  }, [isTestimonialPaused, totalTestimonials]);

  const goToTestimonial = (index) => {
    setActiveTestimonial((index + totalTestimonials) % totalTestimonials);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert(
      lang === "hi"
        ? "धन्यवाद। आपका विवरण डेमो UI में कैप्चर हो गया है। Backend integration Phase 2 में जोड़ा जाएगा।"
        : "Thank you. Your details are captured in this demo UI. Backend integration will be added in Phase 2."
    );
    event.currentTarget.reset();
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="brand" aria-label="Scholars Space Home">
            <span className="brand-mark">SS</span>
            <span className="brand-text">
              <strong>Scholars Space</strong>
              <small>{t.brandSub}</small>
            </span>
          </a>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Main Navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${t.navIds[index]}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button type="button" className="btn btn-secondary lang-btn" onClick={() => setLang(lang === "hi" ? "en" : "hi")}>
              {t.langLabel}: {lang === "hi" ? "EN" : "हिंदी"}
            </button>
            <a href="#register" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
              {t.registerNow}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section kinetic-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p className="hero-subtext">{t.heroText}</p>
              <figure className="hero-illustration-panel">
                <img
                  src={withBasePath("/images/hero-classroom-5-10.jpg")}
                  alt={lang === "hi" ? "कक्षा 5 से 10 के विद्यार्थियों के लिए आधुनिक क्लासरूम शिक्षण" : "Modern classroom learning environment for class 5 to 10 students"}
                />
              </figure>
              <div className="hero-actions">
                <a href="#register" className="btn btn-primary">
                  {t.ctaPrimary}
                </a>
                <a href="#programs" className="btn btn-secondary">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="hero-card innovation-card">
              <h2>{t.admissionsTitle}</h2>
              <p>{t.admissionsText}</p>
              <div className="innovation-grid">
                {t.innovationCards.map(([src, alt, caption]) => (
                  <figure className="innovation-media tilt-card" key={src}>
                    <img src={withBasePath(src)} alt={alt} />
                    <figcaption>{caption}</figcaption>
                  </figure>
                ))}
              </div>
              <ul>
                {t.admissionsList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#register" className="btn btn-primary block">
                {t.reserveSeat}
              </a>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.activityEyebrow}</p>
              <h2>{t.activityTitle}</h2>
            </div>
            <div className="activity-showcase">
              {t.activityShowcase.map(([src, title, desc]) => (
                <article className="showcase-card tilt-card" key={title}>
                  <figure>
                    <img src={withBasePath(src)} alt={title} />
                  </figure>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light" id="about">
          <div className="container narrow">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
          </div>
        </section>

        <section className="section" id="programs">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.programEyebrow}</p>
              <h2>{t.programTitle}</h2>
            </div>
            <div className="card-grid">
              {t.programs.map(([title, text]) => (
                <article className="info-card tilt-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light" id="competitions">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.compEyebrow}</p>
              <h2>{t.compTitle}</h2>
            </div>
            <div className="competition-grid">
              {t.competitions.map((item) => (
                <div className="competition-item pulse-card" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="register">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.regEyebrow}</p>
              <h2>{t.regTitle}</h2>
            </div>
            <div className="process-grid">
              {t.regSteps.map(([title, text], index) => (
                <article className="process-step pulse-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <form className="mock-form" onSubmit={onSubmit}>
              <h3>{t.regFormTitle}</h3>
              <div className="form-grid">
                <label>
                  {t.studentName}
                  <input type="text" required />
                </label>
                <label>
                  {t.parentName}
                  <input type="text" required />
                </label>
                <label>
                  {t.classLabel}
                  <select required>
                    <option value="">{t.selectClass}</option>
                    {t.classOptions.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  {t.mobileLabel}
                  <input type="tel" required />
                </label>
                <label className="full">
                  {t.programLabel}
                  <select required>
                    <option value="">{t.selectProgram}</option>
                    {t.programOptions.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  {t.submitReg}
                </button>
                <button className="btn btn-secondary" type="button">
                  {t.payLater}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="section" id="announcements">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.announcementEyebrow}</p>
              <h2>{t.announcementTitle}</h2>
            </div>
            <div className="announcement-list">
              {t.announcements.map(([title, desc, cta, href]) => (
                <article className="tilt-card" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href={href} className="text-link">
                    {cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.trustEyebrow}</p>
              <h2>{t.trustTitle}</h2>
            </div>
            <div className="trust-points">
              {t.trustPoints.map(([title, text]) => (
                <article className="tilt-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" id="testimonials">
            <div className="section-head">
              <p className="eyebrow">{t.testimonialsEyebrow}</p>
              <h2>{t.testimonialTitle}</h2>
            </div>
            <div
              className="testimonials-carousel"
              onMouseEnter={() => setIsTestimonialPaused(true)}
              onMouseLeave={() => setIsTestimonialPaused(false)}
              onFocusCapture={() => setIsTestimonialPaused(true)}
              onBlurCapture={() => setIsTestimonialPaused(false)}
            >
              <div className="testimonial-viewport">
                <div className="testimonial-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                  {t.testimonials.map(([quote, author], index) => (
                    <blockquote className="quote-card testimonial-slide" key={`${quote}-${index}`} aria-hidden={index !== activeTestimonial}>
                      <p>{quote}</p>
                      <cite>{author}</cite>
                    </blockquote>
                  ))}
                </div>
              </div>
              <div className="testimonial-controls">
                <button type="button" className="testimonial-nav" onClick={() => goToTestimonial(activeTestimonial - 1)} aria-label={t.testimonialPrev}>
                  <span aria-hidden="true">&#8249;</span>
                </button>
                <div className="testimonial-indicators" aria-label="Testimonial indicators">
                  {t.testimonials.map((_, index) => (
                    <button
                      type="button"
                      key={`dot-${index}`}
                      className={`testimonial-dot ${index === activeTestimonial ? "active" : ""}`}
                      onClick={() => goToTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button type="button" className="testimonial-nav" onClick={() => goToTestimonial(activeTestimonial + 1)} aria-label={t.testimonialNext}>
                  <span aria-hidden="true">&#8250;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{t.galleryEyebrow}</p>
              <h2>{t.galleryTitle}</h2>
            </div>
            <div className="gallery-grid">
              {t.galleryImages.map(([src, alt]) => (
                <figure className="gallery-item tilt-card" key={`${src}-${alt}`}>
                  <img src={withBasePath(src)} alt={alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light" id="faq">
          <div className="container narrow">
            <div className="section-head">
              <p className="eyebrow">{t.faqEyebrow}</p>
              <h2>{t.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {t.faqs.map(([q, a], index) => (
                <article key={q} className={`faq-item ${openFaq === index ? "open" : ""}`}>
                  <button className="faq-question" type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    {q}
                  </button>
                  <div className="faq-answer">
                    <p>{a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">{t.contactEyebrow}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <p>
                <strong>{t.phoneLabel}:</strong> +91 98765 43210
              </p>
              <p>
                <strong>{t.emailLabel}:</strong> hello@scholarsspace.in
              </p>
              <p>
                <strong>{t.hoursLabel}:</strong> {t.hoursText}
              </p>
            </div>
            <form className="mock-form" onSubmit={onSubmit} aria-label="Contact Form Mockup">
              <h3>{t.contactFormTitle}</h3>
              <label>
                {t.fullName}
                <input type="text" required />
              </label>
              <label>
                {t.mobileContactLabel}
                <input type="tel" required />
              </label>
              <label>
                {t.msgLabel}
                <textarea rows="4" placeholder={t.submitPlaceholder} />
              </label>
              <button className="btn btn-primary" type="submit">
                {t.send}
              </button>
            </form>
          </div>
        </section>

        <section className="section section-light app-teaser">
          <div className="container app-teaser-inner">
            <div>
              <p className="eyebrow">{t.appEyebrow}</p>
              <h2>{t.appTitle}</h2>
              <p>{t.appText}</p>
            </div>
            <button className="btn btn-secondary" type="button">
              {t.appBtn}
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>{t.footerBrand}</h3>
            <p>{t.footerBrandText}</p>
          </div>
          <div>
            <h4>{t.legalTitle}</h4>
            <ul>
              {t.legalLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.quickTitle}</h4>
            <ul>
              {t.quickLinks.map(([item, href]) => (
                <li key={item}>
                  <a href={href}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.socialTitle}</h4>
            <ul>
              {t.socialLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  );
}
