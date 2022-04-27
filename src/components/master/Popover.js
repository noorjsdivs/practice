import React from "react";
import { Link } from "react-router-dom";

function Popover() {
  return (
    <div>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold h-32 text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              MERN 2103 - Batch Intro
              <span className="sm:block">Coding Mode On</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              We are a group of people dedicated to do something out of the box.
              We are welcoming you to join with us for experiencing the Change.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/login">
                <div
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                  //   href="/get-started"
                >
                  Get Started
                </div>
              </Link>

              <Link to="/learnmore">
                <div className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring">
                  Learn More
                </div>
              </Link>
              <Link to="/">
                <div
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                  //   href="/get-started"
                >
                  Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popover;
