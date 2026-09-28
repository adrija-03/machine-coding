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
        <div>
            <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onFocus={() => setShowList(true)}
                onBlur={() => setShowList(false)} />
            {showList && <div>
                {items.map((element) => {
                    return <div><span>{element.name}</span></div>
                })}
            </div>}
        </div>
    )
}

export default Autocomplete