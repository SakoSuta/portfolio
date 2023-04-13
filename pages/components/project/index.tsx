import { IWork } from '@/@types/mongodb-types'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { CldImage } from 'next-cloudinary';

type Props = {
    work: IWork[];
}

function Project(){
    const [ message, setMessage ] = useState("");
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            setWorks(json.works)
        })
    }, [])
    

        return (
            <>
                {message && <div className='flex justify-center w-full p-9'><p className='text-lg font-semibold'>{message}</p></div>}
                {works?.map((work) => (
                    <div key={work._id} className='w-96 p-6 m-9 rounded-md'>
                        <Link href="">
                            <div className='w-fit py-6'>
                                <CldImage width={250} height={200} alt={work.title} src={work.coverImage} className='rounded-t-lg'/>
                                <div className='flex justify-center items-center h-24 bg-MyColor rounded-b-lg'><h3 className='h-fit text-lg font-semibold'>{work.title}</h3></div>
                            </div>
                        </Link>
                    </div>
                ))}
            </>
        )
    
}

export { Project }