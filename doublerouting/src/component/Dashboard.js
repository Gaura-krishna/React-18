import React from 'react'
import Overview from './Overview'
import Reports from './Reports'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div> {/* Added the 'Dashboard' title */}
            <Link to="dashboard/">Overview</Link>
            <Link to="dashboard/reports">Reports</Link> {/* Corrected the link path */}
            
            <Routes>
                <Route path="dashboard/" element={<Overview />} />
                <Route path="dashboard/reports" element={<Reports />} />
            </Routes>
            <Outlet />
        </>

    )
}

export default Dashboard