import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectDashboard from '../pages/PeojectDashboard'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className=' grid grid-cols-[1fr,4fr] '>
                <aside className=' w-full '>
                    <Navbar/>
                </aside>
                <main>
                    <Outlet/>
                </main>
            </section>
        </div>
    )
}

export default Home
