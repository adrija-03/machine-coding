import { useEffect, useState } from "react"

function Stopwatch() {
    const [time, setTime] = useState(0)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (!play) return;
        const timer = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
        return () => clearInterval(timer);
    }, [play])

    function updateTimer (sec) {
        const minutes = String(Math.floor(sec/60)).padStart(2, "0")
        const seconds = String(Math.floor(sec%60)).padStart(2, "0")
        return `${minutes}:${seconds}`
    }

    return (
        <div>
            Stopwatch
            <div>{updateTimer(time)}</div>
            <button onClick={() => setPlay(true)} disabled={play}>Play</button>
            <button onClick={() => setPlay(false)} disabled={!play}>Pause</button>
            <button onClick={() => { setTime(0); setPlay(false); }}>Reset</button>
        </div>
    )
}

export default Stopwatch