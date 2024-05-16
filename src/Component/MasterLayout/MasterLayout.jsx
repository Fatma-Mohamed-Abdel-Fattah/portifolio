// import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
    {/* <div className="container-fluid">
    <div className="row " >
      <div className="col-md-3">
         <Sidebar />
      </div>
      <div className="col-md-9">
         <Outlet></Outlet>
      </div>
    </div></div> */}
    
         <div className="row justify-content-between">
         <div className="col-md-2  vh-100 "><div><Sidebar/></div></div>
         <div className="col-md-10 vh-100 "><div><Outlet></Outlet></div></div>
         </div>
      
    </>
  )
}
