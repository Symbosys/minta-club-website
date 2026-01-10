"use client";

import PageLayout from "../../components/PageLayout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex-1">
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "transform rotate-180 text-indigo-600" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Why do you say that your products are chemical-free?",
      answer: "Our core mission is to provide chemical-free, unadulterated food to consumers. We take great pains to ensure that we go directly to the fishermen or farmers without any middlemen in between and buy the freshest of fresh food straight from the source. Further, we follow the most modern & scientific transportation and packaging processes from source till your door steps. This ensures that the required temperature and other conditions for healthy preservation of meats is met using nothing but natural ice as the preservative."
    },
    {
      question: "Are there really chemicals used in fish available locally?",
      answer: "How we wish that were true! We have observed that a large percentage of the fish available in the local market has Ammonia in them. A smaller percentage has Formalin."
    },
    {
      question: "How can you confidently say that your meats do not have hormones in them?",
      answer: "We take great care to ensure there are no growth promoters such as hormones, antibiotics and other bad stuff in the poultry that you buy from us. The growth promoter bit is easy – if you are ready to take a hit on the profit margin and are ok with poultry such as chicken not growing to the largest size before slaughter, then you don't need to add any growth promoters. In fact most vendors in the market today do not add hormones in chicken and is a common myth. Now we take the concept to the extreme for health reasons and take a hit on the profitability in return for a smaller bird - that is why you see that our whole chicken is only between 1-1.3 kg after cleaning, generally the chicken available in the market would be much bigger. The good news though is smaller chicken is more tender and much more tastier."
    },
    {
      question: "What about antibiotics in the Chicken?",
      answer: "The antibiotics part in Chicken is a more complicated story. We ensure that we take the broiler chicken from institutional farmers who are FSSAI/HACCP certified and also conduct lab test on each batch of chicken for the presence of antibiotics or other growth promoters. We also closely keep tab on the product to ensure that the final meat is free of antibiotics before it reaches your doorsteps."
    },
    {
      question: "What about Ducks or other poultry?",
      answer: "In the case of larger birds like duck or country chicken, antibiotics are not needed at any stage as they are more sturdier birds and they are reared in a free range fashion."
    },
    {
      question: "Are all your Chicken Free Range?",
      answer: "No, only the Country Chicken varieties are Free Range birds. The others are reared naturally but not in the open farms which qualify for Free Range rearing."
    },
    {
      question: "How do you manage to deliver it so fresh?",
      answer: "Simple - we procure the day's catch from fisherman hours after they actually fish and come to the shore. Our well oil-ed processing center ensures that the fresh catch reaches our plants within no time of the catch landing on the shore. At our delivery end, we have a network of vehicles that pick up the product from the airport/train stations and deliver to your doorsteps."
    },
    {
      question: "How fresh is the seafood brought from Freshtohome?",
      answer: "The fish reaches your home within a few hours of catch landing from the pond/sea- our estimate is that it is in your kitchen within 20 to 35 hours of catch landing at the market. The catch is not treated with chemicals such as Formalin, Chlorine or Ammonia, which means what we supply, is the safest and healthiest seafood you can buy."
    },
    {
      question: "How on time are you guys?",
      answer: "We have our own logistics and delivery work force, so we have a fair amount of control on our schedules. The two factors that are not in our control are train and airline schedules - our two primary means of supply in to the Cities. However these are extra ordinary situations and barring acts of God, we deliver on time 99.99% of the time."
    },
    {
      question: "Does the taste of fish vary from coast to coast?",
      answer: "Yes, there is a big difference in taste of the same fish caught in one ecosystem versus the other. For example - it is very well known that the best tasting Hilsa actually comes from the fresh waters in Bangladesh. Similarly for Marine fish, some of the best tasting fish comes from the southern coasts of India, especially the Kerala belt where there are a lot of lagoons."
    },
    {
      question: "Why do you charge for delivery service?",
      answer: "We provide fish that is a week to a months fresher than the fish that you currently get from the market and deliver that at potentially much lower prices than the local market. What this means is that we operate with razor thin margins and for us to break even we need to add a delivery charge based on the location. As our volumes increase, we are hoping we can lower this cost."
    },
    {
      question: "What are the payment options supported?",
      answer: "We support both online as well as cash on delivery payment methods. No extra fees is charged for using any of the payment methods."
    },
    {
      question: "Is my credit card information safe on your site?",
      answer: "Yes. We do not store credit card details in our system. All online payment related transactions are carried out using trusted PhonePe/Razor pay backed payment gateway system."
    },
    {
      question: "What if the transaction fails while I am paying online?",
      answer: "Go back to the mintafresh.com site and you will be presented with a page to re-attempt the online payment or convert the order to Cash on Delivery (COD) option."
    }
  ];

  return (
    <PageLayout 
      title="Frequently Asked Questions"
      description="Find answers to common questions about our products, services, and policies."
    >
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </PageLayout>
  );
}
