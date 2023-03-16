import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CldImage } from 'next-cloudinary';



type Props = {
    work: IWork[];
}

export default function WorksUptade({ work }: Props){
    const [ message, setMessage ] = useState("");
    const router = useRouter()
    const { _id } = router.query
    const [workEdit, setWorksUptade] = useState({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: "",
        description: "",
    });
    
    const getWork = () => {
        fetch(`/api/works/${_id}`, { method: "GET"})
        .then(response => response.json())
        .then((json) => {
            
            setWorksUptade(json.works)
        })
        .catch((error) => {
            console.log(error);  
        })
    } 

    useEffect(() => {
        if(_id){
            getWork()
        }
    }, [_id])
    
    const updateWork = async () => {
        fetch(`/api/works/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workEdit),
        })
        .then((response) => response.json())
        .then((json) => {
            setWorksUptade(json.works)
            setMessage(json.message);

            if(_id){
                getWork()
            }
        })
        .catch((error) => {
            console.log(error);  
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setWorksUptade((prev) => ({
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
        updateWork();
        
    };
    
    if(workEdit){
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
                            <div className="card">
                                <form action="/admin" onSubmit={handleSubmit}>
                                    <label htmlFor="">Title :</label><br />
                                    <input type="text" id='title' value={workEdit.title} onChange={handleChange}/><br /><br />

                                    <label htmlFor="">SEO :</label><br />
                                        <label htmlFor="">Title of the SEO :</label><br />
                                        <input type="text" id='seo.title' value={workEdit.seo.title} onChange={handleChange}/><br /><br />

                                        <label htmlFor="">Description of the SEO :</label><br />
                                        <input type="text" id='seo.description' value={workEdit.seo.description} onChange={handleChange}/><br /><br />
                                    
                                    <label htmlFor="">Description :</label><br />
                                    <input type="text" id='description' value={workEdit.description} onChange={handleChange}/><br /><br />
                                    
                                    <label htmlFor="">Image :</label><br />
                                    <CldImage
                                    width="600"
                                    height="600"
                                    src={workEdit.coverImage}
                                    alt="Description of my image"
                                    />
                                    <input type="text" id='coverImage' value={workEdit.coverImage} onChange={handleChange}/><br /><br />

                                    <button type='submit'>Modif Project</button>
                                </form>
                            </div>
                    </div>
                </section>
            </>
        )
    }
}