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

const firstBook = {
  img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
  author: "Paulo Coleho",
  title: "The Alchemist",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
  author: "Jeff Keller",
  title: "Attitude Is Everything ",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam
          ab animi porro voluptas a mollitia dolorem eos at laboriosam.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
}

// const title = "The Alchemist";
// const author = "Paulo Coelho";
// const img =
//   "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg";

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
