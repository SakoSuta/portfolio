import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/@utils/mongodb/db-connect'
import Work from '@/model/Work'
import { IWork } from '@/@types/mongodb-types'

type Data = {
    works?: IWork[]
    work?: IWork
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, seo, slug, description, coverImage } = req.body

    const{
        query: { _id },
        method,
    } = req

    if (req.method === 'GET') {
        try {

            // Connexion à la base de donnée
            dbConnect()

            // Recherche dans la base de donnée avec l'ID
            const works = await Work.findOne({_id: _id})

            if(!works){
                throw new Error("Error Work")
            }

            return res.status(200).json({ works, message: 'OK' })

        } catch (error) {

            console.log(error)
            var message = `Une erreur c'est produite`
            var code = 500

            // Message d'erreur
            if(error.message == "Error Work"){
                message = `Aucun projet n'a était trouver`
                code = 409
            }
            
            return res.status(code).json({
                message,
            })

        }

    }

    if (req.method === 'PUT') {

        try{

            // Connexion à la base de donnée
            dbConnect()

            // Recherche dans la base de donnée avec l'ID
            const foundWork = await Work.findOne({_id: _id})

            if(!foundWork){
                throw new Error('foundWork')
            }

            // Vérification que tous les champs sont remplie
            if (!title || !seo.title || !seo.description || !slug || !description || !coverImage){

                const error = {title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}

                throw new Error("Error Champs")
            }

            // Mettre à jour dans la base de donnée avec l'ID
            const updateWork = await Work.updateOne({_id: _id}, { $set : { title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}})

            if(!updateWork){
                throw new Error('Update Work')
            }

            return res.status(201).json({ message: `Le projet ${foundWork.title} a bien été modifié`})


        } catch(error){
            console.log(error)
            var message = `Une erreur c'est produite`
            var code = 500

             // Message d'erreur
            if(error.message == "foundWork"){
                message = `Aucun projet n'a était trouver`
                code = 409
            }

            if(error.message == "Error Champs"){
                message = `Vous devez remplir tous les champs !`
                code = 409
            }

            if(error.message == "Update Work"){
                message = `La Modification n'a pas pu etre éxecuter`
                code = 409
            }

            return res.status(code).json({
                message,
            })
        }

        

    }

    if (req.method === 'DELETE') {

        try {

            // Connexion à la base de donnée
            dbConnect()

            // Recherche dans la base de donnée avec l'ID
            const foundWork = await Work.findOne({_id: _id})

            if(!foundWork){
                throw new Error('foundWork')
            }

            // Supprimer dans la base de donnée avec l'ID
            const worksDelete = await Work.deleteOne({_id: _id})

            if(!worksDelete){
                throw new Error('worksDelete')
            }

            return res.status(200).json({ message: `Le projet ${foundWork.title} a bien été supprimé` })
        } catch (error) {
            console.log(error)
            var message = `Une erreur c'est produite`
            var code = 500

             // Message d'erreur
            if(error.message == "foundWork"){
                message = `Aucun projet n'a était trouver`
                code = 409
            }

            if(error.message == "worksDelete"){
                message = `La Suppression n'a pas pu etre éxecuter`
                code = 409
            }

            return res.status(code).json({
                message,
            })
        }
    }
}

export default handler
