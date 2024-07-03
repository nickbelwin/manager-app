import React, { useState } from "react";
import { navList } from "../constants/constants";
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Navbar = () => {
    const query = useQuery();
    const projectId = query.get("id");
    const navigate=useNavigate();
    const [selectedNav, setSelectedNav] = useState("Dashboard");

    return (
        <header className=" w-full h-screen px-5 py-2 bg-blue-700 text-white">
            <h1 className=" text-left text-xl font-semibold ">Manager App</h1>
            <div className=" mt-10">
                <ul className=" flex flex-col justify-start items-start font-semibold">
                    {navList?.map((val => {
                        return (
                            <li  onClick={(e) => { navigate(`${val?.path}?id=${projectId}`); setSelectedNav(val?.nav); }}
                                className={` cursor-pointer w-full text-left px-2 py-1 rounded-md 
                                  ${selectedNav === val?.nav ? "bg-white text-black hover:opacity-100 " :
                                        "hover:opacity-100 hover:bg-blue-500 hover:text-white"}`} key={val?.nav}>{val?.nav}</li>
                        )
                    }))

                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar;