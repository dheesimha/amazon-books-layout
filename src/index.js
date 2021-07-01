import react from "react";
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
// function Greeting() {
//   return <h4>Hello world</h4>;
// }

// const Greeting = () => {
// <ReactFragment>
//   return React.createElement("h1", {}, "Hello world");
// </ReactFragment>;
// };

// function BookList() {
//   return (
//     <section>
//       {/* <h2>Dheemanth</h2>
//       <Person />
//       <Message /> */}

//     </section>
//   );
// }

// const Person = () => <h2>Dheemanth</h2>;
// const Message = () => {
//   return <p>This is a message</p>;
// };

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      {" "}
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51MtWwKWcuL._AC_SX360_SY240_QL70_.jpg"
    alt=""
  />
);

const Title = () => (
  <h1>
    World's Greatest Entrepreneurs: Biographies of Inspirational Personalities
    For Kids
  </h1>
);

const Author = () => {
  return <p>Wonder House Books</p>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
