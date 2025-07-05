import { searchSOng } from "../../api/api"
import { useState, useEffect } from "react";

export  const NavBar = ({setData}) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try{
            const response = await searchSOng(query);
            setData(response);
        }catch(err){
            console.error(err);
        }
    };

    return (
        <div className="w-[100%] bg-black/75 py-2  flex top-1 rounded bg-blur-sm justify-around items-center fixed bg-blur z-10 ">
            <div>
                <h3 className="text-red-500 font-bold text-2xl">MP</h3>
            </div>
            <div className="flex gap-4">
                <input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search songs"
                    className="bg-white p-2 rounded"
                />
                <button 
                    onClick = {handleSearch} 
                    className="bg-green-400 p-2 text-white font-semibold rounded"
                >
                    Search
                </button>
            </div>
            <button 
                className="bg-green-400 p-2 text-white font-semibold rounded"
            >
                FeedBack
            </button>
        </div>
    )
}