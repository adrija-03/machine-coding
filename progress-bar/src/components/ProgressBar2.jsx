import { useEffect, useState } from "react"

function ProgressBar2() {
    const [progress, setProgress] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (!isRunning)
            return;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setIsRunning(false);
                    return 100;
                }
                return Math.min(100, prev + 2);
            })
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [isRunning])

    function handleReset() {
        setIsRunning(false);
        setProgress(0);
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
                onClick={() => setIsRunning(true)}
                disabled={isRunning || progress === 100}
            >
                Start
            </button>
            <button
                className="rounded-full bg-cyan-500 w-[5%] cursor-pointer"
                onClick={() => setIsRunning(false)}
                disabled={!isRunning}
            >
                Pause
            </button>
            <button
                className="rounded-full bg-cyan-500 w-[5%] cursor-pointer"
                onClick={() => handleReset()}
            >
                Reset
            </button>
        </div>
    )
}

export default ProgressBar2