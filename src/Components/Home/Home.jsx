import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectDashboard from '../pages/PeojectDashboard'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className=' relative flex w-full h-screen overflow-hidden '>
                <aside className=' w-fit h-screen'>
                    <Navbar/>
                </aside>
                <main className=' w-full h-screen'>
                    <Outlet/>
                </main>
            </section>
        </div>
    )
}

export default Home
