import React from 'react'
import {SidebarData} from './SidebarData';
import {NavLink} from 'react-router-dom';
import logo from '../Components/Chiriku-logo.png'

function Sidebar() {
    return (
        <>
            <div className="sidebar-list side-bar text-white w-44 z-40 fixed h-full grid justify-items-center mb-4 shadow-2xl">
                <div className='mt-3 mb-2 grid-flow-row-dense'>
                    <a href='/'>
                <img className="rounded-full h-28 w-28 mx-auto" src={logo} alt=""/>
                    {/* <img className="rounded-full h-28 w-28 mx-auto" src="https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png" alt=""/> */}
                <h1 className='text-4xl mt-2 text-yellow-400 font-bold'>Chiriku</h1>
                </a>
                </div>
                <div className='mb-1 text-lg font-bold'>
                {SidebarData.map((val, key)=>{
                        return(
                            <div className='mb-2 hover:text-yellow-400' key={key}>
                                <NavLink to={val.path}
                                className="row"
                                id={window.location.pathname === val.path ? "active" : ""}
                                onClick={()=> {
                                    window.location.pathname = val.path}}
                                >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                </NavLink>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Sidebar

