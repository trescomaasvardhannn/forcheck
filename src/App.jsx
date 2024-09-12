import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function getRandom(){
    const newCnt= Math.random();
    setCount(newCnt);
  }
  return (
    <div>
      <button onClick={getRandom}>generate random number</button>
      <Header title={`this is random number ${count}`}></Header>
      <Header title="dummy t2"></Header>
    </div>
  )
}
function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}
export default App
