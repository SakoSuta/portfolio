import type { NextApiRequest ,NextApiResponse } from "next";

const jwt = require('jsonwebtoken')

const { ADMIN_NAME, ADMIN_PASSWORD, JWT_SECRET_KEY } = process.env

type Data = {
    token?: string
    error?: string
}

interface Credentials {
    username: string
    password: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>){
    if (req.method === 'POST'){
        try {
            const {username, password}: {username: string; password: string} = req.body

            if(username !== ADMIN_NAME || password !== ADMIN_PASSWORD )
                throw new Error("Le login/ mots de passe ne correspond pas")

            const token = jwt.sign({}, JWT_SECRET_KEY, {
                expiresIn: '2 days',
            })

            res.status(200).json({ token: 'Jhon Doe'})
        } catch (error) {
            console.log('pages/api/auth/sigin/index.ts > error >', error)
            res.status(400).json({ error: "Erreur pendant l'authentification" })
        }
    }
}

// import { NextPage } from 'next'
// import { FormEvent, useState } from 'react'

// const SigninPage: NextPage = () => {
//     const [credentials, setCredentials] = useState({ username: '', password: '' })

//     const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//     console.log('pages/auth/login/index.tsx > credentials', credentials)
//     }

//     return (
//         <from onSubmit={onSubmit}>
//             <h1>Login</h1>

//             <label htmlFor="username">Nom d'utilisateur :</label>
//             <input type="text" name='username' id='username' value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />

//             <label htmlFor="password">Mots de passe :</label>
//             <input type="text" name='password' id='password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

//             <button type='submit'>Connect</button>
//         </from>
//     )
// }

// export default SigninPage