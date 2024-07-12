import React, { useState } from 'react'
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import CircularProgressBar from '../Modals/CircularProgressBar';

function AllProjects() {
    const [percentage, setPercentage] = useState([
        { project_name: "Project 1", percentage: 70 },
        { project_name: "Project 2", percentage: 80 },
        { project_name: "Project 3", percentage: 20 }
    ]);
    const navigate = useNavigate();

    return (
        <section className='  w-full h-screen bg-gray-100'>
            <header className=' bg-white  border-blue-700 py-2 px-10  flex items-center justify-between'>
                <h1 onClick={(e) => { navigate("/") }} className="cursor-pointer text-left text-xl font-bold  px-4 textBlue flex items-center gap-1"> <div className="w-6 h-6 bgBlue rounded-full flex justify-center items-center" > <div className="w-2.5 h-2.5 bg-white rounded-full" ></div> </div> Manager App</h1>
                <button className=' rounded-lg  bgLightBlue hover:text-black font-semibold px-3 py-1' >+ Add Projects</button>
            </header>
            <div className=' w-[80%] min-h-[91vh] m-auto p-5 grid grid-cols-2'>
                {
                    percentage?.map((val) => {
                        return (
                            <div onClick={(e) => { navigate(`/project?id=${val?.project_name?.split(" ")[1]}`) }}
                                className='  bg-white bgLightBlue rounded-lg border-2  p-3 cursor-pointer h-[13rem]'>
                                <h1 className=' font-semibold text-xl'>{val?.project_name}</h1>
                                <div className=' flex items-center gap-2 h-full pb-6'>
                                    <div className=' '>
                                        <CircularProgressBar percentage={val?.percentage} progressColor="rgb(107 69 251)" bgColor="#ddd" showPercentage={true} />
                                    </div>
                                    <div>
                                        <h1 className=' text-left font-semibold'>Description: </h1>
                                        <p className='blockEllipsis text-left text-gray-500'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                            Asperiores debitis quod hic ea repellat harum doloribus suscipit
                                             qui quae ducimus, nam aliquid perspiciatis modi quasi error, 
                                             totam animi? Eaque ducimus modi labore minus error hic molestias
                                              quo provident incidunt accusamus, officiis vitae maiores quis corporis
                                               nulla, at ex molestiae eum?  nulla, at ex molestiae eum
                                        </p>
                                    </div>
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