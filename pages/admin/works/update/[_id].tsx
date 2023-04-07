import { GetServerSideProps } from 'next'
import { IWork } from '@/@types/mongodb-types'
import { NextPage } from "next"
// import useSWR, {Fetcher} from 'swr'
import Link from "next/link"
import { useCallback,useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';



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
    
    const getWork = useCallback(() => {
        fetch(`/api/works/${_id}`, { method: "GET"})
          .then(response => response.json())
          .then((json) => {
            setWorksUptade(json.works)
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
                <div className='h-screen bg-DarkMode text-Light'>
                    <header>
                        <h1 className='text-4xl text-center p-4'>Admin - Modifications Project</h1>
                        <div className='w-full flex justify-center'>
                            <Link href="/admin" className="text-Light text-lg font-semibold py-2 px-4 m-4 rounded-3xl bg-MyColor hover:text-MyColor hover:bg-Light">Get Back</Link>
                        </div>
                    </header>
                    {message && <div className='flex justify-center w-full p-9'><p className='text-lg font-semibold'>{message}</p></div>}
                    <section className='flex justify-center'>
                        <div className='w-11/4 p-6 bg-BackD rounded-md'>
                            <form action="/admin" onSubmit={handleSubmit}>
                                <label htmlFor="" className='font-semibold'>Title :</label><br />
                                <input className="rounded-lg border-2 border-DarkMode bg-Categories w-full h-9" type="text" id='title' value={workEdit.title} onChange={handleChange}/><br /><br />
                                <label htmlFor="" className='font-semibold'>SEO :</label><br />
                                    <div className='ml-4'>
                                        <label htmlFor="" className='font-semibold'>Title of the SEO :</label><br />
                                        <input className="rounded-lg border-2 border-DarkMode bg-Categories w-full h-9" type="text" id='seo.title' value={workEdit.seo.title} onChange={handleChange}/><br /><br />
                                        <label htmlFor="" className='font-semibold'>Description of the SEO :</label><br />
                                        <input className="rounded-lg border-2 border-DarkMode bg-Categories w-full h-9" type="text" id='seo.description' value={workEdit.seo.description} onChange={handleChange}/><br /><br />
                                    </div>
            
                                <label htmlFor="" className='font-semibold'>Description :</label><br />
                                <input className="rounded-lg border-2 border-DarkMode bg-Categories w-full h-9" type="text" id='description' value={workEdit.description} onChange={handleChange}/><br /><br />
            
                                <label htmlFor="" className='font-semibold'>Image :</label><br />
                                <CldUploadWidget  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                                     onUpload={(res: { info: { secure_url: any; }; }) => {
                                         console.log('res : ',res.info)
                                         setWorksUptade((prev) =>
                                             ({ ...prev, coverImage: res.info.public_id })) }
                                }>
                                    {({ open }) => {
                                        function handleOnClick(e: { preventDefault: () => void; }) {
                                            e.preventDefault();
                                            open();
                                        }
                                        return (
                                            <button onClick={handleOnClick} className="text-Light text-lg font-semibold py-2 px-4 m-4 rounded-3xl bg-Categories hover:text-Categories hover:bg-Light">
                                                Upload an Image
                                            </button>
                                        );
                                    }}
                                </CldUploadWidget>
                                <CldImage width={200} height={200} alt={workEdit.title} src={workEdit.coverImage} />
                                <div className='flex justify-center content-center w-full h-16'><button type='submit' className='text-MyColor text-lg font-semibold h-12 py-2 px-4 m-6 rounded-3xl bg-Light hover:text-Light hover:bg-MyColor'>Modif Project</button></div>
                            </form>
                        </div>
                    </section>
                </div>
                <div className='h-screen bg-DarkMode'></div>
            </>
        )
    }
}