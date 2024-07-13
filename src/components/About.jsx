import React from "react";
import pdf from '../assets/images/qadamboy.pdf'

const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "03" },
    { text: "Companies Work", count: "01" }
  ];


  const googleDriveLink = "https://drive.google.com/file/d/1OzuOrRm0Rn9g7xwO6RUO9zUZHkvxFjtr/view?usp=drivesdk";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white" >
      <div className="text-center mt-8" data-aos="zoom-in-up">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am currently pursuing a b.tech in IT, as a web development programmer with hands-on experience in creating Dynamic User Interfaces, I bring a mix of creativity and technical expertise to my role.
After an internship as a Frontend Developer in a reputed company, I started developing websites using the power of Bootstrap for responsive and visually appealing designs. In addition, my journey introduced me to Node.js, which allowed me to contribute to server-side functions as well.
In addition to the website, I have many skills. I am familiar with javascript, TypeScript, React.js, Bootstrap, Tailwind and GitHub, which ensures that I am well equipped to adapt to different project requirements.
My focus is on providing a great user experience through intuitive and extensible UI components. I have honed my skills in creating impressive user interfaces, seamless navigation and optimal performance across devices.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text} data-aos="flip-left">
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className="w-full flex justify-start">
                <a className="btn-primary" download href={pdf}>Check Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
