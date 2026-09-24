import { useState } from "react"
import DropdownMenuNested from "./DropdownMenuNested"

function DropdownMenu({ onClose }) {
    const [nestedDropdown, setNestedDropdown] = useState(false)

    function openNestedDropdown() {
        setNestedDropdown(true)
    }

    function closeNestedDropdown() {
        setNestedDropdown(false)
    }

    return (
        <div className="fixed inset-0" onClick={onClose}>
            <div className="w-[12%] h-[40%] absolute top-[52%] left-[51%] p-2 bg-gray-800 text-white rounded-lg" onClick={(e) => e.stopPropagation()}>
                <div className="text-sm text-gray-200 select-none">My Account</div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">Profile</div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">Billing</div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">Setting</div>
                <div className="h-[2px] bg-gray-500 p-0"></div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">Team</div>
                <div
                    className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer"
                    onMouseEnter={openNestedDropdown}
                    onMouseLeave={closeNestedDropdown}>Invite users</div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">New Team</div>
                <div className="h-[2px] bg-gray-500 p-0"></div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">GitHub</div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">Support</div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">API</div>
                <div className="h-[2px] bg-gray-500 p-0"></div>
                <div className="rounded-lg hover:bg-gray-600 p-1 cursor-pointer">Logout</div>
            </div>
            {nestedDropdown && <DropdownMenuNested />}
        </div>
    )
}

export default DropdownMenu