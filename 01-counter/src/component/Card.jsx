import { useState } from "react"

function Card({ min = 0, max = 10, initialState = 0 }) {
    const [count, setCount] = useState(initialState);
    const [rawValue, setRawValue] = useState("1");

    const value = Math.max(1, Number(rawValue) || 1)

    let reachedMax = (Number(count) + Number(value)) > max;
    let reachedMin = (Number(count) - Number(value)) < min;


    function increment() {
        if (reachedMax) {
            return;
        }
        setCount(prev => Math.min(max, Number(prev) + Number(value)))
    }
    function decrement() {
        if (reachedMin) {
            return;
        }
        setCount(prev => Math.max(min, Number(prev) - Number(value)))
    }
    return (
        <div>

            <input
                type="number"
                value={rawValue}
                onChange={(e) => setRawValue(e.target.value)} 
                aria-label="Step-size"
                />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', fontSize: '50px' }}>
                <button onClick={decrement} disabled={reachedMin} aria-label="Decrement">-</button>
                <div aria-live="polite">{count}</div>
                <button onClick={increment} disabled={reachedMax} aria-label="Increment">+</button>
                <button onClick={() => setCount(initialState)}>Reset</button>

            </div>
            {reachedMax && <div style={{ textAlign: 'center' }}>Max limit reached</div>}
            {reachedMin && <div style={{ textAlign: 'center' }}>Min limit reached</div>}
        </div>


    )
}

export default Card