import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import book1 from "./images/book-1.jpg";
 

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
     
    </section>
  )
}

const Image = () => (
  <img src={book1} alt='Interesting Facts For Curious Minds' />
);

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}



// const Image = () =>  <img src='https://m.media-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg' />  
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}>Jordan Moore</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

