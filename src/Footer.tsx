import { EnvelopeIcon, PhoneIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 mt-30">
      <div className="w-full">
        <div className="grid-top flex justify-center items-center">
          <h1 className="text-[8vw] font-bold uppercase text-neutral-600 m-0 tracking-tight whatText">
            (Connect & Explore)
          </h1>
        </div>

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-200 mt-6">
              We’re Here for You
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
              Reach out with confidence—our team is ready to assist you anytime, anywhere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="group bg-emerald-900/30 border border-emerald-400/20 p-6 rounded-lg animate-fade-in hover:scale-105 hover:bg-emerald-800/40 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="h-8 w-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 text-center">Instant Support</h3>
                <p className="text-neutral-400 text-sm text-center">
                  Get quick answers through our live chat or email support.
                </p>
              </div>

              <div className="group bg-emerald-900/30 border border-emerald-400/20 p-6 rounded-lg animate-fade-in hover:scale-105 hover:bg-emerald-800/40 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="h-8 w-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 text-center">Global Reach</h3>
                <p className="text-neutral-400 text-sm text-center">
                  Connect with us from anywhere in the world.
                </p>
              </div>

              <div className="group bg-emerald-900/30 border border-emerald-400/20 p-6 rounded-lg animate-fade-in hover:scale-105 hover:bg-emerald-800/40 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="h-8 w-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4v3a2 2 0 01-2 2h-4a2 2 0 01-2-2v-3zm-8 0c0-2.21 1.79-4 4-4s4 1.79 4 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v-1a4 4 0 00-8 0v1m8 0v-1a4 4 0 018 0v1"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 text-center">Secure Communication</h3>
                <p className="text-neutral-400 text-sm text-center">
                  Your inquiries are handled with the utmost privacy.
                </p>
              </div>

              <div className="group bg-emerald-900/30 border border-emerald-400/20 p-6 rounded-lg animate-fade-in hover:scale-105 hover:bg-emerald-800/40 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <svg className="h-8 w-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-200 text-center">24/7 Assistance</h3>
                <p className="text-neutral-400 text-sm text-center">
                  We’re available around the clock to support you.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} SHANNON. All Rights Reserved.
            </p>
            <p className="text-neutral-500 text-sm mt-2 md:mt-0">
              <a href="mailto:shannon@email.com" className="hover:text-emerald-300 transition-colors">shannon@email.com</a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div>
              <h3 className="text-lg font-semibold uppercase text-neutral-200 mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Retail
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Construction
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Public Sector
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Financial Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold uppercase text-neutral-200 mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Implementation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Advanced Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Marketing Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold uppercase text-neutral-200 mb-4">Contact Us</h3>
              <p className="text-neutral-400 mb-4">Need help or have a question?</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-emerald-400" />
                  <a href="tel:+123456789" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Phone: +123 456-789
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <DocumentTextIcon className="h-5 w-5 text-emerald-400" />
                  <span className="text-neutral-400">Fax: (+63) 555 0100</span>
                </li>
                <li className="flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5 text-emerald-400" />
                  <a href="mailto:info@email.com" className="text-neutral-400 hover:text-emerald-300 transition-colors">
                    Email: shannon@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;