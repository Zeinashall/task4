import React, { useState } from "react";
import TextWithStyle from "../comps/TextStyle";
import Accordion from "../comps/Accordion";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    expectedPrice: '',
    year: '',
    make: '',
    model: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dutyStation: '',
    hearAboutUs: '',
    notes: '',
    photos: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.year.trim()) newErrors.year = "Year is required";
    if (!formData.make.trim()) newErrors.make = "Make is required";
    if (!formData.model.trim()) newErrors.model = "Model is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.dutyStation.trim()) newErrors.dutyStation = "Duty Station is required";
    if (!formData.hearAboutUs.trim()) newErrors.hearAboutUs = "This field is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      setIsSubmitted(true);
    } else {
      console.log("Form has errors", errors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold font-serif mb-6">Thank You!</h1>
          <p className="text-xl font-semibold mt-4 font-serif">Your submission has been received. We will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
    <div className="h-40 md:h-20 lg:h-20"></div>


      <div className="container mx-auto py-16 mt-24  px-4 md:px-0">
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

              <Accordion
                title="Vehicle Information"
                content={
                  <form className="space-y-6 font-serif" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium mb-2">
                          Expected Price:
                        </label>
                        <input
                          type="text"
                          name="expectedPrice"
                          value={formData.expectedPrice}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Year<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Make<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="make"
                          value={formData.make}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.make && <p className="text-red-500 text-sm">{errors.make}</p>}
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Model<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="model"
                          value={formData.model}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block font-medium mb-2">
                          Notes or Highlights About Your Vehicle:
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
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
                          name="photos"
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          multiple
                        />
                      </div>
                    </div>
                  </form>
                }
              />

              <Accordion
                title="Contact Details"
                content={
                  <form className="space-y-6 font-serif">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium mb-2">
                          First Name<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Last Name<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Email<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Phone<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block font-medium mb-2">
                          Duty Station<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="dutyStation"
                          value={formData.dutyStation}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.dutyStation && <p className="text-red-500 text-sm">{errors.dutyStation}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block font-medium mb-2">
                          How did you hear about us?<span className="text-red-500">*</span>:
                        </label>
                        <input
                          type="text"
                          name="hearAboutUs"
                          value={formData.hearAboutUs}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.hearAboutUs && <p className="text-red-500 text-sm">{errors.hearAboutUs}</p>}
                      </div>
                    </div>
                  </form>
                }
              />

              <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
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

        <div className="container mx-auto mt-12">
          <TextWithStyle
            fontStyle="font-serif"
            color="text-blue-600"
            alignment="text-right"
            size="text-5xl"
            hoverColor="hover:text-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
