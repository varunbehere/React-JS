import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function Login (){
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)

    const {user,setUser} = useContext(UserContext)

    const handleSubmit =  (e)=>{
        e.preventDefault()
        setUser ({username,password})
        console.clear ()
        console.log(user);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    value = {username}
                    onChange={(e)=>{setUsername(e.target.value)}}/>
                <input 
                    type="text" 
                    name="password" 
                    placeholder="password" 
                    value = {password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                <button 
                    type="submit">
                    Submit
                </button>

            </form >
        </>
    )
}