import { useState } from "react"
import EditProfile from "./EditProfile"

function Modals() {
    const [showEP, setShowEP] = useState(false)

    function handleEditProfile() {
        setShowEP(prev => !prev)
    }
    function closeEditProfile() {
        setShowEP(false)
    }

    return (
        <div className="flex justify-center items-center flex-col">
            Modals
            <button className="cursor-pointer" onClick={handleEditProfile}>Edit Profile</button>
            {showEP && <EditProfile onClose={() => closeEditProfile()} />}
        </div>
    )
}

export default Modals