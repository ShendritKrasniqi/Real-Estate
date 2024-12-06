import React from 'react';

export default function About() {
  const services = [
    {
      title: 'Buying & Selling',
      text: 'Helping buyers find dream homes and sellers achieve the best value.',
    },
    {
      title: 'Rentals',
      text: 'Explore a variety of rental properties that fit your lifestyle.',
    },
    {
      title: 'Investment Advisory',
      text: 'Unlock opportunities with expert investment advice.',
    },
    {
      title: 'Property Management',
      text: 'Hassle-free management solutions for property owners.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8">
    
      <section className="bg-blue-600 text-white text-center p-12 rounded-t-xl">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Your trusted partner in real estate solutions, guiding you every step of the way.
        </p>
      </section>

     
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <strong>Real Estate</strong>, we are committed to making real estate transactions 
          smooth and rewarding. Whether you are buying, selling, or investing, 
          our goal is to support you with transparency, trust, and expertise.
        </p>
      </section>

     
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-medium mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="text-center py-12 bg-blue-50 rounded-b-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Ready to take the next step? Contact us today, and let’s make your real estate journey a success.
        </p>
        <p><strong>044-123-456</strong></p>
      </section>
    </div>
  );
}