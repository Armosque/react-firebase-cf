import { useState } from "react"
import {loginWithEmailPass} from '../functions/loginWithEmailPass'
import {registerUser} from '../functions/registerUser'
import {loginWithGoogle} from "../functions/loginWithGoogle"


export function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function submitHandler(e) {
        e.preventDefault()
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username, password);
            
        if(isLoggedIn){
            await loginWithEmailPass(username,password)
        }else{
            await registerUser(username,password)
        }
        
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-black p-8 rounded-lg shadow-md text-white">
            <div className="flex flex-col">
                <h2 className="text-3xl mb-6">{isLoggedIn? 'Inicia sesión' : 'Regístrate'}</h2>
                <form className="flex flex-col" onSubmit={submitHandler}>
                    <label name="username">Username</label>
                    <input className="mb-4 text-black" type="text" id="username" />
                    <label name="password">Password</label>
                    <input className="mb-4 text-black" type="password" id="password" />
                    <button className="mb-2 bg-blue-500" type="submit">{isLoggedIn? 'Ingresar' : 'Registrar'}</button>
                </form>
                <button className="bg-green-500" 
                    onClick={() => loginWithGoogle()}>Accede con Google</button>
                <button className="underline mt-3"
                    onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn 
                    ? '¿No tienes cuenta? Crea una' 
                    : '¿Ya tienes cuenta? Inicia sesión'}
                </button>
            </div>
            
        </div>
    )
}
