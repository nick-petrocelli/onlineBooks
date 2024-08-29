import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import BookCatalog from './views/BookCatalog'
import BookDetails from './views/BookDetails'
import AddBook from './views/AddBook'
import Update from './views/Update'

function App() {

  return (
    <>
    
    <Routes>

      <Route path='/' element={< BookCatalog />}/>
      <Route path='/books/:id/details' element={< BookDetails />}/>
      <Route path='/create' element={< AddBook />}/>
      <Route path='/books/:id/update' element={< Update />}/>
      

    </Routes>
    </>
  )
}

export default App