import React, { useState } from "react";

const Hero = () => {
  const [addBlogModel, setAddBlog] = useState(false); // State for opening and closing the modal
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    author: "",
    img: "",
  });

  // Function to handle the form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setAddBlog(!addBlogModel);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log or save the form data (you can send it to the server here)
    console.log("New Blog Data:", formData);
    toggleModal(); // Close the modal after submitting
  };

  return (
    <section className="hero w-full h-[35rem] bg-blue-200 relative">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover absolute top-0 left-0"
        autoPlay
        muted
        loop
        playsInline
        src="/video/hero.mp4" // Replace with your actual video path
        type="video/mp4"
      />
      {/* Other content inside Hero */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white flex-col">
        <h1 className="text-5xl font-bold">Welcome to Our Coding Blog</h1>
        <button
          onClick={toggleModal}
          className="bg-slate-800 text-white py-2 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
        >
          Add Your Blog
        </button>
      </div>

      {/* Modal */}
      {addBlogModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Add Your Blog</h2>
            {/* Modal content */}
            <form className="w-[100%]" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold mb-2"
                >
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold mb-2"
                >
                  Blog Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold mb-2"
                >
                  Publish Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-sm font-semibold mb-2"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="img"
                  className="block text-sm font-semibold mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  value={formData.img}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-400 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
