import React from 'react'
import {SidebarData} from './SidebarData';
import {NavLink} from 'react-router-dom';
import { Container, Navbar, Nav} from 'react-bootstrap';
import logo from '../Components/Chiriku-logo.png'

function Sidebar() {
    return (

        <>
        <Navbar expand="lg" className="home bg-green-800 sidebar navbar-expand-lg navbar-light fixed-top py-3">
            <Container className="container px-4 px-lg-5">
                <Navbar.Brand className='brand' href="/">
                <img className="rounded-full h-24 w-24 mx-auto" src={logo} alt=""/>
                    <span className="navbar-brand text-wh text-white">Chiriku</span>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav nav-items" className="ml-30 justify-content-center">
                    <Nav className="navbar-nav ms-auto my-2 my-lg-2 me-lg-4">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        {SidebarData.map((val, key)=>{
                        return(
                            <li><Nav.Link href={val.path} className="text-gray-200"><div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div></Nav.Link></li>
                        )})}
                            {/* <li><Nav.Link href="/newreport" className="text-gray-200">About Us</Nav.Link></li>
                            <li><Nav.Link href="/myposts" className="text-gray-200">Services</Nav.Link></li>
                            <li><Nav.Link href="#contact" className="text-gray-200">Contact Us</Nav.Link></li> */}
                        </ul>
                          {/* {SidebarData.map((val, key)=>{
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
                } */}

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-left" />
            </Container>
        </Navbar>
    </>


        // <>
        //     <div className="sidebar-list side-bar text-white w-44 z-40 fixed h-full grid justify-items-center mb-4 shadow-2xl">
        //         <div className='mt-3 mb-2 grid-flow-row-dense'>
        //             <a href='/'>
        //         <img className="rounded-full h-28 w-28 mx-auto" src={logo} alt=""/>
        //             {/* <img className="rounded-full h-28 w-28 mx-auto" src="https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png" alt=""/> */}
        //         <h1 className='text-4xl mt-2 text-yellow-400 font-bold'>Chiriku</h1>
        //         </a>
        //         </div>
        //         <div className='mb-1 text-lg font-bold'>
        //         {SidebarData.map((val, key)=>{
        //                 return(
        //                     <div className='mb-2 hover:text-yellow-400' key={key}>
        //                         <NavLink to={val.path}
        //                         className="row"
        //                         id={window.location.pathname === val.path ? "active" : ""}
        //                         onClick={()=> {
        //                             window.location.pathname = val.path}}
        //                         >
        //                         <div id="icon">{val.icon}</div>
        //                         <div id="title">{val.title}</div>
        //                         </NavLink>
        //                     </div>
        //                 )
        //             })
        //         }
        //         </div>
        //     </div>
        // </>
    )
}

export default Sidebar

