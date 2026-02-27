"use client";

import PageLayout from "../../components/PageLayout";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="We are committed to protecting your privacy and ensuring the security of your personal information."
    >
      <div className="space-y-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This privacy policy sets out how mintaclub.com uses and protects any information that you give mintaclub.com 
            when you use this website. mintaclub.com is committed to ensuring that your privacy is protected. Should we ask 
            you to provide certain information by which you can be identified when using this website, then you can be assured 
            that it will only be used in accordance with this privacy statement.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
            <p className="text-gray-700">
              <strong>Note:</strong> mintaclub.com may change this policy from time to time by updating this page. You should 
              check this page from time to time to ensure that you are happy with any changes.
            </p>
          </div>

          <h2 className="text-3xl font-serif font-bold mt-10 mb-6 text-[#0A0A0A] border-b border-gray-200 pb-3 flex items-center gap-3">
            <Shield className="w-8 h-8 text-indigo-600" />
            What We Collect
          </h2>
          <p className="mb-6 text-gray-700">We may collect the following information:</p>
          <ul className="list-none space-y-4 mb-8">
            <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <FileText className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Name and contact information including email address</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <FileText className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Demographic information such as postcode, preferences and interests</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <FileText className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Other information relevant to customer surveys and/or offers</span>
            </li>
          </ul>

          <h2 className="text-3xl font-serif font-bold mt-10 mb-6 text-[#0A0A0A] border-b border-gray-200 pb-3 flex items-center gap-3">
            <Eye className="w-8 h-8 text-indigo-600" />
            What We Do With The Information We Gather
          </h2>
          <p className="mb-4 text-gray-700">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>From time to time, we may also use your information to contact you for market research purposes.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold mt-10 mb-6 text-[#0A0A0A] border-b border-gray-200 pb-3 flex items-center gap-3">
            <Lock className="w-8 h-8 text-indigo-600" />
            Security
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, 
            we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information 
            we collect online.
          </p>

          <h2 className="text-3xl font-serif font-bold mt-10 mb-6 text-[#0A0A0A] border-b border-gray-200 pb-3">
            How We Use Cookies
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file 
            is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow 
            web applications to respond to you as an individual. The web application can tailor its operations to your needs, 
            likes and dislikes by gathering and remembering information about your preferences.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Grievances</h3>
            <p className="text-gray-700 mb-2 font-semibold">Minta Club Private Limited</p>
            <p className="text-gray-700 mb-2">HI-76, Harmu Colony, Ranchi - 834002</p>
            <p className="text-gray-700">
              Email: <a href="mailto:support@mintaclub.com" className="text-indigo-600 hover:underline font-medium">support@mintaclub.com</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
