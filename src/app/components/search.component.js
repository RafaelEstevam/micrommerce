'use client'

import { useEffect, useState } from "react"

export default function Search(){

    const [search, setSearch] = useState('');

    const handleSubmit = async (value) => {
        // e.preventDefault()
        setSearch(value);

        const query = `x-typesense-api-key=xyz&q=${value}&query_by=name`

        const response = await fetch(`http://localhost:8108/collections/movies/documents/search?${query}`).then((response) => {
            return response.json();
        }).catch((e) => {
            console.log(e)
        });

        console.log(response.hits);
    };

    return (
        <div className="w-2/4">
            {/* <form className="flex rounded-md overflow-hidden" onSubmit={handleSubmit}> */}
                <input
                    value={search}
                    onChange={(e) => handleSubmit(e.target.value)}
                    className="text-slate-800 w-full h-12 pl-4"
                    placeholder="Search"
                />
                {/* <button type="submit" className="bg-yellow-400 hover:bg-yellow-600 p-2 text-slate-800">Search</button> */}
            {/* </form> */}
        </div>
        
    )
}