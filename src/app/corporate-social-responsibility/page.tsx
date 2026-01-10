"use client";

import PageLayout from "../../components/PageLayout";
import { Heart, Users, Leaf, BookOpen, Target, TrendingUp } from "lucide-react";

export default function CorporateSocialResponsibilityPage() {
  return (
    <PageLayout 
      title="Corporate Social Responsibility Policy"
      description="Our commitment to making a positive impact on society and the environment."
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-sm border border-emerald-100">
          <h2 className="text-3xl font-serif font-bold mb-6 text-[#0A0A0A] flex items-center gap-3">
            <Heart className="w-8 h-8 text-emerald-600" />
            Minta Fresh's Philosophy and Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            "Minta Fresh" is a Brand of Minta Club Private Limited ("Company") is a responsible corporate, which strives 
            for the overall betterment of the society at large. To this end, the Company seeks to undertake Corporate 
            Social Responsibility ("CSR") activities, which extend beyond the ambit of the business and focuses on human, 
            environmental and social assets, with a special focus on addressing hunger, malnutrition, education and health.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-serif font-bold mb-6 text-[#0A0A0A] border-b border-gray-200 pb-3 flex items-center gap-3">
            <Target className="w-8 h-8 text-indigo-600" />
            Objectives and Scope of the CSR Policy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The CSR Policy lays down guidelines for the Company to undertake CSR activities, which are directed towards 
            positively contributing to society through various sustainable and social welfare initiatives. The CSR Policy 
            of the Company shall be governed by the various provisions of the Companies Act, 2013 (the "Act"), Companies 
            (CSR Policy) Rules, 2014 ("CSR Rules") and any other rules made thereunder, or that may apply from time to time.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
            The Company proposes to undertake the CSR activities in the following areas:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Eradicating Hunger & Poverty</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Promoting health care including preventive health care and sanitation including contribution to the 
                    Swachh Bharat Kosh set-up by the Central Government for the promotion of sanitation and making available 
                    safe drinking water.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Promoting Education</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Including special education and employment enhancing vocation skills especially among children, women, 
                    elderly and the differently abled and livelihood enhancement projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-amber-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Gender Equality & Women Empowerment</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Promoting gender equality, empowering women, operate or manage day care centres and such other facilities 
                    for senior citizens and measures for reducing inequalities faced by socially and economically backward groups.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Environmental Sustainability</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ensuring environmental sustainability, ecological balance, protection of flora and fauna, animal welfare, 
                    agroforestry, conservation of natural resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-serif font-bold mb-6 text-[#0A0A0A] border-b border-gray-200 pb-3 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-indigo-600" />
            Implementation of the CSR Activities
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Pursuant to Section 135 of the Act, the Board of Directors of the Company ("Board") has constituted a CSR committee. 
            The CSR Committee and the Board are responsible for ensuring that the Company undertakes CSR activities in accordance 
            with applicable law.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Responsibilities of the CSR Committee
          </h3>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
            <li>Monitor the implementation of the CSR activities undertaken by the Company.</li>
            <li>Prepare a status update in respect of each CSR activity.</li>
            <li>Deliberate upon and identify new CSR activities that the Company may undertake in that financial year.</li>
            <li>Include the details of CSR activities undertaken by the Company during the financial year in the Company's annual report.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            CSR Expenditure
          </h3>
          <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500 mb-6">
            <p className="text-gray-700 leading-relaxed">
              The Board shall ensure that the Company spends, in every financial year, a minimum of <strong>2% of the average 
              net profits</strong> of the Company made during the three immediately preceding financial years, on the CSR 
              activities of the Company.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Publication
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The CSR Policy shall be displayed on the Company's website, available here www.mintafresh.com and link of the 
            same will also be included in the Directors' Report for every financial year.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
