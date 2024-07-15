import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routing'
import "react-country-state-city/dist/react-country-state-city.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
