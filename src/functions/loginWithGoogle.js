import {auth} from '../firabase/credenciales.js';
import { GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';


export  async function loginWithGoogle(){
    try {
        const provider = await new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    
    } catch (error) {
        console.log(error)
    }
}