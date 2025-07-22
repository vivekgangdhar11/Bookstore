import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-6">
        <div className="w-full md:w-1/2 mt-12 md:mt-30 md:order-1 order-2">
          <div className="space-y-12  ">
            <h1 className="text-4xl font-bold">
              Hello , welcome here to learn something{" "}
              <span className="text-pink-500">new everyday !!!</span>
            </h1>
            <p className="text-gray-800 text-xl dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              officia autem vero, perferendis doloribus tenetur quos cupiditate
              architecto quam aspernatur numquam tempore provident, explicabo
              voluptatibus porro dolorum ab cumque modi.
            </p>
            <div>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
          </div>
          <button className="btn btn-secondary mt-6 ">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img src={banner} alt="" className="w-92 h-92"/>
        </div>
      </div>
    </>
  );
}

export default Banner;
