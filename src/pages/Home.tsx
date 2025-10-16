import { Download, Shield, Zap, Users, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Home() {
  const titles = [
    "3 Patti Dragon Tiger Club",
    "3 Patti Flying Chess",
    "3 Patti No. 1",
    "3 Patti Blue",
    "3 Patti Gold",
    "3 Patti Crown",
    "3 Patti Boss",
    "3 Patti Lucky",
    "3 Patti Master"
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ Download Buttons Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          {titles.map((title, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-80 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
              >
                <Download className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">{title}</span>
              </button>
            </a>
          ))}
        </div>
      </section>

      {/* ✅ Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Ayayalaw-AI?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Legal Assistance 24/7</h3>
              <p className="text-gray-600">
                Get quick legal info powered by AI anytime, anywhere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Protected</h3>
              <p className="text-gray-600">
                Your conversations are encrypted and secure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast & Accurate</h3>
              <p className="text-gray-600">
                Instant answers to legal queries with precision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Friendly</h3>
              <p className="text-gray-600">
                Easy for anyone to use, no legal expertise required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust Ayayalaw-AI for quick legal information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              Download Now
            </button>

            <Link
              to="/contact"
              className="bg-transparent hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Legal Disclaimer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-2">
                <svg className="h-6 w-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Important Legal Disclaimer</h3>
              <p className="text-gray-700">
                Ayayalaw-AI is an AI-powered tool that provides general legal information and is not a law firm.
                It does not offer legal representation or professional legal advice. Always consult a qualified
                lawyer for real legal matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

