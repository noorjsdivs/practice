import React from "react";
import { Link } from "react-router-dom";

function Learnmore() {
  return (
    <div>
      <aside className="relative h-screen overflow-hidden text-gray-300 bg-gray-900 lg:flex">
        <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div className="max-w-xl mx-auto lg:ml-0">
            <p className="text-sm font-medium">Understand what you type</p>

            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              You can never understand everything. But, you should push yourself
              to understand the system - Ryan Dahl.
            </p>

            <p className="hidden lg:mt-4 lg:block">
              Programming isn't about what you know; it's about what you can
              figure out - Chris Pine.
            </p>
            <p className="hidden lg:mt-4 lg:block">
              Give a man a program, frustrate him for a day. Teach a man to
              program, frustrate him for a lifetime - Muhammad Waseem.
            </p>
            <p className="hidden lg:mt-4 lg:block">
              A computer program does what you tell it to do, not what you want
              it to do - Unknown.
            </p>
            <p className="hidden lg:mt-4 lg:block">
              Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand. - Martin
              Fowler.
            </p>

            <Link to="/login">
              <div
                href=""
                className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Join with us
              </div>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Women smiling at college"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </aside>
    </div>
  );
}

export default Learnmore;
