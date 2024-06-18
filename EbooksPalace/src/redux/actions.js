import axios from "axios";
import { GET_BOOKS, GET_BOOKSID, GET_BOOKSNAME, CREATE_BOOKS, FILTER_AUTHOR, FILTER_EDITORIAL, FILTER_CATEGORY, ORDER_A_Z, ORDER_PRICE, PAGINATION } from "./actions-type";

export const getBooks = () =>{
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/books');
            return dispatch({
                type: GET_BOOKS,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getBooksId = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/books/${id}`);
            return dispatch({
                type: GET_BOOKSID,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getBooksByName = (name) =>{
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/books/${name}`);
            return dispatch({
                type: GET_BOOKSNAME,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createBooks = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/books', data)
            return dispatch({
                type: CREATE_BOOKS,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

// export const filterAuthor = (value) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get('http://localhost:3001/author', value);
//             return dispatch({
//                 type:FILTER_AUTHOR,
//                 payload: response.data
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     }
// }


