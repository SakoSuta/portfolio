// import Head from 'next/head'
// import { Inter } from '@next/font/google'

// import handler from "./api/auth/signin";
// import SigninPage from "./auth/signin";

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//     return (
//         <>
//             <Head>
//                 <title>Emilie MONTPRE</title>
//                 <meta name="description" content="Generated by Emilie MONTPRE"/>
//                 <meta name="viewport" content="width=device-width, initial-scale=1"/>
//                 <link rel="stylesheet" href="/styles /globals.css" />
//                 {/* <link rel="preconnect" href="https://fonts.googleapis.com">
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//                 <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet"> */}
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <main>
//                 <h1>Hello World !</h1>
//                 <section>
//                     <div>
//                         <form action="">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" />

//                             <label htmlFor="password">Password</label>
//                             <input type="text" name="passeword" />

//                             <button type="submit">Connect</button>
//                         </form>
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }

import Head from 'next/head'

import { Navigation, Footer } from "./components/Nav";
import ContactForm from "./components/contact-component";
import Reseaux from './components/Reseaux';
import { Project } from "./components/project";

import { Inter } from '@next/font/google'
import Link from "next/link"
import NextAuth from './api/auth/[...nextauth]';

// const interRegular = Inter({ 
//     weight: ['400'],
//     subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div className='px-32'>
                <Head>
                    <title>Emilie MONTPRE</title>
                    <meta name="description" content="Generated by Emilie MONTPRE"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="/styles /globals.css" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navigation/>
                <main>
                    <section className='flex items-center justify-between  h-screen'>
                        <div className='flex flex-col justify-center w-3/6 h-3/6'>
                            <span className='text-xl text-Categories'>-&nbsp; M Y &nbsp; N A M E &nbsp; I S</span>
                            <h1 className="text-5xl font-bold pt-4">Emilie <span className='text-MyColor'>Montpre.</span></h1>
                            <p className='py-9'>Hello, my name is Emilie, I am 20 years old and I am student in web and mobile development. I am motivated dedicated to learn and ready to put my knowledge and my skills at the service of your business</p>
                            <Reseaux/>
                        </div>
                        <div className='w-3/6 h-full flex justify-end'>
                            <div className='w-11/12 h-11/12 relative flex justify-center items-center'>
                                <img src="/img/Back_Image.png" className='absolute w-11/12 h-11/12' />
                                <img src="/img/Me.png" alt="My picture" className='absolute w-6/12' />
                            </div>
                        </div>
                    </section>
                    <section className='flex items-center justify-between h-full' id='portfolio'>
                        <div className='w-full'>
                            <span className='text-xl text-Categories'>-&nbsp; M Y &nbsp; W O R K S</span>
                            <h2 className="text-4xl font-bold pt-4">Featured Portfolios</h2>
                            <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-flow-row w-full p-8'>
                                <Project/>
                            </div>
                        </div>
                    </section>
                    {/* <NextAuth></NextAuth> */}
                    {/* <ContactForm /> */}
                </main>
                <Footer/>
            </div>
        </>
    )
}