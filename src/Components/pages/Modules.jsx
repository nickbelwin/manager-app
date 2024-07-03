import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Modules(props) {
    const query = useQuery();
    const projectId = query.get("id");
    const [selectedSubModule,setSelectedSubModule]=useState("Sub Module 1")
    const [subModules, setSubModules] = useState([
        { sub_module_name: "Sub Module 1", percentage: 60 },
        { sub_module_name: "Sub Module 2", percentage: 71 },
        { sub_module_name: "Sub Module 3", percentage: 32 }
    ]);
    const [moduleName, setModuleName] = useState("");
    const [addModuleModal, setAddModuleModal] = useState(false);
    return (
        <>
            {addModuleModal ?
                <div onClick={(e) => { setAddModuleModal(false) }} style={{ "backgroundColor": "#282c343a" }} className='w-full h-full fixed left-0 top-0 py-10 flex justify-center items-center'>
                    <div onClick={(e) => { e.stopPropagation() }} className=' bg-white border-2 rounded-md p-5 h-fit w-fit'>
                        <div className=' flex flex-col justify-center items-center '>
                            <h1 className='  w-full font-semibold mb-3 rounded-md py-1'>Add Module</h1>
                            <input className=' w-full border-2 rounded-md px-2 py-0.5' type="text" onChange={(e) => { setModuleName(e.target.value); }} />
                            <button onClick={(e) => { setSubModules([...subModules, { sub_module_name: moduleName, percentage: 0 }]); setAddModuleModal(false) }}
                                className=' w-full mt-5 bg-blue-700 text-white rounded-md py-1'>ADD</button>
                        </div>
                    </div>
                </div>
                : null}
            <header className=' bg-blue-700 py-2 px-10 text-white flex items-center justify-between'>
                <h1 className=' text-2xl font-semibold px-4 py-1 text-left'>Project {projectId}</h1>
                <button onClick={(e) => { setAddModuleModal(true) }} className=' rounded-lg hover:bg-white hover:text-black px-3 py-1' >+ Add Sub Module</button>
            </header>
            <div className=" w-full min-h-[85vh] bg-gray-100 px-4 py-2 ">
                <div className='w-full h-full'>
                    <div>

                        <h1 className=' text-lg font-semibold text-left py-2'>Module 1</h1>
                    </div>
                    <div className=' grid grid-cols-[1fr,2fr] gap-1 text-left'>
                        <div className=' bg-white min-h-[77vh]  rounded-md overflow-hidden'>
                            {subModules?.map((val) => {
                                return (
                                    <div onClick={(e)=>{ setSelectedSubModule(val?.sub_module_name)}} className={`px-3 py-1 ${selectedSubModule===val?.sub_module_name? " bg-blue-200  font-semibold ":"hover:bg-blue-50 "} cursor-pointer `}>
                                        <h1>{val?.sub_module_name}</h1>
                                        <div className=' flex items-center gap-3'>
                                            <div className=' w-[15rem] h-3 bg-gray-400 rounded-full'>
                                                <div style={{"width":`${val?.percentage}%`}} className={` h-full bg-blue-800 rounded-full`}></div>
                                            </div>
                                            <span className=' text-blue-700 font-semibold'>{val?.percentage}%</span>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className=' h-full bg-white rounded-md'>
                            <div>
                                <div>
                                    <button className=' px-3 py-1 bg-gray-300 m-2 rounded-md '>Comments</button>
                                    <button className=' m-2 px-3 py-1 rounded-md bg-red-500 text-white'>Issue</button>
                                </div>
                                <div className=' w-full h-full p-2'>
                                    <div className='bg-gray-100 h-[60vh] p-4 rounded-md overflow-y-scroll'>
                                        <div className=' w-full bg-white rounded-md p-2'>
                                            <h1 className=' text-gray-500 text-sm'>Date: 04-Jul-2024</h1>
                                            Development of Sub Module 1 completed. Now we are testing.
                                        </div>
                                    </div>
                                    <div className='flex gap-3 mt-3'>
                                        <input type="text" className=' w-full border-2 rounded-md' />
                                        <button className=' rounded-md   bg-blue-700 text-white font-semibold px-3 py-1'>Sent</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modules;