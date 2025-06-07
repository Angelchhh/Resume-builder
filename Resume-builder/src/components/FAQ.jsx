import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I create a resume?',
    answer:
      'You can create a resume quickly using our builder by filling in your details and selecting a template.',
  },
  {
    question: 'Can I export my resume as PDF?',
    answer:
      'Yes! Our tool allows you to download your resume instantly in high-quality PDF format with one click.',
  },
  {
    question: 'Are there templates available?',
    answer:
      'Absolutely, we offer a variety of modern and professional templates that you can customize to your liking.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we prioritize your privacy and use industry-standard security measures to protect your information.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-br from-white via-cyan-50 to-white ">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Frequently Asked <span className='text-cyan-700' >Questions</span> 
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`faq-panel-${index}`}
              id={`faq-header-${index}`}
            >
              <span className="text-lg font-medium text-left">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-header-${index}`}
              className={`px-6 pb-4 text-gray-700 transition-max-height duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
