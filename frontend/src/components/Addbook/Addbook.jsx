import React, { useState } from 'react'
import './Addbook.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
const Addbook = () => {
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const[author,setAuthor]=useState("");
    const [ISBN,setISBN]=useState("");
    const [published_date,setpublishedDate]=useState("");
    const [publisher,setPublisher]=useState("");
    const [Gener,setGener]=useState("")
    const navigate = useNavigate();

    function Postbook(){
      if(title===""||description==="" ){
        alert("please fill the title and description")
      }
      else{
        fetch("https://book-list-9zvs.onrender.com/postbook",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                ISBN:ISBN,
                author:author,
               description:description,
               published_date:published_date,
               publisher:publisher,
               Gener:Gener



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
            <div id='addnote-container'>
                <div>
                    <h2>Title</h2>
                    <input placeholder='Title' onChange={(e)=>{settitle(e.target.value)}}></input>
                </div>
                <div id='description-div'>
                    <h2>Description</h2>
                    <input placeholder="what's on your mind?"  onChange={(e)=>{setdescription(e.target.value)}}></input>
                </div>
                <div id='author-div'>
                    <h2>Author</h2>
                    <input placeholder="shakesspear"  onChange={(e)=>{setAuthor(e.target.value)}}></input>
                </div>
                <div id='ISBN-div'>
                    <h2>ISBN</h2>
                    <input placeholder="ISBN"  onChange={(e)=>{setISBN(e.target.value)}}></input>
                </div>
                <div id='published_date-div'>
                    <h2>published_date</h2>
                    <input placeholder="published_date"  onChange={(e)=>{setpublishedDate(e.target.value)}}></input>
                </div>
                <div id='publisher-div'>
                    <h2>publisher</h2>
                    <input placeholder="publisher"  onChange={(e)=>{setPublisher(e.target.value)}}></input>
                </div>
                <div id='Gener-div'>
                    <h2>Gener</h2>
                    <input placeholder="Gener"  onChange={(e)=>{setGener(e.target.value)}}></input>
                </div>






                <div id='btn'>
                <button onClick={Postbook}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Addbook