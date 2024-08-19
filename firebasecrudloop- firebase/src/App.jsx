import { useState } from 'react'

import './App.css'
import Crudlooper2 from './crude firebase/Crudlooper2'
import Crudlooper from './crude firebase/Crudlooper'
import Crudlooper3 from './crude firebase/Crudlooper3'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Crudlooper/> */}
  {/* <Crudlooper2/> */}
  <Crudlooper3/>
    </>
  )
}

export default App
