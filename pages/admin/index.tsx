import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'



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
            fetch(`/api/works/${id}`)
            .then(response => response.json())
            .then((json) => {
                setWorks(json.works)
                setMessage(`Le travail avec l'ID ${id} a été supprimé.`)
            })

        
    }
    
    if(works){
        return (
            <>
                <header>
                    <h1>Admin - All my Projects</h1>
                    <br />
                </header>

                <Link href="/admin/works/create">Create</Link>

                {message && <p>{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw]">
                    <div className="w-full box-border grid grid-cols-3 gap-[20px]">
                        {works.map((work) => (
                            <div className="card" key={work._id}>
                                <Link href={`/admin/works/${work._id}`}>
                                    <div className="w-full p-5 text-white bg-black/50">
                                        <h2 className="font-semibold text-lg mb-2.5">Title : {work.title}</h2>
                                        <p className="text-sm">Title of the SEO : {work.seo.title}</p>
                                        <p className="text-sm">Description of the SEO : {work.seo.description}</p>
                                        <p className="text-sm">Description : {work.description}</p>
                                        <p className="text-sm">Image : {work.coverImage}</p>
                                    </div>
                                </Link>
                                <div>
                                <Link href={`/admin/works/update/${work._id}`}>Modif</Link>
                                <span> || </span>
                                    <button onClick={() => deleteWork(work._id)}>Delete</button>
                                </div>
                            </div>
                         ))}
                    </div>
                </section>
            </>
        )
    }
}