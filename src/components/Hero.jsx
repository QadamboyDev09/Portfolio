import React, { useRef } from "react";
import image from "../assets/images/qadamboy.jpg";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/_she1kh_oo9_",
  "https://github.com/QadamboyDev09",
];



const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
  ];
  return (
    <section
      id="home"
      className="min-h-screen mt-10 flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full max-sm:px-5" data-aos="fade-right">
        <img src={image} alt="" className="md:w-2/3 h-auto object-cover border-[20px]" />
      </div>
      <div className="flex-1" data-aos="fade-left">
        <div className="md:text-left text-center mt-10">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My name is <span>Qadamboy</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                <Type />
              </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>Connect with Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={index}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
