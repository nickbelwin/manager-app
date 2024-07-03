// import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

function ProjectDashboard() {
    const [percentage, setPercentage] = useState([
        { project_name: "Module 1", percentage: 60 },
        { project_name: "Module 2", percentage: 71 },
        { project_name: "Module 3", percentage: 32 }
    ]);
    const navigate=useNavigate();

    return (
        <section>
            <div className=" w-full min-h-[100vh] bg-gray-100 px-4 py-2 ">
                <header className=' bg-blue-700 py-2 px-10 text-white flex items-center justify-between'>
                    <button className=' rounded-lg hover:bg-white hover:text-black px-3 py-1' >+ Add Module</button>
                </header>
                <div className=' w-[80%] min-h-[91vh] m-auto bg-white p-5 flex flex-wrap gap-2'>
                    {
                        percentage?.map((val) => {
                            return (
                                <div onClick={(e) => { navigate(`/project?id=${val?.project_name?.split(" ")[1]}`) }}
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
            </div>
        </section>
    )
}

export default ProjectDashboard