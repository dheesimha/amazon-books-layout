import react from "react";
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        // console.log(book);
        // const { img, title, author } = book;
        return (
          // <div>
          //   <h3>{title}</h3>
          //   <h6>{author}</h6>
          // </div>

          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
