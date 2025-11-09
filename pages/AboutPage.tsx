
import React from 'react';
import { Logo } from '../components/Logo';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-6">
                <Logo className="h-20 w-20 text-primary" />
            </div>
            <h2 className="text-4xl font-extrabold text-primary-800 mb-4">
                About MMM Study Circle
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                MMM Study Circle – Melur Maraththadi Maiyam, is a free learning space dedicated to helping TNPSC aspirants achieve their goals. Our mission is to provide quality study materials and a collaborative environment for effective preparation.
            </p>
            <div className="mt-8 border-t pt-6">
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mt-2">
                    To empower every student with the knowledge and confidence to excel in competitive examinations through accessible and high-quality educational resources.
                </p>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;
