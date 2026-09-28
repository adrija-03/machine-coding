import { useEffect, useState } from "react"

function Autocomplete() {
    const [searchVal, setSearchVal] = useState("");
    const [debouncedVal, setDebouncedVal] = useState("");
    const [items, setItems] = useState([]);
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((json) => {
                const name_id = json.recipes
                    .filter((element) => element.name.toLowerCase().includes(searchVal.toLowerCase()))
                    .map(({ id, name }) => ({ id, name }))
                setItems(name_id)
            })
    }, [debouncedVal]);

    useEffect(() => {
        const timer = setTimeout(() => {
            return setDebouncedVal(searchVal)
        }, 400);
        return () => clearTimeout(timer);
    }, [searchVal])

    console.log((items))

    return (
        <div className="flex justify-center items-center flex-col p-10">
            <input
                className="border w-[200px] h-[50px] p-2"
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onFocus={() => setShowList(true)}
                onBlur={() => setShowList(false)}
                placeholder="food" />
            {showList && <div className="bg-gray-900 text-white p-4 overflow-y-auto max-h-60 rounded-md">
                {items.map((element) => {
                    return <div className="hover:bg-gray-700 p-2 rounded cursor-pointer transition-colors"><span>{element.name}</span></div>
                })}
            </div>}
        </div>
    )
}

export default Autocomplete