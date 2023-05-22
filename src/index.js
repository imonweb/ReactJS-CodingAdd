import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books'; 
import Book from './Book';
 
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book);
  }
  return (
    <section className='booklist'>
      {/* <EventExamples /> */}
      {books.map((book, index)=> {
        return (
          <Book {...book} key={book.id} getBook={getBook} number={index} />
        )
      })}
    
    </section>
  )
}

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target)
//     console.log(e.target.name)
//     console.log(e.target.name.value)
//     console.log('handle form input');
//   }
//   const handleButtonClick = () => {
//     alert('handle button click')
//   }
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('form submitted')
//   }

//   return <section>
//     <form onSubmit={handleFormSubmission}>
//       <h2>Typical Form</h2>
//       <input type='text' name='product' onChange={(e) => console.log(e.target.value)} style={{margin: '1rem 0'}} /> 
//     <button type="submit">submit</button>
//     <button onClick={() => {
//       console.log('click me')
//     }}>click me</button>
//     </form>
//     <div>

//     </div>
//   </section>
// }



// const Image = () =>  <img src='https://m.media-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg' />  
 
 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

