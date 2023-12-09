import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className=" flex justify-between items-center max-md:justify-center max-md:flex-col dark:text-white m-6">
      <div className="max-md:flex-col max-md:justify-center px-8">
        <h1 className="text-4xl font-medium ">
          Convineant Digital Learning Store
        </h1>
        <p className="text-lg my-4">
          Whether you're a student, professional, or lifelong learner, discover
          the freedom to explore, grow, and succeed on your terms. Embrace the
          future of education with our digital learning platform, where
          curiosity knows no bounds
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div>
        <img
          className="max-w-md shadow-md z-10 rounded-xl max-md:max-w-full"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="digital learning"
        />
      </div>
    </section>
  );
};
