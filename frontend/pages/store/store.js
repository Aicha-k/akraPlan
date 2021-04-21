import { combineReducers, createStore } from "redux";

const initialState = [
  { id: 1, name: "One To Zero", author: "heyy" },
  { id: 2, name: "The lean startup", author: "Adib" },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "Delete_BOOK":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "EDIT_BOOK":
      return [
        ...state.slice(0, action.index),
        action.editedBook,
        ...state.slice(action.index),
      ];
    //sth different is dispatched
    default:
      return state;
  }
};

// const coursesReducer = (state, action) => {};

// const AppReducer = combineReducers({
//   books: booksReducer,
//   courses: coursesReducer,
// });

export const store = createStore(booksReducer);
