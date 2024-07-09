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
            <h1 onClick={(e)=>{navigate("/")}} className="cursor-pointer text-left text-xl font-bold  px-4 textBlue flex items-center gap-1"> <div className="w-6 h-6 bgBlue rounded-full flex justify-center items-center" > <div className="w-2.5 h-2.5 bg-white rounded-full" ></div> </div> Manager App</h1>
                <button className=' rounded-lg  bgLightBlue hover:text-black font-semibold px-3 py-1' >+ Add Projects</button>
            </header>
            <div className=' w-[80%] min-h-[91vh] m-auto p-5 flex flex-wrap gap-2'>
                {
                    percentage?.map((val) => {
                        return (
                            <div onClick={(e) => { navigate(`/project?id=${val?.project_name?.split(" ")[1]}`) }}
                                className=' w-[11rem] h-[11rem] bg-white hover:bg-blue-100 rounded-lg border-2 flex flex-col justify-center items-center gap-2 cursor-pointer'>
                                <h1 className=' font-semibold '>{val?.project_name}</h1>
                                <div className=' w-[70%] h-[70%]'>
                                    {/* <CircularProgressbar value={val?.percentage} text={`${val?.percentage}%`}
                                        styles={buildStyles({
                                            pathColor: `#8567CE, ${val?.percentage / 100})`,
                                            textColor: '#8622CE',
                                            trailColor: '#8622CE',
                                            backgroundColor: '#3e98c7',
                                        })} /> */}
                                        {/* <CircularProgressBar percentage={val?.percentage} progressColor="#8567CE" bgColor="#ddd" showPercentage={false} /> */}
                                        <CircularProgressBar percentage={val?.percentage} progressColor="rgb(107 69 251)" bgColor="#ddd" showPercentage={true} />
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