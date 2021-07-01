import react from "react";
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
    author: "Paulo Coleho",
    title: "The Alchemist",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
    author: "Jeff Keller",
    title: "Attitude Is Everything ",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71rywJTxKGS._AC_UY327_FMwebp_QL65_.jpg",
    author: "William Walker Atkinson ",
    title: "Memory: How To Develop, Train, And Use It",
  },
];

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

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  // console.log(props);
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
