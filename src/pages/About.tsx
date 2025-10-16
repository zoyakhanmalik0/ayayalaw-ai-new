import { Target, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Ayayalaw-AI
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ayayalaw-AI is designed to help users access quick, AI-powered legal information
            without complexity. Our mission is to make basic legal knowledge more accessible,
            secure, and user-friendly.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900 mb-2">Important Notice</p>
                <p className="text-gray-700">
                  We are not a law firm, and we do not provide professional legal representation.
                  Always consult a qualified lawyer for real legal matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To democratize access to basic legal information through advanced AI technology.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Transparency, accessibility, and user empowerment guide everything we do.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600">
              Your privacy and data security are our top priorities in every interaction.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">What We Are Not</h2>
          <p className="text-lg text-blue-100 mb-4">
            Ayayalaw-AI is NOT a substitute for professional legal counsel. We do not:
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-3 text-blue-50">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Provide legal representation in court or legal proceedings</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Establish an attorney-client relationship</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Offer advice tailored to your specific legal situation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Replace the need for qualified legal professionals</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
