"use client";

import { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { 
  Building2, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Copy, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

export default function ContactUsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@mintaclub.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout
      title="Contact Us"
      description="We'd love to hear from you. Here's how you can reach us."
    >
      <div className="relative min-h-[60vh] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* --- Left Panel: Headquarters --- */}
            <div className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-32 h-32 text-purple-600 rotate-12" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-2xl mb-6">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Headquarters
                </h2>
                <p className="text-purple-600 font-semibold text-lg mb-6">
                  Minta Club Private Limited
                </p>

                <div className="space-y-1 text-gray-600 text-lg leading-relaxed mb-8">
                  <p>HI-76, Harmu Colony,</p>
                  <p>Ranchi - 834002</p>
                  <p>Jharkhand, India</p>
                </div>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=HI-76+Harmu+Colony+Ranchi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-800 transition-colors group/link"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* --- Right Panel: Email Support --- */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 sm:p-10 shadow-xl text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail className="w-32 h-32 text-white -rotate-12" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/10">
                    <Mail className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Email Support
                  </h2>
                  
                  <p className="text-purple-100 text-lg mb-8 leading-relaxed max-w-sm">
                    Have a question, feedback, or need assistance? Drop us a line and we'll get back to you shortly.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4 group/email">
                  <a 
                    href="mailto:info@mintaclub.com" 
                    className="font-mono text-lg sm:text-xl font-semibold truncate hover:text-purple-200 transition-colors"
                  >
                    info@mintaclub.com
                  </a>
                  
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                    ) : (
                      <Copy className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}