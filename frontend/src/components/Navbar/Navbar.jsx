import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div id='navbar-container'>
     <button onClick={()=>{navigate("/addnote")}}>Addbook</button>
    </div>
    </>
  )
}

export default Navbar