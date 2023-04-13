import Navigation from "../components/Nav";
import ContactForm from "./contact-component";
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <div className="px-32">
        <main className="w-full h-screen">
          <Navigation />
          <ContactForm />
          <div className="my-16 flex justify-center">
            <div className="grid grid-cols-3 w-10/12 gap-x-56">
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
        </main>
      </div>
    </>
  );
}