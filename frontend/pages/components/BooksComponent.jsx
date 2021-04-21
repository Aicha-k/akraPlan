import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
          <Books books={books}></Books>
        </tbody>
      </table>
    </div>
  );
};

const Books = React.memo(({ books }) => {
  const dispatch = useDispatch();
  const removeABook = (id) => {
    dispatch({ type: "Delete_BOOK", id });
  };
  return (
    <>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>
            <button onClick={() => removeABook(book.id)}>Remove</button>
          </td>
        </tr>
      ))}
    </>
  );
});
