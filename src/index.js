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
];

const names = ["Dhee", "Zoko", "Sahas"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
  console.log(name);
});

console.log(newName);
function BookList() {
  return <section className="bookList">{names}</section>;
}

// const title = "The Alchemist";
// const author = "Paulo Coelho";
// const img =
//   "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg";

const Book = (props) => {
  const { img, title, author } = props;
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
