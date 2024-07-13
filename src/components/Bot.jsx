import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Bot = () => {
  const navigate = useNavigate()

  return (
   <a href='#contact'>
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
   </a>
  );
};

export default Bot;
