import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

const AddBook = () => {
  const [titles, setTitles] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')
  const [isAvailable, setIsAvailable] = useState(false)
  const [errors, setErrors] = useState({})  // Initialize errors state

  const navigate = useNavigate();

  const createBook = (e) => {
    e.preventDefault()
    const newBook = { titles, author, pages, isAvailable }
    console.log(newBook)

    axios.post("http://localhost:8000/api/books", newBook)
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
      .catch(err => {
        console.log(err.response.data)
        setErrors(err.response.data.errors)
      })
  }

  return (
    <div>
      <Navigation header='Add a Book' />
      <form onSubmit={createBook}>
        <div>
          Title: 
          <input value={titles} onChange={(e) => setTitles(e.target.value)} />
          {errors.titles ? <p>{errors.titles.message}</p> : null}
        </div>

        <div>
          Author: 
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          {errors.author ? <p>{errors.author.message}</p> : null}
        </div>

        <div>
          Page Count: 
          <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
          {errors.pages ? <p>{errors.pages.message}</p> : null}
        </div>

        <div>
          Availability: 
          <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
        </div>

        <button>Add Book!</button>
      </form>
    </div>
  )
}

export default AddBook