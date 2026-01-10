import { Header, Footer } from "../page";

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 md:px-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <h2 className="font-bold text-2xl mt-8 mb-4">Online Payment</h2>
          <p className="mb-4">Refunds will be processed within 48 hours and will be credited to the customer account within 5-7 working days depending on the issuing bank.</p>
          <h2 className="font-bold text-2xl mt-8 mb-4">Cash on Delivery</h2>
          <p className="mb-4">Refunds will be credited to the customer&apos;s account as store credit or wallet and can be used for the subsequent order in the future.</p>
          <h2 className="font-bold text-2xl mt-8 mb-4">Grievance Contact</h2>
          <p className="mb-4">Details of the Grievance contact is given below:</p>
          <p className="mb-2">Minta Club Private Limited</p>
          <p className="mb-2">HI-76, Harmu Colony, Ranchi - 834002</p>
          <p className="mb-4">Email: info@mintaclub.com</p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
