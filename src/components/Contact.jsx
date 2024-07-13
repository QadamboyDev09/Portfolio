import axios from "axios";
import React, { useState } from "react";
// import ReactiveButton from 'reactive-button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  // const [state, setState] = useState('idle');

  // const onClickHandler = () => {
  //   setState('loading');

  //   // send an HTTP request
  //   setTimeout(() => {
  //     setState('success');
  //   }, 2000);
  // };

  const contact_info = [
    { logo: "mail", text: "qadamboydevuzb@gmail.com" },
    { logo: "call-outline", text: "+998 88 036 09 20" },
    {
      logo: "location",
      text: "7, Maxtumquli, Urgench, Uzbekistan",
    },
  ];

  const handleData = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const desc = e.target.desc.value

    if (!name.length || !email.length || !desc.length) {
      alert("Fill the inputs please!")
    } else if (!email.includes("@")) {
      alert("You can only insert your email here!")
    }

    const chat_id = "-4257527483"
    const token = "7405439926:AAH6JNKrvpzA1r6XXvFn4XdesCxvrKO6rds"
    const my_text = `Name: ${name}. Email: ${email}. Description: ${desc}.`
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    axios.get(url)
      .then((response) => {
        console.log('Message sent', response.data);
      })
      .catch((error) => {
        console.error('Error sending message', error);
      });

    setName('')
    setEmail('')
    setDesc('')
  }

  return (
    <section id="contact" className="py-10 px-3 text-white "  >
      <div className="text-center mt-8"  data-aos="flip-right"> data-aos-duration="2000"
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form onSubmit={handleData} className="flex flex-col flex-1 gap-5 p-3">
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Your Name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="Your Email Address" />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="desc" placeholder="Your Message" rows={10}></textarea>
            {/* <ReactiveButton className="bg-blue-500 border-none  rounded-[10px] h-[50px] "
      buttonState={state}
      idleText="Submit"
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    /> */}
    <button className="bg-blue-500 border-none  rounded-[10px] h-[50px] ">Send?</button>

          </form>
          <div className="flex flex-col gap-7 p-3">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center" data-aos="fade-up"
                  data-aos-duration="3000"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
