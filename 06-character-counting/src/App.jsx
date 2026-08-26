import { useState, useEffect } from 'react'
import './App.css'

const LIMIT = 100;

function App() {
  const [value, setValue] = useState('')

  const count = value.length;
  const exceeded = count > LIMIT;

  function handleText(e) {
    setValue(e.target.value)
  }

  useEffect(() => {
    document.title = `Characters: ${LIMIT - count}/${LIMIT}`;
  }, [count])

  return (
    <div>
      <input type='text' name='myText' value={value} onChange={(e) => handleText(e)} maxLength={100} />
      <div>{count}/{LIMIT}</div>
      {exceeded && <div>Limit Exceeded</div>}
    </div>
  )
}

export default App
