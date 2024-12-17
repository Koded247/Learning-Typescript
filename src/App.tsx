import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'

function App() {
   const personName = {
    first: 'Akorede',
    last : 'Abidoye',
   }
  return (
    <>
      <div>
        <Greet name = 'Akorede' MessageCount={50} isLoggedIn={true} />
        <Person name = {personName} />
      </div>
      
    </>
  )
}

export default App
