import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white md:pt-0 pt-64"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            You can get in touch with me via <span className="text-red-500 hover:line-through">mail</span> or <span className="text-orange-500 hover:line-through">instagram</span> or <span className="text-blue-400 hover:line-through">linkedIn</span>.
          </p>
          <p className="py-8">OR <span className="text-yellow-500 font-bold">Submit</span> the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/14517d25-36f3-4015-beae-b85c6823f0a9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none
            "      
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your mail"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none
            "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2
            bg-transparent border-2 rounded-md  text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
