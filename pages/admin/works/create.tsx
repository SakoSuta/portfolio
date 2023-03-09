import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'



type Props = {
    work: IWork[];
}

export default function WorksCreate({ work }: Props){
    const [ message, setMessage ] = useState("");
    const [workCreate, setWorksCreate] = useState({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: "",
        description: "",
    });
    
    const postWork = () => {
        fetch(`/api/works`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workCreate),
        })
            .then((response) => response.json())
            .then((json) => {
                setMessage(json.message);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setWorksCreate((prev) => ({
          ...prev,
          title: id === 'title' ? value : prev.title,
          description: id === 'description' ? value : prev.description,
          slug: id === 'slug' ? value : prev.slug,
          coverImage: id === 'coverImage' ? value : prev.coverImage,
          seo: {
            ...prev.seo,
            title: id === 'seo.title' ? value : prev.seo.title,
            description: id === 'seo.description' ? value : prev.seo.description,
          },
        }));
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postWork();
    };
    
    if(workCreate){
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
                        <form action="/admin" onSubmit={handleSubmit}>
                            <label htmlFor="">Title :</label><br />
                            <input type="text" id='title' onChange={handleChange}/><br />

                            <label htmlFor="">SEO :</label><br />

                                <label htmlFor="">Title of the SEO :</label><br />
                                <input type="text" id='seo.title' onChange={handleChange}/><br />

                                <label htmlFor="">Description of the SEO :</label><br />
                                <input type="text" id='seo.description' onChange={handleChange}/><br />
                            
                            <label htmlFor="">Description :</label><br />
                            <input type="text" id='description' onChange={handleChange}/><br />

                            <label htmlFor="">Slug :</label><br />
                            <input type="text" id='slug' onChange={handleChange}/><br />
                            
                            <label htmlFor="">Image :</label><br />
                            <input type="text" id='coverImage' onChange={handleChange}/><br />

                            <button type='submit'>New Project</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}