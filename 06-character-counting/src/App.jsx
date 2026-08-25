import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)

  function handleText(e) {
    setValue(e.target.value)
    setCount(e.target.value.length)
    if (e.target.value.length >= 100) {
      setDisabled(true);
      console.log("Limit exceeded")
    }
  }

  useEffect(() => {
    document.title = value;
  }, [value])

  return (
    <div>
      <input type='text' name='myText' value={value} onChange={(e) => handleText(e)} disabled={disabled} />
      <div>{count}/100</div>
    </div>
  )
}

export default App
