import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = [
  { id: 1, name: "One To Zero", author: "heyy" },
  { id: 2, name: "The lean startup", author: "Adib" },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "Delete_BOOK":
      return state.filter((book) => book.id !== action.id);
    case "EDIT_BOOK":
      return [
        ...state.slice(0, action.index),
        action.editedBook,
        ...state.slice(action.index),
      ];
    case "GET_BOOKS":
      return action.data;
    case "FETCHING_BOOKS":
      return [];
    case "ERROR_WHEN_FETCHING_BOOKS":
      return [];
    //sth different is dispatched
    default:
      return state;
  }
};

const fetchingBooks = () => {
  //here schould be an async call
  return axios.get("....");
};

const fetchBooks = () => {
  return function (dispatch) {
    dispatch({ type: "FETCHING_BOOKS" });
    return fetchbooks()
      .then((result) => {
        return dispatch({ type: "GET_BOOKS", data: result.data });
      })
      .catch(() => dispatch({ type: "ERROR_WHEN_FETCHING_BOOKS" }));
  };
};

// const coursesReducer = (state, action) => {};

// const AppReducer = combineReducers({
//   books: booksReducer,
//   courses: coursesReducer,
// });

export const store = createStore(booksReducer, applyMiddleware(thunk));
