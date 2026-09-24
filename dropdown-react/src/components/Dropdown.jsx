import { useState } from "react"
import DropdownMenu from "./DropdownMenu"

function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false);

    function handleDropdown() {
        console.log(showDropdown)
        setShowDropdown(prev => !prev)
    }

    function closeDropdown() {
        setShowDropdown(false)
    }

    return (
        <div className="flex justify-center items-center h-dvh">
            <button className="cursor-pointer" onClick={handleDropdown}>Dropdown Open</button>
            {showDropdown && <DropdownMenu onClose={closeDropdown} />}
        </div>

    )
}

export default Dropdown