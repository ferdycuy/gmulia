import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-teal-200 to-teal-400"
    >
      <div className="container mx-auto px-6 mt-20">
        <h2 className="text-4xl font-extrabold text-center text-secondary mb-8">
          Contact Person
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-2/3 lg:w-1/2 mx-auto">
          <div className="text-center text-gray-700">
            <p className="text-xl mb-6">
              <i className="fas fa-user mr-2"></i>
              <span className="font-bold">Ferdyana Eka Prasetya</span>
            </p>
            <p className="text-lg">
              <i className="fas fa-phone-alt mr-2"></i>
              <span>H/P: 0815-8501-5801</span>
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold">
                <i className="fas fa-envelope mr-2"></i>
                Email:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:anaferdy01@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  anaferdy01@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-6">
              <p>
                (Corresponding language:{" "}
                <span className="text-blue-600">Indonesian</span> / English)
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/6281585015801?text=Halo%20Ferdyana%20Eka%20Prasetya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-green-600 transition duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
