import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 dark:bg-slate-900">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-white dark:bg-slate-800">
        <h2 className="font-bold text-2xl mb-4 text-center dark:text-white">
          Contact Us
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs mx-auto"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs mx-auto"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full max-w-xs mx-auto"
            rows={4}
            required
          />
          <button
            className="btn bg-black text-white w-full max-w-xs mx-auto"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
