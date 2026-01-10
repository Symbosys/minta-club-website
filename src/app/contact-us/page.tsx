import { Header, Footer } from "../page";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FDFBF7] py-20 px-6 md:px-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-8">Contact Us</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <h2 className="font-bold text-2xl mt-8 mb-4">Address</h2>
          <h3 className="font-semibold text-xl mt-6 mb-4">Headquarter</h3>
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
