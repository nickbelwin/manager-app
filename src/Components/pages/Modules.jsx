import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Modules(props) {
    const query = useQuery();
    const projectId = query.get("id");
    const [selectedSubNav, setSelectedSubNav] = useState("Comments");
    const [selectedSubModule, setSelectedSubModule] = useState("Sub Module 1")
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
                            <h1 className='  w-full font-semibold mb-3 rounded-md py-1'>Add Sub Module</h1>
                            <input className=' w-full border-2 rounded-md px-2 py-0.5' type="text" onChange={(e) => { setModuleName(e.target.value); }} />
                            <button onClick={(e) => { setSubModules([...subModules, { sub_module_name: moduleName, percentage: 0 }]); setAddModuleModal(false) }}
                                className=' w-full mt-5 bg-blue-700 text-white rounded-md py-1'>ADD</button>
                        </div>
                    </div>
                </div>
                : null}
            <header className=' sticky top-0 left-0 bgBody py-1 pl-1 pr-10 flex items-center justify-between'>
                <h1 className=' text-xl font-semibold px-4 py-1 text-left'>Project {projectId}</h1>
                <button onClick={(e) => { setAddModuleModal(true) }} className=' rounded-lg hover:bg-white font-semibold hover:text-black px-3 py-1' >+ Add Sub Module</button>
            </header>
            <div className="  mx-4 mt-3 overflow-y-scroll overflow-x-hidden ">
                <div className=' h-[90vh] rounded-xl py-4'>
                    <div>
                        <h1 className=' text-lg textBlue font-semibold text-left pb-2'>Module 1</h1>
                    </div>
                    <div className=' grid grid-cols-[1fr,2fr] gap-1 text-left h-full'>
                        <div className=' bg-white h-full overflow-y-scroll p-3 overflow-x-hidden rounded-md overflow-hidden'>
                            {subModules?.map((val) => {
                                return (
                                    <div onClick={(e) => { setSelectedSubModule(val?.sub_module_name) }} className={`px-3 py-1 rounded-lg ${selectedSubModule === val?.sub_module_name ? " bg-blue-200  font-semibold " : "hover:bg-blue-50 "} cursor-pointer `}>
                                        <h1>{val?.sub_module_name}</h1>
                                        <div className=' flex items-center gap-3'>
                                            <div className=' w-[15rem] h-3 bg-gray-400 rounded-full'>
                                                <div style={{ "width": `${val?.percentage}%` }} className={` h-full bgBlue rounded-full`}></div>
                                            </div>
                                            <span className=' textBlue font-semibold'>{val?.percentage}%</span>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div className='  bg-white rounded-md h-full p-3'>
                            <div className=' bg-blue-100 rounded-lg'>
                            <button onClick={() => { setSelectedSubNav("Comments") }} className={`px-3 py-1  m-2 rounded-md ${selectedSubNav === "Comments" ? "bgBlue text-white" : "bg-gray-300"} `}>Comments</button>
                                <button onClick={() => { setSelectedSubNav("About") }} className={`px-3 py-1  m-2 rounded-md ${selectedSubNav === "About" ? "bgBlue text-white" : "bg-gray-300"} `}>About</button>
                            </div>
                            <div className='h-full overflow-y-scroll overflow-x-hidden'>
                                {selectedSubNav === "About" ?
                                    <div>
                                        <h1 className=' text-xl font-bold'>Sub Module</h1>
                                        <div>
                                            <h1 className='font-semibold '>Discription: </h1>
                                            <p className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Repellat, minus nesciunt animi enim hic asperiores optio doloribus alias,
                                                qui harum itaque distinctio debitis voluptates velit aperiam voluptatum
                                                quasi aspernatur mollitia odit.
                                                Rem quae officia incidunt quasi dolores, ab sunt facere?</p>
                                        </div>
                                    </div> : null}
                                {selectedSubNav === "Comments" ?
                                    <div>
                                        <div>
                                            <button className=' px-3 py-1 bg-gray-300 m-2 rounded-md '>All</button>
                                            <button className=' m-2 px-3 py-1 rounded-md bg-red-500 text-white'>Issue</button>
                                        </div>
                                        <div className=' w-full h-full p-2'>
                                            <div className='bg-gray-100 h-[60vh] p-4 rounded-md overflow-y-scroll flex flex-col gap-3'>
                                                <div className=' w-full bg-white rounded-md p-2'>
                                                    <h1 className=' text-gray-500 text-sm'>Date: 08-Jul-2024</h1>
                                                    Development of Sub Module 1 completed. Now we are testing.
                                                </div>
                                                <div className=' w-full bg-red-500 text-white rounded-md p-2'>
                                                    <h1 className=' text-red-100 text-sm'>Date: 06-Jul-2024</h1>
                                                    Development of Sub Module 1 completed. Now we are testing.
                                                </div>
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
                                    </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modules;