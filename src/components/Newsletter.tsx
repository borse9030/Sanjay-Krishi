import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('कृपया आपला ईमेल पत्ता प्रविष्ट करा');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('कृपया वैध ईमेल पत्ता प्रविष्ट करा');
      return;
    }
    
    setIsSubmitted(true);
    setError('');
    setEmail('');
  };

  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">आमच्या नवीन उत्पादनांबद्दल अपडेट रहा</h2>
        <p className="text-gray-300 mb-8">
          आमच्या न्यूजलेटरला सबस्क्राइब करा आणि नवीन शेती उत्पादने, हंगामी ऑफर आणि शेती टिप्स मिळवा.
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-900/50 border border-green-500 text-green-100 rounded-lg p-4 transition-all duration-300 animate-fadeIn">
            <p className="text-lg font-medium">सबस्क्राइब केल्याबद्दल धन्यवाद!</p>
            <p className="mt-2">तुम्हाला लवकरच आमचे पुढील न्यूजलेटर मिळेल.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="तुमचा ईमेल पत्ता"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
              />
              {error && <p className="text-red-400 text-sm mt-1 text-left">{error}</p>}
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              सबस्क्राइब करा
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;