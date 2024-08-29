import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Navigation from '../components/Navigation'



const BookCatalog = () => {
  const [ allBooks, setAllBooks ] = useState([])

  const navigate = useNavigate()
  

  useEffect ( () => {
    axios.get("http://localhost:8000/api/books") 
    .then(res => {
      setAllBooks(res.data)
    })
  },[])

  return (
    <div >
    <Navigation header='Book Catalog' />

      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page count</th>
            <th>Available</th>
            <th>Book Page</th>
          </tr>
        </thead>

        <tbody>
          { allBooks.map(book => (
          <tr key={ book._id }>
            <td>{ book.titles }</td>
            <td>{ book.author }</td>
            <td>{ book.pages }</td>
            <td>{ book.isAvailable ? 'yes' : 'no' } | <button onClick={() => navigate('/books/' + book._id + '/update')}>edit</button></td>
            <td><Link to={"/books/" + book._id + "/details"}>Book Details</Link></td>
          </tr>
        )) }
        </tbody>
      </table>

    </div>
  )
}

export default BookCatalog