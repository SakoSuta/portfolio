import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../@utils/mongodb/db-connect'
import WorkModel from '../../../model/WorkModel'
import { IWork } from '../../../@types/mongodb-types'

type Data = {
    works?: IWork[]
    work?: IWork
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        return res.status(201).json({ message: 'GET' })
    }
    if (req.method === 'PUT') {
        return res.status(201).json({ message: 'PUT' })
    }
    if (req.method === 'DELETE') {
        return res.status(201).json({ message: 'DELETE' })
    }
}

export default handler