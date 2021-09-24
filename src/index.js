import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {books} from './books';
import Book from './Book'

function BookList() {
    return(
        <section className="bookList">
            { books.map((book) => {
             
                return (
                <Book {...book} key={book.id} ></Book>
                )
            })}
       
        </section>
    );
    
}

    

ReactDOM.render(<BookList />, document.getElementById('root'));