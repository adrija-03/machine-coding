import { XIcon } from "lucide-react"
import { useEffect } from "react";

function EditProfile({ onClose }) {
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape")
                onClose();
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [onClose])
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-taupe-300 relative p-1.5" onClick={(e) => e.stopPropagation()}>
                <button className="absolute right-1.5 top-1.5 cursor-pointer" onClick={onClose}>
                    <XIcon size={15} />
                </button>
                <div>Edit profile</div>
                <div>Make changes to your profile here. Click save when you're done.</div>
                <form className="flex justify-center flex-col items-start">
                    Email :<input type="email" placeholder="xyz@example.com" />
                    Username :<input type="text" placeholder="xyz" />
                    <button type="submit" className="bg-indigo-500">Save Changes</button>
                </form>
            </div>
        </div>

    )
}

export default EditProfile