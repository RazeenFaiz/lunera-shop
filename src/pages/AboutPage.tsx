import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 font-serif">
            About LUNERA
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Grace in Every Thread
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  LUNERA was born from a simple belief: that clothing should be more than just fabric. 
                  It should be an expression of who you are, a reflection of your personality, and a 
                  testament to your unique style journey.
                </p>
                <p>
                  Founded with the vision of creating timeless pieces that blend contemporary design 
                  with classic elegance, LUNERA has become synonymous with quality, comfort, and 
                  sophisticated style. Every piece in our collection is carefully crafted to ensure 
                  that grace flows through every thread.
                </p>
                <p>
                  From our casual wear that effortlessly transitions from day to night, to our 
                  street wear that captures the pulse of urban culture, and our oversized collection 
                  that redefines comfort – each category tells a story of modern fashion sensibilities.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/aboutus.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="LUNERA Brand Story"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at LUNERA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every piece is meticulously crafted using premium materials and attention to detail 
                that ensures lasting quality and comfort.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Fashion</h3>
              <p className="text-gray-600">
                We're committed to responsible fashion practices, from sourcing materials to 
                creating timeless designs that transcend seasonal trends.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community First</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We build lasting relationships 
                through exceptional service and authentic connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To create clothing that empowers individuals to express their authentic selves with 
            confidence and grace. We believe that when you feel good in what you wear, you carry 
            yourself differently – with purpose, with pride, and with the quiet confidence that 
            comes from knowing you look and feel your best.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At LUNERA, we're not just making clothes; we're crafting experiences, building confidence, 
            and celebrating the unique beauty that exists in every individual. Because true style 
            isn't about following trends – it's about finding pieces that speak to your soul and 
            wearing them with grace.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the LUNERA Movement</h2>
          <p className="text-xl mb-8">
            Experience the difference that grace in every thread can make
          </p>
          <a
            href="/"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Our Collections
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;