
const loginpage = () => {
  return (
    <div>
      <div className="container mx-auto py-16 mt-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold font-serif">
            Sell Your Car The Easy Way!
          </h1>
          <p className="text-xl font-semibold mt-4 font-serif">
            We Buy Cars for Cash - Call or WhatsApp: +49 (0)1766 374 6686
          </p>
          <p className="text-xl font-semibold font-serif">
            Get a Price For Your Car - Fast!
          </p>
        </div>

        <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 font-serif text-center">
                About Your Vehicle
              </h2>
              <form className="space-y-6 font-serif">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">
                      Expected Price:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">
                      Year<span className="text-red-500">*</span>:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">
                      Make<span className="text-red-500">*</span>:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">
                      Model<span className="text-red-500">*</span>:
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-medium mb-2">
                      Notes or Highlights About Your Vehicle:
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-medium mb-2">
                      Upload Photos of Your Vehicle:
                    </label>
                    <input
                      type="file"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      multiple
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6 text-center font-serif">
                    Contact Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium mb-2">
                        First Name<span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-2">
                        Last Name<span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-2">
                        Email<span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-2">
                        Phone<span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="tel"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-2">
                        Duty Station<span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-medium mb-2">
                        How did you hear about us?
                        <span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="flex flex-col items-center lg:col-span-1 gap-6">
              <img
                src="/register.jpg"
                alt="Vehicle"
                className="w-full h-full object-cover rounded-lg"
                style={{ maxHeight: "500px" }}
              />
              <img
                src="/register2.jpeg"
                alt="Vehicle"
                className="w-full h-full object-cover rounded-lg"
                style={{ maxHeight: "500px" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginpage;
