import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Book from './Book'
import './Book.css'

const URL = 'http://localhost:5000/books'

const fetchHandler = async() => {
  return await Axios(URL).then((res) => res.data);
}

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <React.Fragment>
      <div className='book-list'>
        <ul>
          {books && 
            books.map((book, index) => (
              <li className='book' key={index}>
                <Book 
                  name={book.name} 
                  author={book.author} 
                  description={book.description} 
                  price={book.price} 
                  image={book.image}
                  _id={book._id}/>
              </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Books