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
    const [ isLoading, setIsLoading ] = useState(false);
    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            
            setWorks(json.works)
            setIsLoading(false)
        })
    }, [])

    const deleteWork = async(id: string) => {
            fetch(`/api/works/${id}`)
            .then(response => response.json())
            .then((json) => {
                
                setWorks(json.works)
                setMessage(`Le travail avec l'ID ${id} a été supprimé.`)  
                setIsLoading(false)
            })

        
    }

    // if(!isLoading){
    //     return <> <h2>Chargement</h2></>
    // }

    
    if(works){
        return (
            <>
                <header>
                    <h1>Admin - Creations</h1>
                    <br />
                </header>

                <Link href="/admin">Get Back</Link>

                {message && <p>{message}</p>}

                <section className="w-full px-[5vw] pb-[5vw]">
                    <div className="w-full box-border grid grid-cols-3 gap-[20px]">
                        <form action="POST">
                            <label htmlFor="">Title :</label><br />
                            <input type="text" name='title'/><br />

                            <label htmlFor="">SEO :</label><br />
                            <input type="text" name='seo'/><br />

                                <label htmlFor="">Title of the SEO :</label><br />
                                <input type="text" name='title'/><br />

                                <label htmlFor="">Description of the SEO :</label><br />
                                <input type="text" name='description'/><br />
                            
                            <label htmlFor="">Description :</label><br />
                            <input type="text" name='description'/><br />
                            
                            <label htmlFor="">Image :</label><br />
                            <input type="text" name='coverImage'/><br />

                            <button type='submit'>New Project</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}