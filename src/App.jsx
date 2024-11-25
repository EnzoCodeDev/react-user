import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PlanEnvejecimiento } from './pages/plan-envejecimiento/PlanEnvejecimiento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlanEnvejecimiento/>
    </>
  )
}

export default App
