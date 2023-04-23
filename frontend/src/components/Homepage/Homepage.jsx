import React, { useEffect, useState } from 'react'
import "./Homepage.css";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate=useNavigate();
  const [books,setbooks] = useState([]);
  useEffect(()=>{
       fetch("https://book-list-9zvs.onrender.com/getbook")
       .then((res)=>res.json())
       .then((data)=>{
        setbooks(data.books)
      })
       .catch((e)=>console.log(e))
  },[])
  return (
    <>
    <Navbar/>
    <div id='card-container'>
      {
        books.map((book,index)=>{
            return (
              <div id='card' key={index} >
                <div className='box'>
                <img src="https://media.istockphoto.com/id/1367848168/photo/old-victorian-book-cover-in-gold-and-black-leather-the-chefs-doeuvre-dart-of-the-paris.jpg?b=1&s=170667a&w=0&k=20&c=005af1VhQ2QnTGDox1FAD0taK_qlaL_uAxbadGw_to0=" alt="book"  />
                <h1>{book.title}</h1><hr/>
                <p>{book.description}</p><hr/>
                <p>{book.Gener}</p>
                </div>
                  </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Homepage;