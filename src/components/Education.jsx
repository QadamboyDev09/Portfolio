import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'A junior developer advances to become a senior developer',
      institution: 'DATA LEARNING CENTER',
      year: ' [2024-present]',
      desc: "I am currently completing my internship at the Data Learning Center.",
    },
    {
      logo: "logo-play",
      degree: 'Information about myself',
      institution: 'Hello, my name is Kadamboy, I was born in 2009. I have been programming for 2 years now.',
      grades: 'Middle Inshaallah Senior developer',
      year: ' [2022-2024]',
      desc: "I am currently in the 9th grade of high school I am currently studying at the Data learning center in the city.",       
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1" data-aos="flip-left">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4"  data-aos="fade-up"
          data-aos-duration="3000">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
