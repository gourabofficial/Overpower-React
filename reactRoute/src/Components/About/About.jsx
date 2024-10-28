import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img className="rounded-lg"
              src="/assets/laptop.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-950 font-bold">
              I am a passionate Computer Science graduate from West Bengal,
              currently pursuing my B.Tech at Sanaka University under MAKAUT. I
              have a strong foundation in Java, data structures, algorithms, and
              web development. I am actively working on full-stack web
              development and have experience with various tools and
              technologies, including HTML, CSS, JavaScript, React.js, Tailwind
              CSS, and more.
            </p>
            <p className="mt-4 text-gray-900 font-bold">
              I have a proactive approach to learning and problem-solving,
              seeking to improve my development skills through projects and
              exploration of modern technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
