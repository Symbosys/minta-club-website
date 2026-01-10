import { Header, Footer } from "../page";

export default function FAQPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 md:px-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-8">Frequently Asked Questions</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Why do you say that your products are chemical-free?</h3>
            <p className="mb-2">Our core mission is to provide chemical-free, unadulterated food to consumers. We take great pains to ensure that we go directly to the fishermen or farmers without any middlemen in between and buy the freshest of fresh food straight from the source. Further, we follow the most modern & scientific transportation and packaging processes from source till your door steps. This ensures that the required temperature and other conditions for healthy preservation of meats is met using nothing but natural ice as the preservative.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Are there really chemicals used in fish available locally? Come on, that&apos;s just your sales pitch. I don&apos;t believe it!</h3>
            <p className="mb-2">How we wish that were true! We have observed that a large percentage of the fish available in the local market has Ammonia in them. A smaller percentage has Formalin.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">How can you confidently say that your meats do not have hormones in them?</h3>
            <p className="mb-2">We take great care to ensure there are no growth promoters such as hormones, antibiotics and other bad stuff in the poultry that you buy from us. The growth promoter bit is easy – if you are ready to take a hit on the profit margin and are ok with poultry such as chicken not growing to the largest size before slaughter, then you don’t need to add any growth promoters. In fact most vendors in the market today do not add hormones in chicken and is a common myth. Now we take the concept to the extreme for health reasons and take a hit on the profitability in return for a smaller bird - that is why you see that our whole chicken is only between 1-1.3 kg after cleaning, generally the chicken available in the market would be much bigger. The good news though is smaller chicken is more tender and much more tastier.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">What about antibiotics in the Chicken?</h3>
            <p className="mb-2">The antibiotics part in Chicken is a more complicated story. We ensure that we take the broiler chicken from institutional farmers who are FSSAI/HACCP certified and also conduct lab test on each batch of chicken for the presence of antibiotics or other growth promoters. We also closely keep tab on the product to ensure that the final meat is free of antibiotics before it reaches your doorsteps. The devil is in the details, so allow us to explain - Broiler Chicken is not practical to be farmed commercially without any antibiotic use in the early stage of its life cycle. You could actually cause more harm than good by not giving the appropriate medicines/vaccines in the early stage of growth. However in the interest of maximising profits, some of the market vendors over use antibiotics (and also other growth promoters) all the way till the bird is slaughtered. The main way in which this is done is by mixing the antibiotics in the feed and water. What we do differently is to ensure that our farmers follow the withdrawal method - each antibiotic has a well defined half life period, which is the time it gets dissipated from the birds blood stream and body, similar to what happens to human beings when you are sick - the antibiotics from the medicines are in your blood only for a small period of time. Our farmers ensure that no antibiotic are used for a large period of time prior to the slaughter – hence there is no possibility of it coming in to the food you eat. We also ensure that there is natural minerals added in the feed making the chicken more healthier. Additionally our broiler chicken are all reared at the same age to avoid infections which is not the case with the chicken you get from the market. Also our rearing is done in large areas where the cross breed infection possibility is rare.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">What about Ducks or other poultry?</h3>
            <p className="mb-2">In the case of larger birds like duck or country chicken, antibiotics are not needed at any stage as they are more sturdier birds and they are reared in a free range fashion.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Are all your Chicken Free Range?</h3>
            <p className="mb-2">No, only the Country Chicken varieties are Free Range birds. The others are reared naturally but not in the open farms which qualify for Free Range rearing.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">How do you manage to deliver it so fresh?</h3>
            <p className="mb-2">Simple - we procure the day&apos;s catch from fisherman hours after they actually fish and come to the shore. Our well oil-ed processing center ensures that the fresh catch reaches our plants within no time of the catch landing on the shore. At our delivery end, we have a network of vehicles that pick up the product from the airport/train stations and deliver to your doorsteps. We do not depend on any courier companies and have sourcing and delivery fully under our control - while this is expensive, it allows us to give you the worlds best fish in the fastest time possible from source to destination.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">How fresh is the seafood brought from Freshtohome?</h3>
            <p className="mb-2">The fish reaches your home within a few hours of catch landing from the pond/sea- our estimate is that it is in your kitchen within 20 to 35 hours of catch landing at the market. The catch is not treated with chemicals such as Formalin, Chlorine or Ammonia, which means what we supply, is the safest and healthiest seafood you can buy. Almost all seafood you find in your local market is invariably treated with one or other chemicals to preserve it. These chemicals are harmful to human beings and actually deprive the seafood of its freshness and natural taste.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">How on time are you guys?</h3>
            <p className="mb-2">We have our own logistics and delivery work force, so we have a fair amount of control on our schedules. The two factors that are not in our control are train and airline schedules - our two primary means of supply in to the Cities. However these are extra ordinary situations and barring acts of God, we deliver on time 99.99% of the time.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Does the taste of fish vary from coast to coast?</h3>
            <p className="mb-2">Yes, there is a big difference in taste of the same fish caught in one ecosystem versus the other. For example - it is very well known that the best tasting Hilsa actually comes from the fresh waters in Bangladesh. Similarly for Marine fish, some of the best tasting fish comes from the southern coasts of India, especially the Kerala belt where there are a lot of lagoons. The waters there are comparatively pollution free and this enhances the taste. The fish caught from polluted waters will generally have pollutant/toxin accumulation in the tissue leading to bad taste and unsavoury odour. The southern seas in general are well protected from factory effluents and sewage. It is also scientifically proven that the taste of the fish is directly linked to the fatty acid and amino acid profiles of the organisms on which they feed on! If the prey has a better nutritional profile, it will contribute to the profile of the predator. For example, Kerala waters are almost free from toxic dinoflagellates and other phytoplankton blooms which make the fish safe and tasty for consumption.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Why do you charge for delivery service?</h3>
            <p className="mb-2">We provide fish that is a week to a months fresher than the fish that you currently get from the market and deliver that at potentially much lower prices than the local market. What this means is that we operate</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">with razor thin margins and for us to break even we need to add a delivery charge based on the location. As</h3>
            <p className="mb-2">our volumes increase, we are hoping we can lower this cost.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">What are the payment options supported?</h3>
            <p className="mb-2">We support both online as well as cash on delivery payment methods. No extra fees is charged for using any of the payment methods.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Is my credit card information safe on your site?</h3>
            <p className="mb-2">Yes. We do not store credit card details in our system. All online payment related transactions are carried out using trusted PhonePe/Razor pay backed payment gateway system.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">account to be debited?</h3>
            <p className="mb-2">After a successful transaction, your account will get debited immediately.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">While I was paying by net banking, my ‘session expired’. Say what?</h3>
            <p className="mb-2">This happens, simply, when you take too long to make the direct debit payment and do not manage it in the specified amount of time. Go back to the mintafresh.com site and you will be presented with a page to re- attempt the online payment or convert the order to Cash on Delivery (COD) option.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Now what?</h3>
            <p className="mb-2">To place a successful order, your payment transaction has to get verified successfully at your bank’s direct debit gateway. The verification can fail because of various reasons. If you made a successful payment but the verification failed, do not worry. The amount debited from your account will get credited back within 7 working days.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">What if the transaction fails while I am paying online using any payment method?</h3>
            <p className="mb-2">Go back to the mintafresh.com site and you will be presented with a page to re-attempt the online payment or convert the order to Cash on Delivery (COD) option.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">banking / UPI / Wallet). How will I get my money back and when?</h3>
            <p className="mb-2">The account that you used for payment will get credited with the refund amount within 5-7 working days.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">My bank is not listed in online payment option, how can I pay?</h3>
            <p className="mb-2">You can use other payment options (Credit Card / Debit Card / UPI / Wallet) to pay. In case you are unable to pay using any of those options, you can use Cash on Delivery option.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Will I be charged any additional fee for using online payment option?</h3>
            <p className="mb-2">No.</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Grievances</h3>
            <p className="mb-2">If you have any complaints or suggestions about the content published on freshtohome.com, please write to us info@mintafresh.com</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
