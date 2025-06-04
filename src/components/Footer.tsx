import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Tractor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Tractor className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-xl font-bold text-white">संजय कृषी केंद्र</span>
            </div>
            <p className="mb-4">
              २०१० पासून दर्जेदार शेती उत्पादने पुरवत आहोत. शेतीतील यशासाठी आपला विश्वासू भागीदार.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">जलद लिंक्स</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400 transition-colors">मुख्यपृष्ठ</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">उत्पादने</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">आमच्याबद्दल</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">संपर्क</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">गोपनीयता धोरण</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">उत्पादन श्रेणी</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">बियाणे</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">अवजारे आणि उपकरणे</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">खते</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">कीटकनाशके</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">सिंचन प्रणाली</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">संपर्क करा</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span>१२३ फार्म रोड, ग्रामीण भाग, महाराष्ट्र ४१६४१६</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span>+९१ ९८७६५४३२१०</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span>info@sanjaykrishikendra.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} संजय कृषी केंद्र. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;