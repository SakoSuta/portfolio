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
    if (req.method === 'POST') {

        const { title, seo, slug, description, coverImage } = req.body

        try{

            // Connexion à la base de donnée
            dbConnect()

            // Vérification que tous les champs sont remplie
            if (!title || !seo.title || !seo.description || !slug || !description || !coverImage){

                const error = {title: title, seo: {title: seo.title, description: seo.description}, slug: slug, description: description, coverImage: coverImage}

                throw new Error("Error Champs")
            }

            const workCreate = await Work.create(req.body)

            if(!workCreate){
                throw new Error("Error Create")
            }

            return res.status(201).json({ message: `Le projet ${workCreate.title} a bien été créé`})
        } catch(error){
            console.log(error)
            var message = `Une erreur c'est produite`
            var code = 500

             // Message d'erreur
            if(error.message == "Error Champs"){
                message = `Vous devez remplir tous les champs !`
                code = 409
            }

            if(error.message == "Error Create"){
                message = `L'Ajout du projet n'a pas pu etre éxecuter`
                code = 409
            }

            return res.status(code).json({
                message,
            })
        }
    }
    if (req.method === 'GET') {
        try {

            // Connexion à la base de donnée
            dbConnect()

            const works = await Work.find({})

            if(!works){
                throw new Error("Error No Works")
            }

            return res.status(200).json({ works, message: 'OK' })
        } catch (error) {
            console.log(error)
            var message = `Une erreur c'est produite`
            var code = 500

             // Message d'erreur
            if(error.message == "Error No Works"){
                message = `Aucun projet n'a été trouvé !`
                code = 409
            }
            
            return res.status(code).json({
                message,
            })

        }
    }
}

// async Confirm(req, res){

//     try{
//         const tokenURL = req.query.token

//         const foundUser = await TempUser.findOne({'token':tokenURL})

//         if (foundUser){
//             const email = foundUser.email
//             const nickname = foundUser.nickname
//             const password = foundUser.password
//             const number = foundUser.number
//             const avatar = foundUser.avatar

//             const newUser = new User({ email, nickname, password, number, avatar});
//             const savedUser = await newUser.save();
//             const deleteTempUser = await TempUser.deleteOne({'id':foundUser.id})

//             return res.status(201).json({
//                 token: req.query.token,
//                 message:
//                     'Vous avez bien êtes incrit',
//                 });

//         }
//         return res.status(500).json({
//             message: "Le lien à déjà était utiliser"})


//     } catch (error) {
//         console.error('Error Code', error.message)
//         return res.status(500).json({
//             message: "Ca marche pas"
//         })
//     }
// },

export default handler