import Navigation from "../components/Nav";
import ContactForm from "./contact-component";
import Image from 'next/image'

import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div className="px-32">
        <main className="w-full h-screen">
          <Navigation />
          <div className="py-24 w-full h-screen flex justify-between">
          <div className='w-full h-full px-6'>
                <h2 className='my-4 font-medium text-xl'>Need more informations about me or else ?</h2>
                <form className='px-6 h-full' onSubmit={handleSubmit}>
                    <input className='my-2 p-2 py-4 w-11/12 border-solid border-2 rounded-lg border-MyColor' type="text" id="name" name="name" placeholder='Name' value={formState.name} onChange={handleChange}/><br />
                    <input className='my-2 p-2 py-4 w-11/12 border-solid border-2 rounded-lg border-MyColor' type="email" id="email" name="email" placeholder='Email' value={formState.email} onChange={handleChange}/><br />
                    <textarea className='my-2 p-2 py-6 w-11/12 border-solid border-2 rounded-lg border-MyColor' id="message" name="message" placeholder='Message' value={formState.message} onChange={handleChange}/><br />
                    <button className='w-11/12 p-4 bg-TransColor rounded-md border-2 border-MyColor text-MyColor' type="submit">Send Message</button>
                </form>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col w-3/4 justify-between">
                  <div className="p-2 h-40 flex flex-col items-center justify-between">
                      <div className="p-2 bg-TransColor rounded-md">
                        <Image alt="Icon" width={30} height={30} src="/icon/pin.svg" />
                      </div>
                      <div className="h-full my-2 flex flex-col items-center justify-center leading-relaxed">
                          <span className="font-semibold">Address</span>
                          <p className="text-center">13 Allée des passiflores,
                            appt 108 Residence Emergence</p>
                      </div>
                  </div>
                  <div className="p-2 h-40 flex flex-col items-center justify-between">
                      <div className="p-2 bg-TransColor rounded-md">
                        <Image alt="Icon" width={30} height={30} src="/icon/phone_call.svg" />
                      </div>
                      <div className="h-full my-2 flex flex-col items-center justify-center leading-relaxed">
                          <span className="font-semibold">Phone</span>
                          <p className="text-center">(+33) 6 73 22 01 37</p>
                      </div>
                  </div>
                  <div className="p-2 h-40 flex flex-col items-center justify-between">
                      <div className="p-2 bg-TransColor rounded-md">
                        <Image alt="Icon" width={30} height={30} src="/icon/mail.svg" />
                      </div>
                      <div className="h-full my-2 flex flex-col items-center justify-center leading-relaxed">
                          <span className="font-semibold">E-Mail</span>
                          <p className="text-center">EmilieMontpre@outlook.com</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Contact;