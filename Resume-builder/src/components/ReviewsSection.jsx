import React from 'react';
import { Star } from 'lucide-react';


const reviews = [
  {
    name: 'Ayesha Khan',
    Img: 'https://randomuser.me/api/portraits/women/65.jpg',
    review: 'I created my resume in 10 minutes! Clean design, easy to use — love it.',
  },
  {
    name: 'Ali Raza',
    Img: 'https://randomuser.me/api/portraits/men/30.jpg',
    review: 'Hands down the best resume builder. Templates are top-notch.',
  },
  {
    name: 'Fatima Noor',
    Img: 'https://randomuser.me/api/portraits/women/46.jpg',
    review: 'Amazing experience! My resume got noticed immediately.',
  },
];

const ReviewsSection = () => {
  return (
    <section className=" py-16 px-6 text-black bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10"> <span className='text-cyan-700'>What</span> Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-full shadow-lg p-6 transition hover:shadow-2xl  "
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.Img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
