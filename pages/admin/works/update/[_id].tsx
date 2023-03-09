import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



type Props = {
    work: IWork[];
}

export default function Works({ work }: Props){
    const [ message, setMessage ] = useState("");
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter()
    const { _id } = router.query
    
    useEffect(() => {
        fetch(`/api/works/${ _id }`)
        .then(response => response.json())
        .then((json) => {
            
            setWorks(json.works)
            setIsLoading(false)
        })
    }, [])
    
    
    if(works){
        return (
            <>
                <header>
                    <h1>Admin - Modifications Project</h1>
                    <br />
                </header>

                <Link href="/admin">Get Back</Link>

                {message && <p>{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw]">
                    <div className="w-full box-border grid grid-cols-3 gap-[20px]">
                        {works.map((work) => (
                            <div className="card" key={work._id}>
                                <form action="POST">
                                    <label htmlFor="">Title :</label><br />
                                    <input type="text" name='title' value={work.title}/><br /><br />

                                    <label htmlFor="">SEO :</label><br />
                                        <label htmlFor="">Title of the SEO :</label><br />
                                        <input type="text" name='title' value={work.seo.title}/><br /><br />

                                        <label htmlFor="">Description of the SEO :</label><br />
                                        <input type="text" name='description' value={work.seo.description}/><br /><br />
                                    
                                    <label htmlFor="">Description :</label><br />
                                    <input type="text" name='description' value={work.description}/><br /><br />
                                    
                                    <label htmlFor="">Image :</label><br />
                                    <input type="text" name='coverImage' value={work.coverImage}/><br /><br />

                                    <button type='submit'>Modif Project</button>
                                </form>
                            </div>
                         ))}
                    </div>
                </section>
            </>
        )
    }
}