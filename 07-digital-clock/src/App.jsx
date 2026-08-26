import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  function leadingZero(n) {
    return String(n).padStart(2, 0)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div>
      <h1>Clock</h1>
      <div>{leadingZero(time.getHours())}:{leadingZero(time.getMinutes())}:{leadingZero(time.getSeconds())}</div>
    </div>
  )
}

export default App
