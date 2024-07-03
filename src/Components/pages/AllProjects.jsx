import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

function AllProjects() {
    const [percentage, setPercentage] = useState([
        { project_name: "Project 1", percentage: 70 },
        { project_name: "Project 2", percentage: 80 },
        { project_name: "Project 3", percentage: 20 }
    ]);
const navigate=useNavigate();

    return (
        <section className='  w-full h-screen'>
            <header className=' bg-blue-700 py-2 px-10 text-white flex items-center justify-between'>
                <h1 onClick={(e)=>{navigate("/")}} className=" cursor-pointer text-left text-xl font-semibold ">Manager App</h1>
                <button className=' rounded-lg hover:bg-white hover:text-black px-3 py-1' >+ Add Projects</button>
            </header>
            <div className=' w-[80%] min-h-[91vh] m-auto bg-white p-5 flex flex-wrap gap-2'>
                {
                    percentage?.map((val) => {
                        return (
                            <div onClick={(e)=>{navigate(`/project?id=${val?.project_name?.split(" ")[1]}`)}} 
                            className=' w-[10rem] h-[10rem] hover:bg-blue-300 rounded-lg border-2 flex flex-col justify-center items-center gap-2 cursor-pointer'>
                                <h1 className=' font-semibold '>{val?.project_name}</h1>
                                <div className=' w-[70%] h-[70%]'>
                                    <CircularProgressbar value={val?.percentage} text={`${val?.percentage}%`} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default AllProjects;