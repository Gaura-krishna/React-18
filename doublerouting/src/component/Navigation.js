import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>Navigation
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default Navigation