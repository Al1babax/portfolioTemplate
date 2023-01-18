import { useState } from "react";


export function Contact() {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Going to handle sending message using emailJS later

  return (
    <div className="sidebar w-full bg-neutral-800 h-[960px] flex justify-between flex-col 2xl:flex-row py-36 px-36">
      <div className="leftContent h-full w-[400px] bg-yellow-0 flex flex-col gap-14 text-slate-300">
        <p className="text-3xl font-bold text-red-400">Get in touch</p>
        <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque nunc fames.</p>
        <p>Magni dolores eos qui sed quia consequuntur ratione voluptatem sequi nesciunt permano Nence of the stars from which we spring muse about as a patch of light billions upon billions.</p>
        <p>Energy hidden in matter a mote of lorem ipsum dust suspended in a sunbeam billions upon ratione voluptatem sequi nesciunt permano lorem ipsum.</p>
        <div className="contactInfo">
          <div className="address flex gap-2">
            <p className="font-bold">ADDRESS:</p>
            <p>Some Street 987, USA</p>
          </div>
          <div className="email flex gap-2">
            <p className="font-bold">EMAIL:</p>
            <p>company@youremail.com</p>
          </div>
          <div className="website flex gap-2">
            <p className="font-bold">WEBSITE:</p>
            <p>www.yourwebsite.com</p>
          </div>
        </div>
      </div>
      <div className="rightContent h-[93%] w-[600px] bg-neutral-700 rounded-[50px] flex items-center justify-center">
        <form action="" className="flex flex-col gap-10 items-center justify-center w-[85%]">
          <input
            type="text"
            name="name"
            id="name"
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            placeholder="Name"
            className="w-4/5 h-12 rounded bg-neutral-800 text-slate-300 border border-neutral-700 focus:outline-none focus:border-red-400 px-4"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={message.email}
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
            placeholder="Email"
            className="w-4/5 h-12 rounded bg-neutral-800 text-slate-300 border border-neutral-700 focus:outline-none focus:border-red-400 px-4"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            value={message.subject}
            onChange={(e) => setMessage({ ...message, subject: e.target.value })}
            placeholder="Subject"
            className="w-4/5 h-12 rounded bg-neutral-800 text-slate-300 border border-neutral-700 focus:outline-none focus:border-red-400 px-4"
          />
          <textarea
            name="message"
            id="message"
            value={message.message}
            onChange={(e) => setMessage({ ...message, message: e.target.value })}
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-4/5 h-32 rounded bg-neutral-800 text-slate-300 border border-neutral-700 focus:outline-none focus:border-red-400 px-4 py-2 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-4/5 h-12 rounded bg-red-400 text-neutral-800 font-bold hover:bg-red-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}