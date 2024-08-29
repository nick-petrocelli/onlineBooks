import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import Navigation from '../components/Navigation'


const BookDetails = () => {
  const [ book, setBook ] = useState(null) 
  const { id } = useParams()
  const [flag, setFlag] = useState(false)

  const navigate = useNavigate()


  useEffect ( () => {
    axios.get("http://localhost:8000/api/books/" + id)  
    .then(res => {
      setBook(res.data)
      // console.log(res.data)
    })
    .catch(err => 
      console.log(err)
    )
  },[])

  const deleteBook = ( bookID ) => {
    axios.delete("http://localhost:8000/api/books/" + bookID)
    .then(res => {
      navigate('/')
    })
    .catch(err => console.log(err))
  };

  return (
    <div> {book ? <>

    <Navigation header={ book.titles }/>

    <h3>{ book.titles }</h3>
    <h4>{ book.author }</h4>
    <h4>Page Count: { book.pages }</h4>
    <h4>{ book.isAvailable ? 'Available for Borrowing' : 'Not Available' }</h4>
    <button onClick={() => deleteBook(book._id)} >Borrow</button>

    </> : "loading..."}
    </div>
  )
}

export default BookDetails