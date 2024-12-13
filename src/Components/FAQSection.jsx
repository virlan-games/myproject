import React, { useState } from "react";
import { Link } from 'react-router-dom';


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Am I Eligible to Study Abroad?",
      answer:
        "To begin studying as an international student, there are a range of entry requirements you may have to meet. The academic requirements (including evidence of English language skills) you need to study abroad will vary depending on the level of education you want to pursue. For instance, some courses will require you to have done a foundation course before applying for a degree.",
    },
    {
      question: "How much will it cost to Study Abroad?",
      answer: "Costs vary depending on the country, institution, and program chosen.",
    },
    {
      question: "How long does it take for a student visa to be issued?",
      answer: "Processing times depend on the country, but it typically takes 3–6 weeks.",
    },
    {
      question: "Scholarships & Bursaries – What's the difference?",
      answer: "Scholarships are merit-based, while bursaries are need-based financial aid.",
    },
  ];

  return (
    <div className="faqlist2">
    <div className="faq-section">
        <h5>LEARN HOW TO GET STARTED</h5>
      <h2>Frequently Asked Questions</h2>
      <p>
        Join our club member community now to get free updates and also a lot of
        freebies are waiting for you or Contact Us
      </p>
      <button className="faq-button"><Link to="/cours" className="fullfaq">Read Our Full FAQ</Link></button>
      </div>
    <div className="faqlist1">
      <div className="faqlist">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-icon">
                {activeIndex === index ? "x" : "+"}
              </span>
              <span className="faq-question">{faq.question}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
      </div>
    );
};

export default FAQSection;
