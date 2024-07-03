import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectDashboard from '../pages/PeojectDashboard'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className=' relative grid grid-cols-[1fr,4fr] '>
                <aside className=' w-full h-screen'>
                    <Navbar/>
                </aside>
                <main className=' w-full overflow-y-scroll'>
                    <Outlet/>
                </main>
            </section>
        </div>
    )
}

export default Home
