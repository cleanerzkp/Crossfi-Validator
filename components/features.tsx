import React from 'react';

export default function Features() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2">Why Choose Degen House as Your Validator</h2>
          <p className="text-xl text-gray-400">We provide a robust and secure staking service that ensures maximum uptime and profitability, powered by industry-leading infrastructure and a dedicated team of professionals.</p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">

          {/* 24/7 Uptime */}
          <div className="feature-item" data-aos="fade-up">
            <div className="feature-icon bg-purple-600">
              {/* Insert corresponding SVG icon for 24/7 Uptime */}
            </div>
            <h4 className="h4 mb-2">24/7 Uptime</h4>
            <p className="text-lg text-gray-400">
              Our validator nodes are monitored around the clock to ensure continuous operation and reward accumulation.
            </p>
          </div>

          {/* Security */}
          <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon bg-purple-600">
              {/* Insert corresponding SVG icon for Security */}
            </div>
            <h4 className="h4 mb-2">Top-Tier Security</h4>
            <p className="text-lg text-gray-400">
              With state-of-the-art security protocols, your stake is safeguarded against any adversities.
            </p>
          </div>

          {/* Transparent Fees */}
          <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon bg-purple-600">
              {/* Insert corresponding SVG icon for Transparent Fees */}
            </div>
            <h4 className="h4 mb-2">Transparent Fees</h4>
            <p className="text-lg text-gray-400">
              We maintain a competitive and transparent fee structure, ensuring you get the most out of your staking rewards.
            </p>
          </div>

          {/* Community Trust */}
          <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon bg-purple-600">
              {/* Insert corresponding SVG icon for Community Trust */}
            </div>
            <h4 className="h4 mb-2">Community Trust</h4>
            <p className="text-lg text-gray-400">
              Being a validator is a responsibility we take seriously, fostering trust with consistent performance and community engagement.
            </p>
          </div>

          {/* Easy Onboarding */}
          <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-icon bg-purple-600">
              {/* Insert corresponding SVG icon for Easy Onboarding */}
            </div>
            <h4 className="h4 mb-2">Easy Onboarding</h4>
            <p className="text-lg text-gray-400">
              Get started with staking quickly using our straightforward onboarding process and comprehensive guides.
            </p>
          </div>

          {/* Professional Support */}
          <div className="feature-item" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-icon bg-purple-600">
              {/* Insert corresponding SVG icon for Professional Support */}
            </div>
            <h4 className="h4 mb-2">Professional Support</h4>
            <p className="text-lg text-gray-400">
              Our expert team is available to assist you with any queries or issues, ensuring a seamless staking experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
//add more content