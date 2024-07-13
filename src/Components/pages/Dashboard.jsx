// import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import CircularProgressBar from '../Modals/CircularProgressBar';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Dashboard() {
    const query = useQuery();
    const projectId = query.get("id");
    const [percentage, setPercentage] = useState([
        { project_name: "Module 1", percentage: 60 },
        { project_name: "Module 2", percentage: 71 },
        { project_name: "Module 3", percentage: 32 }
    ]);
    const navigate = useNavigate();
    const [moduleName,setModuleName]=useState("");
    const [addModuleModal,setAddModuleModal]=useState(false);
    return (
        <section className=' w-full '>
            {addModuleModal?
            <div onClick={(e)=>{ setAddModuleModal(false) }} style={{"backgroundColor": "#282c343a"}} className='w-full h-full fixed left-0 top-0 py-10 flex justify-center items-center'>
                <div onClick={(e)=>{e.stopPropagation()}} className=' bg-white border-2 rounded-md p-5 h-fit w-fit'>
                    <div className=' flex flex-col justify-center items-center '>
                        <h1 className='  w-full font-semibold mb-3 rounded-md py-1'>Add Module</h1>
                        <input className=' w-full border-2 rounded-md px-2 py-0.5' type="text" onChange={(e)=>{ setModuleName(e.target.value); }} />
                        <button onClick={(e)=>{ setPercentage([ ...percentage, {project_name: moduleName, percentage: 0} ]); setAddModuleModal(false) }}
                            className=' w-full mt-5 bg-blue-700 text-white rounded-md py-1'>ADD</button>
                    </div>
                </div>
            </div>
            :null }
            <header className='  py-1 px-10 bg-gray-50 flex items-center justify-between'>
                <h1 className=' text-xl font-semibold px-4 py-1 text-left'>Project {projectId}</h1>
                <button onClick={(e)=>{ setAddModuleModal(true) }} className=' rounded-lg  hover:bg-white hover:text-black font-semibold px-3 py-1' >+ Add Module</button>
            </header>
            <div className=" w-full min-h-[80vh] bg-gray-50 ">

                <div className=' w-[full min-h-[91vh] m-auto bg-gray-50 p-5  grid grid-cols-2 gap-3'>
                    {
                        percentage?.map((val) => {
                            return (
                                <div onClick={(e) => { navigate(`/project/modules?id=${val?.project_name?.split(" ")[1]}`) }}
                                    className='  bg-white bgLightBlue rounded-lg border-2 flex flex-col justify-center items-center gap-2 cursor-pointer p-3'>
                                    <h1 className=' font-semibold text-xl'>{val?.project_name}</h1>
                                    <div className=' flex items-center gap-2 h-full pb-6'>
                                    <div className=' '>
                                        
                                        <CircularProgressBar percentage={val?.percentage} progressColor="rgb(107 69 251)" bgColor="#ddd" showPercentage={true} />
                                    </div>
                                    <div>
                                        <h1 className=' text-left font-semibold'>Description: </h1>
                                        <p className='blockEllipsis text-gray-500 text-justify'>
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
            </div>
        </section>
    )
}

export default Dashboard;