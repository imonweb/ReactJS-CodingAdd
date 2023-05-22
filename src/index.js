import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import book1 from "./images/book-1.jpg";
import book2 from "./images/book-2.jpg";

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-2.jpg',
    id: 2
  }
]
 
const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book)=> {
        return (
          <Book {...book} key={book.id}/>
        )
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.name.value)
    console.log('handle form input');
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted')
  }

  return <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Typical Form</h2>
      <input type='text' name='product' onChange={(e) => console.log(e.target.value)} style={{margin: '1rem 0'}} /> 
    <button type="submit">submit</button>
    <button onClick={() => {
      console.log('click me')
    }}>click me</button>
    </form>
    <div>

    </div>
  </section>
}

const Book = (props) => {
  // const {img, title, author} = props
  const {img, title, author} = props;
  console.log(props);
  const displayTitle = () => {
    console.log(title);
  }
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author}</h4>
 
    </article>
  )
}



// const Image = () =>  <img src='https://m.media-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg' />  
 
 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

