import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from 'ui-lib-app'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>

    </>
  )
}

export default App
