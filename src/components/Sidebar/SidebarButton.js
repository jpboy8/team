import React from 'react';
import './SidebarButton.css'
import { Link, useLocation } from 'react-router-dom'

export default function SidebarButton(props) {

    const location = useLocation();

    const isActive = location.pathname === props.to;

    const btnClass = isActive ? 'btn-body active' : 'btn-body'

    return (

        <Link to={props.to}>
            <div className={btnClass}>
                <p className="btn-title">{props.title}</p>
            </div>
        </Link>
    )
}