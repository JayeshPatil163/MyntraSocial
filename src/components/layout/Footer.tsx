
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Online Shopping */}
          <div>
            <h5 className="text-sm font-bold uppercase mb-4">Online Shopping</h5>
            <ul className="space-y-3">
              <li><Link to="/products/men" className="text-sm text-gray-600 hover:text-primary">Men</Link></li>
              <li><Link to="/products/women" className="text-sm text-gray-600 hover:text-primary">Women</Link></li>
              <li><Link to="/products/kids" className="text-sm text-gray-600 hover:text-primary">Kids</Link></li>
              <li><Link to="/products/home" className="text-sm text-gray-600 hover:text-primary">Home & Living</Link></li>
              <li><Link to="/products/beauty" className="text-sm text-gray-600 hover:text-primary">Beauty</Link></li>
            </ul>
          </div>
          
          {/* Customer Policies */}
          <div>
            <h5 className="text-sm font-bold uppercase mb-4">Customer Policies</h5>
            <ul className="space-y-3">
              <li><Link to="/contact-us" className="text-sm text-gray-600 hover:text-primary">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-sm text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary">T&C</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* App Experience */}
          <div>
            <h5 className="text-sm font-bold uppercase mb-4">Experience Myntra App</h5>
            <div className="flex space-x-2 mb-4">
              <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" className="h-10" />
              <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" className="h-10" />
            </div>
            <h5 className="text-sm font-bold uppercase mb-2">Keep in Touch</h5>
            <div className="flex space-x-3">
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Youtube size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          {/* Authenticity Guarantee */}
          <div>
            <div className="flex items-start space-x-2">
              <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="Original" className="h-12" />
              <div>
                <h5 className="text-sm font-bold mb-1">100% ORIGINAL</h5>
                <p className="text-xs text-gray-600">guarantee for all products</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="Returns" className="h-12" />
              <div>
                <h5 className="text-sm font-bold mb-1">Return within 30 days</h5>
                <p className="text-xs text-gray-600">of receiving your order</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-4">
          <p className="text-xs text-center text-gray-600">© 2025 Myntra Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
