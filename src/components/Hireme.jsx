import React, { useRef } from "react";
import hireMe from "../assets/images/rasmm.jpg";
import { Link, useNavigate } from "react-router-dom";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white" data-aos="fade-up">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl  font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          I am ready to listen to you if you need me to help you.
           You can contact me in the comments and I will try to contact you. Thank you very much!
           I'm glad to meet you
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[24rem] w-[375px] h-80 z-0 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
