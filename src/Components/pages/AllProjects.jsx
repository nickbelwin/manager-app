import React, { useState } from 'react'
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import CircularProgressBar from '../Modals/CircularProgressBar';

function AllProjects() {
    const [addProjectModal,setAddProjectModal]=useState(false);
    const [projectName,setProjectName]=useState("");
    const [projectDescription,setProjectDescription]=useState("");
    const [percentage, setPercentage] = useState([
        { project_name: "Project 1", percentage: 70, description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                            Asperiores debitis quod hic ea repellat harum doloribus suscipit
                                             qui quae ducimus, nam aliquid perspiciatis modi quasi error, 
                                             totam animi? Eaque ducimus modi labore minus error hic molestias
                                              quo provident incidunt accusamus, officiis vitae maiores quis corporis
                                               nulla, at ex molestiae eum?  nulla, at ex molestiae eum` },
        { project_name: "Project 2", percentage: 80, description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                            Asperiores debitis quod hic ea repellat harum doloribus suscipit
                                             qui quae ducimus, nam aliquid perspiciatis modi quasi error, 
                                             totam animi? Eaque ducimus modi labore minus error hic molestias
                                              quo provident incidunt accusamus, officiis vitae maiores quis corporis
                                               nulla, at ex molestiae eum?  nulla, at ex molestiae eum` },
        { project_name: "Project 3", percentage: 20, description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                            Asperiores debitis quod hic ea repellat harum doloribus suscipit
                                             qui quae ducimus, nam aliquid perspiciatis modi quasi error, 
                                             totam animi? Eaque ducimus modi labore minus error hic molestias
                                              quo provident incidunt accusamus, officiis vitae maiores quis corporis
                                               nulla, at ex molestiae eum?  nulla, at ex molestiae eum` }
    ]);
    const navigate = useNavigate();

    return (
        <section className='  w-full h-screen bg-gray-100'>
            {addProjectModal?
            <div onClick={(e)=>{ setAddProjectModal(false) }} style={{"backgroundColor": "#282c343a"}} className='w-full h-full fixed left-0 top-0 py-10 flex justify-center items-center z-50'>
                <div onClick={(e)=>{e.stopPropagation()}} className=' bg-white border-2 rounded-md p-5 h-fit w-fit'>
                    <div className=' flex flex-col justify-center items-center w-[40vw] '>
                        <h1 className='  w-full font-semibold mb-3 rounded-md py-1'>Add Project</h1>
                        <input className=' w-full border-2 rounded-md px-2 py-0.5' type="text" placeholder='Project Name' onChange={(e)=>{ setProjectName(e.target.value); }} />
                        <textarea className=' w-full border-2 rounded-md p-1 mt-3'  value={projectDescription} onChange={(e)=>{setProjectDescription(e.target.value);}} placeholder='Description...' ></textarea>
                        <button onClick={(e)=>{ setPercentage([ ...percentage, {project_name: projectName, percentage: 100, description: projectDescription} ]); setAddProjectModal(false) }}
                            className=' w-full mt-5 bg-blue-700 text-white rounded-md py-1'>ADD</button>
                    </div>
                </div>
            </div>
            :null }
            <header className=' bg-white  border-blue-700 py-2 px-10  flex items-center justify-between'>
                <h1 onClick={(e) => { navigate("/") }} className="cursor-pointer text-left text-xl font-bold  px-4 textBlue flex items-center gap-1"> <div className="w-6 h-6 bgBlue rounded-full flex justify-center items-center" > <div className="w-2.5 h-2.5 bg-white rounded-full" ></div> </div> Manager App</h1>
                <button onClick={()=>{ setAddProjectModal(true); }} className=' rounded-lg  bgLightBlue hover:text-black font-semibold px-3 py-1' >+ Add Projects</button>
            </header>
            <div className=' w-[80%] min-h-[91vh] m-auto p-5 grid grid-cols-2'>
                {
                    percentage?.map((val) => {
                        return (
                            <div onClick={(e) => { navigate(`/project?id=${val?.project_name?.split(" ")[1]}`) }}
                                className='  bg-white bgLightBlue rounded-lg border-2  p-3 cursor-pointer'>
                                <h1 className=' font-semibold text-xl'>{val?.project_name}</h1>
                                <div className=' flex items-center gap-2 h-full pb-6'>
                                    <div className=' '>
                                        <CircularProgressBar percentage={val?.percentage} progressColor="rgb(107 69 251)" bgColor="#ddd" showPercentage={true} />
                                    </div>
                                    <div>
                                        <h1 className=' text-left font-semibold'>Description: </h1>
                                        <p className='blockEllipsis text-left text-gray-500'>
                                            { val?.description }
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