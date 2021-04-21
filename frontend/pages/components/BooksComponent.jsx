import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

export const BooksComponent = () => {
  //   const [books, setbooks] = useState([
  //     { id: 1, name: "One To Zero", author: "heyy" },
  //     { id: 2, name: "The lean startup", author: "Adib" },
  //   ]);
  const books = useSelector((state) => state);
  const onRemove = useCallback(() => {
    console.log("onRemove");
  }, [books]);
  const [count, setcount] = useState(1);
  const onCount = () => {
    console.log("onCount");
    setcount(count + 1);
  };
  return (
    <div>
      <button onClick={onCount}>test {count}</button>
      <table className="tableFixed">
        <thead>
          <tr>
            <th className="w-1/2">Title</th>
            <th className="w-1/2">Author</th>
          </tr>
        </thead>
        <tbody>
          <Books books={books} onRemove={onRemove}></Books>
        </tbody>
      </table>
    </div>
  );
};

const Books = React.memo(({ books, onRemove }) => {
  console.log("rerender Element");
  return (
    <>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>
            <button onClick={onRemove}>Remove</button>
          </td>
        </tr>
      ))}
    </>
  );
});
