import React, { useState } from "react";
import { navList } from "../constants/constants";


const Navbar = () => {
    const [selectedNav, setSelectedNav] = useState("Module 1");

    return (
        <header className=" w-full h-screen px-5 py-2 bg-blue-700 text-white">
            <h1 className=" text-left text-xl font-semibold ">Manager App</h1>
            <div className=" mt-10">
                <ul className=" flex flex-col justify-start items-start font-semibold">
                    {navList?.map((val => {
                        return (
                            <li onClick={(e) => { setSelectedNav(val); }}
                                className={` cursor-pointer w-full text-left px-2 py-1 rounded-md 
                                  ${selectedNav === val ? "bg-white text-black hover:opacity-100 " :
                                        "hover:opacity-100 hover:bg-blue-500 hover:text-white"}`} key={val}>{val}</li>
                        )
                    }))

                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar;