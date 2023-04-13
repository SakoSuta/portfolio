import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useCallback,useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CldImage } from 'next-cloudinary';
import Works from '..'



type Props = {
    work: IWork[];
}

const Work: NextPage<Props> = ({ work }) => {
    const [ message, setMessage ] = useState("");
    const router = useRouter()
    const { _id } = router.query
    const [works, setWorks] = useState({ 
        title: "",
        seo: { title: "", description: "" },
        slug: "",
        coverImage: "",
        description: "",
    });
    
    const getWork = useCallback(() => {
        fetch(`/api/works/${_id}`, { method: "GET"})
          .then(response => response.json())
          .then((json) => {
            setWorks(json.works)
          })
          .catch((error) => {
            console.log(error);
          });
      }, [_id]); 

    useEffect(() => {
        if(_id){
            getWork()
        }
    }, [_id, getWork])
    
    const Work = async () => {
        fetch(`/api/works/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(works),
        })
        .then((response) => response.json())
        .then((json) => {
            setWorks(json.works)
            setMessage(json.message);

            if(_id){
                getWork()
            }
        })
        .catch((error) => {
            console.log(error);  
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
        setWorks((prev) => ({
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
        Work();
        
    };
    
    if(works){
        return (
            <>
                <div className='h-screen bg-DarkMode text-Light'>
                    <header>
                        <div className='w-full flex justify-center'>
                            <Link href="/admin" className="text-Light text-lg font-semibold py-2 px-4 m-4 rounded-3xl bg-MyColor hover:text-MyColor hover:bg-Light">Get Back</Link>
                        </div>
                    </header>
                    {message && <div className='flex justify-center w-full p-9'><p className='text-lg font-semibold'>{message}</p></div>}
                    <section className='flex justify-center'>
                        <div className='w-11/4 p-6 bg-BackD rounded-md'>
                            <label htmlFor="" className='font-semibold'>Title :</label><br />
                            <h2 className='text-center text-lg font-serif font-semibold p-2'>{works.title}</h2>
                            <label htmlFor="" className='font-semibold'>SEO :</label><br />
                                <div className='ml-4'>
                                    <label htmlFor="" className='font-semibold'>Title of the SEO :</label><br />
                                    <h2 className='text-center text-lg font-serif font-semibold p-2'>{works.seo.title}</h2>
                                    <label htmlFor="" className='font-semibold'>Description of the SEO :</label><br />
                                    <h2 className='text-center text-lg font-serif font-semibold p-2'>{works.seo.description}</h2>
                                </div>
        
                            <label htmlFor="" className='font-semibold'>Slug :</label><br />
                            <h2 className='text-center text-lg font-serif font-semibold p-2'>{works.slug}</h2>

                            <label htmlFor="" className='font-semibold'>Description :</label><br />
                            <h2 className='text-center text-lg font-serif font-semibold p-2'>{works.description}</h2>
        
                            <label htmlFor="" className='font-semibold'>Image :</label><br />
                            <CldImage width={200} height={200} alt={works.title} src={works.coverImage} />
                        </div>
                    </section>
                </div>
                <div className='h-screen bg-DarkMode'></div>
            </>
        )
    }
    return <h3>No works</h3>
}

export default Works;