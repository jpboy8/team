import React from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton.js'

export default function Sidebar() {
    
    return (
        <div className="sidebar-container"> 
            <div className="sidebar-btn">
                <SidebarButton title="About me" to="/aboutMe"/>
                <SidebarButton title="My works" to="/"/>
                <SidebarButton title="Reviews" to="/reviews"/>
                <SidebarButton title="Make an order" to="/book"/>

            </div>

          
                <p className="underTxt">© 2022</p>
        </div>
    )
}