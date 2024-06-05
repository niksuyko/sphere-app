import React from 'react'
import './Header.css'
import Physics from '../images/physics.png'
function Header () {
    return (
        <div className="header">
            <img src={Physics} className="physics-img"/>
            <h1 className="title">foo physics widgets</h1>

        </div>
    )
}

export default Header