import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          About E-Voting Platform
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          E-Voting Platform is a cutting-edge solution designed to facilitate
          efficient and secure voting processes for various organizations,
          including universities, companies, and community groups. Our platform
          leverages the latest technology to ensure transparent, accessible,
          and tamper-proof elections.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to revolutionize the way organizations conduct their
          elections by providing a seamless and reliable e-voting platform.
          Through innovation and dedication, we aim to empower organizations of
          all sizes to conduct fair and inclusive voting processes.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-6">
          We envision a future where every organization can leverage
          state-of-the-art technology to conduct their elections with ease and
          confidence. By fostering trust, transparency, and accessibility, we
          strive to become the leading provider of e-voting solutions globally.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mb-6">
          At E-Voting Platform, we are proud of our diverse and talented team
          of professionals who are passionate about democracy and technology.
          Our team includes experts in software development, cybersecurity, and
          user experience, working together to deliver exceptional solutions
          to our clients.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
