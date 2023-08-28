import {logOut} from '../functions/logOut'



// eslint-disable-next-line react/prop-types
export function Home({user:{email}}) {
    return (
        <div className="bg-black p-8  shadow-md text-white">
        <h1 className="text-3xl font-semibold mb-4 mt-8">¡Bienvenido!</h1>
        <p className="text-white mb-6"> {email}  -  Gracias  por usar nuestra plataforma. Esperamos que tengas una experiencia increíble.</p>
        
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={logOut}>
            Cerrar Sesión
        </button>
    </div>

    )
}

