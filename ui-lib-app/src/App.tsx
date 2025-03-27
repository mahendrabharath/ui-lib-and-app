import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
    <Button onClick={() => setCount((count) => count - 1)}>Decrement</Button>
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Content>
        <p>Count: {count}</p>
        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
      </Card.Content>
      <Card.Actions>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Card.Actions>
    </Card>
    </>
  )
}

export default App
