"use client";

import PageLayout from "../../components/PageLayout";
import { CheckCircle2 } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <PageLayout 
      title="Refund Policy"
      description="Our commitment to transparent and fair refund processes for all customers."
    >
      <div className="space-y-8">
        {/* Online Payment Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-indigo-100 rounded-full p-3">
              <CheckCircle2 className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-[#0A0A0A]">
                Online Payment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Refunds will be processed within <span className="font-semibold text-gray-900">48 hours</span> and will be 
                credited to the customer account within <span className="font-semibold text-gray-900">5-7 working days</span> 
                depending on the issuing bank.
              </p>
            </div>
          </div>
        </div>

        {/* Cash on Delivery Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <CheckCircle2 className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-[#0A0A0A]">
                Cash on Delivery
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Refunds will be credited to the customer's account as <span className="font-semibold text-gray-900">store credit or wallet</span> 
                and can be used for the subsequent order in the future.
              </p>
            </div>
          </div>
        </div>

        {/* Grievance Contact Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
          <h2 className="text-3xl font-serif font-bold mb-6 text-[#0A0A0A]">
            Grievance Contact
          </h2>
          <p className="text-gray-600 mb-6">Details of the Grievance contact is given below:</p>
          <div className="space-y-3 text-gray-700">
            <p className="text-lg font-semibold text-gray-900">Minta Club Private Limited</p>
            <p className="text-lg">HI-76, Harmu Colony, Ranchi - 834002</p>
            <p className="text-lg">
              Email: <a href="mailto:info@mintaclub.com" className="text-indigo-600 hover:underline font-medium">info@mintaclub.com</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
