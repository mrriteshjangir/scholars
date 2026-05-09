"use client";

import { useEffect, useState } from "react";

const copy = {
  hi: {
    brandSub: "लर्निंग इनिशिएटिव",
    nav: ["परिचय", "प्रोग्राम", "प्रतियोगिता", "घोषणाएं", "FAQ", "संपर्क"],
    navIds: ["about", "programs", "competitions", "announcements", "faq", "contact"],
    registerNow: "रजिस्टर करें",
    langLabel: "भाषा",
    heroEyebrow: "कक्षा 5 से 12 के लिए मॉडर्न लर्निंग",
    heroTitle: "बेहतर पढ़ाई, बेहतर आत्मविश्वास",
    heroText:
      "Scholars Space आपके शहर में पढ़ाई, बोलने की कला, प्रतियोगिताओं और overall growth के लिए मजबूत support देता है।",
    heroBadges: ["Human Body 3D Learning", "Robotics + Science", "Yoga + Exercise", "Singing + Dance + Games"],
    heroMeta: ["Modern local batches", "Verified mentors", "Regular parent updates"],
    ctaPrimary: "रजिस्ट्रेशन शुरू करें",
    ctaSecondary: "प्रोग्राम देखें",
    admissionsTitle: "Admissions Open",
    admissionsText: "नया बैच अब खुला है।",
    admissionsList: ["Debate and Public Speaking Club", "Smart Concept Learning", "Quiz and GK Preparation", "Olympiad Practice Sessions"],
    reserveSeat: "Seat Reserve करें",
    aboutEyebrow: "About The Initiative",
    aboutTitle: "हमारे शहर के लिए एक मजबूत Academic Platform",
    aboutText1:
      "Scholars Space उन parents और students के लिए है जो regular tuition से आगे बढ़कर communication, confidence और discipline चाहते हैं।",
    aboutText2:
      "Local accessibility और professional standards के साथ students को पूरे academic year में consistent growth support मिलता है।",
    programEyebrow: "Programs Offered",
    programTitle: "Year-Round Student Development Tracks",
    programs: [
      ["Academic Skill Labs", "Reading, writing, comprehension, presentation, और subject confidence modules."],
      ["Competition Coaching", "Debate, quiz, essay writing, elocution और school rounds की guided preparation."],
      ["Mentor-Led Weekend Sessions", "Small-group mentorship with practical improvement focus."],
      ["Parent Orientation Meets", "Progress, schedule, outcomes और upcoming events पर transparent updates."]
    ],
    compEyebrow: "Student Competitions",
    compTitle: "Academic & Communication Activities",
    competitions: ["Debate Challenge", "Essay Writing Contest", "Town Quiz League", "Speech and Elocution", "Science Concept Showcase", "General Knowledge Sprint"],
    regEyebrow: "Registration Process",
    regTitle: "Parents और Students के लिए आसान steps",
    regSteps: [
      ["Fill Basic Details", "Student और parent details form में भरें।"],
      ["Select Program Track", "Class level के हिसाब से modules चुनें।"],
      ["Confirmation Call", "Team schedule और batch details confirm करेगी।"],
      ["Complete Payment (Phase 2)", "Online payment next phase में आएगा।"]
    ],
    regFormTitle: "Student Registration (Frontend Mockup)",
    studentName: "Student Full Name",
    parentName: "Parent Name",
    classLabel: "Class",
    selectClass: "Select class",
    classOptions: ["Class 5-7", "Class 8-10", "Class 11-12"],
    mobileLabel: "Mobile Number",
    programLabel: "Program Interested In",
    selectProgram: "Select a program",
    programOptions: ["Debate and Speech", "Essay and Writing", "Quiz and GK", "Complete Development Track"],
    submitReg: "Submit Registration",
    payLater: "Pay Online (Coming In Next Phase)",
    trustEyebrow: "Why Families Trust Us",
    trustTitle: "Transparency, Discipline, और Local Accountability",
    trustPoints: [
      ["Verified Academic Mentors", "Experienced teachers और trained facilitators programs guide करते हैं।"],
      ["Parent Communication", "Regular updates और clear schedule families को confidence देते हैं।"],
      ["Outcome-Focused Activities", "Students communication, confidence, और discipline में improve करते हैं।"]
    ],
    testimonialsEyebrow: "Testimonials",
    testimonialTitle: "Parents और Students की राय",
    testimonials: [
      ["“मेरी बेटी speaking competitions में काफी confident हुई है।”", "- Parent, Class 8 Student"],
      ["“Quiz coaching structured और motivating रही।”", "- Student, Class 10"],
      ["“Communication clear है और process professional लगता है।”", "- Parent, Class 6 Student"]
    ],
    galleryEyebrow: "Gallery",
    galleryTitle: "वर्कशॉप और प्रतियोगिता के पल",
    galleryImages: [
      ["https://placehold.co/600x420/e9eef7/1f2d4a?text=Debate+Round", "Students in debate round"],
      ["https://placehold.co/600x420/f0f4fa/1f2d4a?text=Quiz+Session", "Quiz session in classroom"],
      ["https://placehold.co/600x420/e8f1ee/1f2d4a?text=Essay+Workshop", "Essay workshop scene"],
      ["https://placehold.co/600x420/f4efe9/1f2d4a?text=Prize+Ceremony", "Prize ceremony with students"]
    ],
    announcementEyebrow: "Announcements & Results",
    announcementTitle: "Parents और Students के लिए latest updates",
    announcements: [
      ["Town Quiz League Results Published", "Junior और Senior categories के results available हैं।", "View Result PDF (Placeholder)", "#"],
      ["New Debate Batch Starts 15 June", "Classes 8 to 10 के लिए limited seats।", "Register For Next Batch", "#register"],
      ["Essay Competition Theme Released", "Theme: How Students Can Contribute to a Better Town Community.", "Download Theme Brief (Placeholder)", "#"]
    ],
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Parents के common सवाल",
    faqs: [
      ["क्या यह सिर्फ toppers के लिए है?", "नहीं। Programs motivated students के लिए हैं।"],
      ["Sessions कितनी बार होते हैं?", "अधिकतर tracks weekend में होते हैं।"],
      ["क्या parents को progress updates मिलते हैं?", "हाँ, हर cycle के बाद updates शेयर होते हैं।"],
      ["क्या online payment अभी available है?", "Online payment Phase 2 में enabled होगा।"]
    ],
    contactEyebrow: "Contact",
    contactTitle: "संपर्क करें",
    contactText: "Scholars Space Learning Center, Main Road, Your Town, India",
    phoneLabel: "फोन",
    emailLabel: "ईमेल",
    hoursLabel: "समय",
    hoursText: "Monday to Saturday, 9:00 AM to 7:00 PM",
    contactFormTitle: "पूछताछ भेजें",
    fullName: "पूरा नाम",
    msgLabel: "संदेश",
    mobileContactLabel: "Mobile Number",
    submitPlaceholder: "Class, area और interest लिखें...",
    send: "मैसेज भेजें",
    appEyebrow: "Future Expansion",
    appTitle: "Scholars Space Android App Coming Soon",
    appText: "आने वाले phase में parents को attendance, notifications और scorecards एक जगह मिलेंगे।",
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
  },
  en: {
    brandSub: "Learning Initiative",
    nav: ["About", "Programs", "Competitions", "Announcements", "FAQ", "Contact"],
    navIds: ["about", "programs", "competitions", "announcements", "faq", "contact"],
    registerNow: "Register Now",
    langLabel: "Language",
    heroEyebrow: "Modern Learning For Classes 5 to 12",
    heroTitle: "Better Learning, Better Confidence For Your Child",
    heroText:
      "Scholars Space gives simple and strong support for studies, speaking skills, competitions, and overall growth in our town.",
    heroBadges: ["Human Body 3D Learning", "Robotics + Science", "Yoga + Exercise", "Singing + Dance + Games"],
    heroMeta: ["Local batches with modern teaching", "Verified mentors", "Regular parent updates"],
    ctaPrimary: "Start Registration",
    ctaSecondary: "Explore Programs",
    admissionsTitle: "Admissions Open",
    admissionsText: "New batch open now for student learning and activities.",
    admissionsList: ["Debate and Public Speaking Club", "Smart Concept Learning", "Quiz and GK Preparation", "Olympiad Practice Sessions"],
    reserveSeat: "Reserve Your Seat",
    aboutEyebrow: "About The Initiative",
    aboutTitle: "A Serious Academic Development Platform for Our Town",
    aboutText1:
      "Scholars Space is designed for parents and students who want more than regular tuition, with communication, confidence, and discipline.",
    aboutText2:
      "Our approach combines local accessibility with professional standards for safe and meaningful student growth all year.",
    programEyebrow: "Programs Offered",
    programTitle: "Year-Round Student Development Tracks",
    programs: [
      ["Academic Skill Labs", "Reading, writing, comprehension, presentation, and subject confidence modules."],
      ["Competition Coaching", "Guided preparation for debate, quiz, essay writing, and inter-school rounds."],
      ["Mentor-Led Weekend Sessions", "Small-group mentorship with practical academic improvement."],
      ["Parent Orientation Meets", "Transparent updates on progress, schedules, outcomes, and events."]
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
    classOptions: ["Class 5-7", "Class 8-10", "Class 11-12"],
    mobileLabel: "Mobile Number",
    programLabel: "Program Interested In",
    selectProgram: "Select a program",
    programOptions: ["Debate and Speech", "Essay and Writing", "Quiz and GK", "Complete Development Track"],
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
    testimonials: [
      ["“My daughter became far more confident in speaking competitions.”", "- Parent, Class 8 Student"],
      ["“The quiz coaching was structured and motivating this year.”", "- Student, Class 10"],
      ["“Communication is clear and the process feels highly credible.”", "- Parent, Class 6 Student"]
    ],
    galleryEyebrow: "Gallery",
    galleryTitle: "Moments From Workshops And Competitions",
    galleryImages: [
      ["https://placehold.co/600x420/e9eef7/1f2d4a?text=Debate+Round", "Students in debate round"],
      ["https://placehold.co/600x420/f0f4fa/1f2d4a?text=Quiz+Session", "Quiz session in classroom"],
      ["https://placehold.co/600x420/e8f1ee/1f2d4a?text=Essay+Workshop", "Essay workshop scene"],
      ["https://placehold.co/600x420/f4efe9/1f2d4a?text=Prize+Ceremony", "Prize ceremony with students"]
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
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
        <section className="hero section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p className="hero-subtext">{t.heroText}</p>
              <figure className="hero-illustration-panel">
                <img
                  src="/images/self-growth-activities.svg"
                  alt="Student self-growth activities including science, yoga, singing and games"
                />
              </figure>
              <div className="hero-badges">
                {t.heroBadges.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a href="#register" className="btn btn-primary">
                  {t.ctaPrimary}
                </a>
                <a href="#programs" className="btn btn-secondary">
                  {t.ctaSecondary}
                </a>
              </div>
              <ul className="hero-meta">
                {t.heroMeta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hero-card innovation-card">
              <h2>{t.admissionsTitle}</h2>
              <p>{t.admissionsText}</p>
              <div className="innovation-grid">
                <figure className="innovation-media">
                  <img src="https://placehold.co/420x260/dce9ff/102f59?text=AI+Powered+Classroom" alt="AI classroom visual" />
                  <figcaption>AI Smart Classroom</figcaption>
                </figure>
                <figure className="innovation-media">
                  <img src="https://placehold.co/420x260/e8f7f1/153e75?text=Speech+%26+Debate+Lab" alt="Debate lab visual" />
                  <figcaption>Speech & Debate Lab</figcaption>
                </figure>
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
                <article className="info-card" key={title}>
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
                <div className="competition-item" key={item}>
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
                <article className="process-step" key={title}>
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
                <article key={title}>
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
                <article key={title}>
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
            <div className="card-grid">
              {t.testimonials.map(([quote, author]) => (
                <blockquote className="quote-card" key={quote}>
                  <p>{quote}</p>
                  <cite>{author}</cite>
                </blockquote>
              ))}
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
                <figure className="gallery-item" key={src}>
                  <img src={src} alt={alt} />
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
