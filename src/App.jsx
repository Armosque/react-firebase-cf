
import './styles/tailwind.css'
import {useState} from 'react'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { auth } from './firabase/credenciales'
import { onAuthStateChanged } from 'firebase/auth'


function App() {
  
const [user, setUser] = useState(null)
console.log(user)


onAuthStateChanged(auth, (userFirebase) => {
  if(userFirebase){
    setUser(userFirebase)
  }else{
    setUser(null)
  }
})
  return user? <Home user ={user}/> : <Login />
}

export default App
