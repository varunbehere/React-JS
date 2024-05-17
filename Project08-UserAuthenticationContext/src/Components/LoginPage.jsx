import React from 'react'
import { useState } from 'react'
import { useLoginContext } from '../Contexts/loginContext'

function LoginPage() {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const {loginArray, proceedLogin} = useLoginContext()

    const inputChangeemail = (e)=>{
        e.preventDefault()
        setemail(e.target.value)
    }

    const inputChangePass = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('loginArray') || [])
        console.log(users)
        const user = users.find(user => user.email === email && user.password === password)

        if (user){
            alert('Logged In')
        }
        else{
            proceedLogin(email,password)
            setPassword('')
            setemail('')
            localStorage.setItem('loginArray', JSON.stringify(loginArray))
        }
        
        
        // console.log(loginArray)
    }
    
    return (
        <div>
        <div className='container min-w-full min-h-full'>
            <div className='bg-white text-black rounded-2xl p-10'>
            <form className='' onSubmit={onSubmit}>
                <div className='block'>
                <h1 className='font-bold text-4xl mb-20'>Login</h1>
                <div className='mb-5'>
                    <input 
                    className='text-white text-xl px-2 py-2 rounded-md'
                    placeholder='email/email'
                    onChange={inputChangeemail}
                    value={email}
                    type="text" />  
                </div>
                <div className='mb-5'>
                    <input
                    className='text-white text-xl px-2 py-2 rounded-md' 
                    placeholder='password'
                    onChange={inputChangePass}
                    value={password}
                    type="password" />
                </div>
                <div>
                    <input 
                    className='text-white bg-blue-500 text-xl font-semibold p-2 px-16 rounded-md hover:bg-blue-700 shadow-xl hover:border-2 border-gray-400 '
                    type="submit" value="Login" />
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default LoginPage
