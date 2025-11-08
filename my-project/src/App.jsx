// ...existing code...
import { useState } from 'react'
import { Navigation } from './components/layout/Navigation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <div>
        <ul>          <li>logo</li>
          <li>home, About, contacts</li>
        </ul>
      </div>
      
     
    </>
  )
}

export default App
// ...existing code... lol