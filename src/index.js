import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import book1 from "./images/book-1.jpg";
import book2 from "./images/book-2.jpg";
 
const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg'
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-2.jpg'
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.book1} >
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button>click me</button>
      </Book>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.book2} />
    </section>
  )
}

const Book = (props) => {
  // const {img, title, author} = props
  const {img, title, author, children} = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={book1} alt={title} />
       <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}



// const Image = () =>  <img src='https://m.media-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg' />  
 
 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

