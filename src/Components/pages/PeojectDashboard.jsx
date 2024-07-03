import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ProjectDashboard(props) {
    const query = useQuery();
    const projectId = query.get("id");
    return (
        <>
            <h1 className=' text-2xl font-semibold bg-gray-300 px-4 py-2 text-left'>Project {projectId}</h1>
            <div className=" w-full min-h-[100vh] bg-gray-100 px-4 py-2 ">
                <div className='w-full h-full'>
                    <div>

                        <h1 className=' text-lg font-semibold text-left py-2'>Module 1</h1>
                    </div>
                    <div className=' grid grid-cols-[1fr,2fr] gap-1 text-left'>
                        <div className=' bg-white min-h-[77vh]'>
                            <div className=' px-3 py-1 '>
                                <h1>Sub Module 1</h1>
                                <div className=' flex items-center gap-3'>
                                    <div className=' w-[15rem] h-3 bg-gray-400 rounded-full'>
                                        <div className=' w-[20%] h-full bg-blue-800 rounded-full'></div>
                                    </div>
                                    <span className=' text-blue-700 font-semibold'>20%</span>
                                </div>
                            </div>
                            <div className=' px-3 py-1 '>
                                <h1>Sub Module 2</h1>
                                <div className=' flex items-center gap-3'>
                                    <div className=' w-[15rem] h-3 bg-gray-400 rounded-full'>

                                        <div className=' w-[92%] h-full bg-blue-800 rounded-full'></div>
                                    </div>
                                    <span className=' text-blue-700 font-semibold'>92%</span>
                                </div>
                            </div>
                            <div className=' px-3 py-1 '>
                                <h1>Sub Module 3</h1>
                                <div className=' flex items-center gap-3'>
                                    <div className=' w-[15rem] h-3 bg-gray-400 rounded-full'>

                                        <div className=' w-[56%] h-full bg-blue-800 rounded-full'></div>
                                    </div>
                                    <span className=' text-blue-700 font-semibold'>56%</span>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-white'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDashboard;