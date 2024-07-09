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
        <header className=" w-full h-full pr-5 py-2 bg-white ">
            <h1 onClick={(e)=>{navigate("/")}} className="cursor-pointer text-left text-xl font-bold  px-4 textBlue flex items-center gap-1"> <div className="w-6 h-6 bgBlue rounded-full flex justify-center items-center" > <div className="w-2.5 h-2.5 bg-white rounded-full" ></div> </div> Manager App</h1>
            <div className=" mt-10">
                <ul className=" flex flex-col justify-start items-start gap-1 font-semibold">
                    {navList?.map((val => {
                        return (
                            <li  onClick={(e) => { navigate(`${val?.path}?id=${projectId}`); setSelectedNav(val?.nav); }}
                                className={` cursor-pointer w-full text-left pl-8 py-2 rounded-r-lg 
                                  ${selectedNav === val?.nav ? "bgBlue text-white hover:opacity-100 " :
                                        "hover:opacity-100 bgLightBlue "}`} key={val?.nav}>{val?.nav}</li>
                        )
                    }))

                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar;