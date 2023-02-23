import { NextPage } from 'next'
import { FormEvent, useState } from 'react'

const SigninPage: NextPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    console.log('pages/auth/login/index.tsx > credentials', credentials)
    }

    return (
        <from onSubmit={onSubmit}>
            <h1>Login</h1>

            <label htmlFor="username">Nom d'utilisateur :</label>
            <input type="text" name='username' id='username' value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />

            <label htmlFor="password">Mots de passe :</label>
            <input type="text" name='password' id='password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

            <button type='submit'>Connect</button>
        </from>
    )
}

export default SigninPage