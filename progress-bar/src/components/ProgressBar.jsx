import { useState } from "react"

function ProgressBar() {
    const [progress, setProgress] = useState(0)

    function handleProgress(amt) {
        setProgress(prev => prev + amt)
    }

    console.log(progress)

    return (
        <div className="flex justify-center items-center gap-5 h-full m-5">
            <div className="w-full h-6 bg-[#eee] rounded-full">
                <div
                    className="bg-[#00FF00] rounded-full h-full transition-all duration-200 ease-linear"
                    style={{ width: `${progress}%` }}></div>
            </div>
            <button
                className="rounded-full bg-cyan-500 w-[5%] cursor-pointer"
                onClick={() => handleProgress(10)}
                disabled={progress === 100}
            >
                +10
            </button>
            <button
                className="rounded-full bg-cyan-500 w-[5%] cursor-pointer"
                onClick={() => handleProgress(-10)}
                disabled={progress === 0}
            >
                -10
            </button>
        </div>
    )
}

export default ProgressBar