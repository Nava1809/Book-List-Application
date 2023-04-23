import React, { useState } from 'react'
import './Editnote.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
const Editnote = () => {
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const navigate = useNavigate();

    function Editnote(){
      if(title===""||description===""){
        alert("please fill the title and description")
      }
      else{
        fetch("http://localhost:3001/putnotes",{
            method:"PUT",
            body:JSON.stringify({
                title:title,
               description:description
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then((res)=>res.json())
        .then((data)=>{
            if(data.status==="Success"){
                navigate("/homepage");
            }
        })
        .catch((e)=>{console.log(e)})
      }
    }
    return (
        <>
            <Navbar />
            <div id='Editnote-container'>
                <div>
                    <h2>Title</h2>
                    <input placeholder='Title' onChange={(e)=>{settitle(e.target.value)}} value={title}></input>
                </div>
                <div id='description-div'>
                    <h2>Description</h2>
                    <input placeholder="what's on your mind?"  onChange={(e)=>{setdescription(e.target.value)}} value={description}></input>
                </div>
                <div id='btn'>
                <button onClick={Editnote}>Edit Note</button>
                </div>
            </div>
        </>
    )
}

export default Editnote