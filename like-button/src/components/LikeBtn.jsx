import { Heart, Loader } from 'lucide-react';
import { useState } from 'react';

function LikeBtn() {
    const [like, setLike] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    console.log(like)
    function handleClick() {
        if (like) {
            setLike(prev => !prev)
            return;
        }
        setShowLoader(true);
        setTimeout(() => {
            setLike(prev => !prev)
            setShowLoader(false)
        }, 4000)
    }

    return (
        <div className='flex justify-center items-center h-dvh'>
            <button
                className={`group flex justify-center items-center flex-col w-16 ring  
                    ${like ? 'border-2 border-sol' : 'hover:border-2 border-solid'}`}
                onClick={handleClick}>
                {showLoader && <Loader />}
                {!showLoader && <Heart className={`fill-black text-black ${like ? 'fill-red-600 text-red-600' : 'group-hover:fill-red-600 group-hover:text-red-600'}`} />}
                Like
            </button>
        </div>
    )
}

export default LikeBtn