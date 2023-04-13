import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'

// import { signOut } from 'next-auth/react'

// import { getSession } from 'next-auth';
// import { useRouter } from 'next/router';



type Props = {
    work: IWork[];
}

export default function Works({ work }: Props){
    const [ message, setMessage ] = useState("");
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            setWorks(json.works)
        })
    }, [])

    const deleteWork = async(id: string) => {
            fetch(`/api/works/${id}`, {method:"DELETE"})
            .then(response => response.json())
            .then((json) => {
                setWorks(json.works)
                setMessage(`Le travail avec l'ID ${id} a été supprimé.`)
            })

        
    }
    
    if(works){
        return (
            <>
                <div className='bg-DarkMode text-Light px-16'>
                    <header>
                        <h1 className='text-4xl text-center p-4'>Admin - All Projects</h1>
                        <div className='w-full flex justify-center'>
                            <Link href="/api/auth/signout/credentials" className='text-Light text-lg py-2 px-4 my-4 font-semibold rounded-3xl bg-Red hover:text-Red hover:bg-Light'>Sign Out</Link>
                        </div>
                    </header>
                    <Link href="/admin/works/create" className='text-MyColor text-lg font-semibold py-2 px-4 m-16 rounded-3xl bg-Light hover:text-Light hover:bg-MyColor'>Create a new Project</Link>
                    {message && <div className='flex justify-center w-full p-9'><p className='text-lg font-semibold'>{message}</p></div>}
                    <section className='bg-DarkMode'>
                        <div className='grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row'>
                            {works.map((work) => (
                                <div key={work._id} className='w-96 p-6 m-9 bg-BackD rounded-md'>
                                    <Link href={`/admin/works/${work._id}`}>
                                        <div className='w-max'>
                                            <h2 className='text-center'>{work.title}</h2>
                                            <div>
                                                <p>Title of the SEO : {work.seo.title}</p>
                                                <p>Description of the SEO : {work.seo.description}</p>
                                                <p>Description : {work.description}</p>
                                                <p>Image : {work.coverImage}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='flex justify-center content-center h-fit'>
                                        <Link href={`/admin/works/update/${work._id}`} className="text-Light text-lg font-semibold py-2 px-4 m-4 rounded-3xl bg-MyColor hover:text-MyColor hover:bg-Light">Modif</Link>
                                        <button onClick={() => deleteWork(work._id)} className="text-Light text-lg py-2 px-4 m-4 font-semibold rounded-3xl bg-Red hover:text-Red hover:bg-Light">Delete</button>
                                    </div>
                                </div>
                             ))}
                        </div>
                    </section>
                    <div className='h-screen bg-DarkMode'></div>
                </div>
            </>
        )
    }
}

// export async function getServerSideProps() {
//     const session = await getSession();
  
//     return {
//       props: {
//         user: session?.user || null,
//       },
//     };
//   }