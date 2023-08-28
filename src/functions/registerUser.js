import {auth} from '../firabase/credenciales.js';
import { createUserWithEmailAndPassword } from "firebase/auth";


export  async function registerUser(email,password){
    try {
        const user = await createUserWithEmailAndPassword( auth, email, password);
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}