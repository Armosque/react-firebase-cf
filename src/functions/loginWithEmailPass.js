import {auth} from '../firabase/credenciales.js';
import { signInWithEmailAndPassword } from 'firebase/auth';


export  async function loginWithEmailPass(email,password){
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}