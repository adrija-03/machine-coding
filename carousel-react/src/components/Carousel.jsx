import { useState } from "react"

function Carousel() {
    const [value, setValue] = useState(0);

    const imageArray = ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"]

    function handlePrev() {
        if (value === 0)
            setValue(imageArray.length - 1)
        else
            setValue(prev => prev - 1)
    }

    function handleNext() {
        if (value === (imageArray.length - 1))
            setValue(0)
        else
            setValue(prev => prev + 1)
    }

    function handleCarouselButtons(index) {
        setValue(index)
    }

    return (
        <div className="flex justify-center items-center gap-10 h-dvh flex-col">
            <div className="flex justify-center items-center gap-10">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={handlePrev}
                >
                    prev
                </button>
                <img src={imageArray[value]} />
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={handleNext}
                >
                    next
                </button>
            </div>
            <div>
                {imageArray.map((e, index) => (
                    <button
                        key={index}
                        className={
                            value === index
                                ? "bg-blue-500 text-white font-semibold py-2 px-4 border-transparent rounded"
                                : "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        }
                        onClick={() => handleCarouselButtons(index)}
                    >
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Carousel