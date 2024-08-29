import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'


const Update = (props) => {
    const [titles, setTitles] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [isAvailable, setIsAvailable] = useState(false)
    const [errors, setErrors] = useState({})

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/books/' + id)
            .then(res => {
                console.log(res.data)
                setTitles(res.data.titles)
                setAuthor(res.data.author)
                setPages(res.data.pages)
                setIsAvailable(res.data.isAvailable)

            })
            .catch(err => console.log(err))
    }, [])

    const updateBook = (e) => {
        e.preventDefault();
        const updatedBook = {titles, author, pages, isAvailable};
        axios.put('http://localhost:8000/api/books/' + id, updatedBook)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            }) 
    }

  return (
    <div>

      <Navigation header={ 'Update ' + titles  } />
        
      <h2>Update</h2>

      <form onSubmit={updateBook}>

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

        <button>Update!</button>

      </form>

    </div>
  )
}

export default Update