import react from "react";
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
    author: "Paulo Coleho",
    title: "The Alchemist",
  },

  {
    img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
    author: "Jeff Keller",
    title: "Attitude Is Everything ",
  },

  {
    img: "https://m.media-amazon.com/images/I/71rywJTxKGS._AC_UY327_FMwebp_QL65_.jpg",
    author: "William Walker Atkinson ",
    title: "Memory: How To Develop, Train, And Use It",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        // console.log(book);
        // const { img, title, author } = book;
        return (
          // <div>
          //   <h3>{title}</h3>
          //   <h6>{author}</h6>
          // </div>

          <Book book={book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
