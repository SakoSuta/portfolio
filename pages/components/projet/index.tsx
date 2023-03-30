import { IWork } from '@/@types/mongodb-types'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { CldImage } from 'next-cloudinary';

type Props = {
    work: IWork[];
}

export default function Project({ work }: Props){
    const [ message, setMessage ] = useState("");
    const [ works, setWorks ] = useState<IWork[] | null>(null);
    
    useEffect(() => {
        fetch(`/api/works`)
        .then(response => response.json())
        .then((json) => {
            setWorks(json.works)
        })
    }, [])
    
    if(works){
        return (
            <>
                {message && <div className='flex justify-center w-full p-9'><p className='text-lg font-semibold'>{message}</p></div>}
                {works.map((work) => (
                    <div key={work._id} className='w-96 p-6 m-9 bg-BackD rounded-md'>
                        <Link href={`/admin/works/${work._id}`}>
                            <a href="">
                                <div className='w-fit py-6'>
                                <CldImage width={200} height={200} alt={work.title} src={work.coverImage} />
                                    <div className='flex justify-center items-center h-24 bg-MyColor rounded-b-lg'><h3 className='h-fit text-lg font-semibold'>Project name</h3></div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </>
        )
    }
}