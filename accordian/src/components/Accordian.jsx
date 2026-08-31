import { useState } from 'react'

function Accordian() {
    const [visibility, setVisibility] = useState([false, false, false])

    function handleClick(e) {
        let key = Number(e.currentTarget.id);
        setVisibility(visibility.map((ele, x) => {
            if (key === x) {
                return !ele;
            }
            return ele;
        }))
    }

    return (
        <>
            <div>
                <div id="0" onClick={handleClick} style={{ cursor: "pointer" }}>Section 1</div>
                <p style={{ display: visibility[0] ? "block" : "none" }}>lorem ipsum</p>
            </div>

            <div>
                <div id="1" onClick={handleClick} style={{ cursor: "pointer" }}>Section 2</div>
                <p style={{ display: visibility[1] ? "block" : "none" }}>lorem ipsum</p>
            </div>

            <div>
                <div id="2" onClick={handleClick} style={{ cursor: "pointer" }}>Section 3</div>
                <p style={{ display: visibility[2] ? "block" : "none" }}>lorem ipsum</p>
            </div>
        </>
    )
}

export default Accordian