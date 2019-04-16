import React from 'react'
import { Link } from 'react-router-dom'
import './LinkToHome.css'

export default function LinkToHome() {
    return (
        <Link to="/" className="link">HOME</Link>
    )
}
