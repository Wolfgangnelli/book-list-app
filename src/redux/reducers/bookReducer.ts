/* eslint-disable array-callback-return */
import { ActionType, BookType, BooksState } from '../../utils/types'
import { 
    ADD_BOOK_SUCCESS, 
    ADD_BOOK_FAIL, 
    ADD_BOOK_REQUEST,
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
    DELETE_BOOKS_REQUEST, 
    DELETE_BOOKS_SUCCESS, 
    DELETE_BOOKS_FAIL,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAIL,
    UPDATE_BOOK_REQUEST,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_FAIL,
} from '../actions/actionTypes'


const initialState: BooksState = {
    data: [],
    loading: false
}

export const booksReducer = ( state = initialState, { type, payload }:  ActionType) => {
 
    switch (type) {
        case ADD_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_BOOK_SUCCESS:
            const existBook = state?.data?.find((book: BookType) => book.isbn === payload.isbn)

            if(existBook) {
                return {
                    ...state,
                    data: state?.data?.map((book: BookType) => book.isbn === existBook?.isbn ? payload : book)
                }
            } else { 
                return {
                    loading: false,
                    data: [...state?.data, payload]
                }
            } 

        case ADD_BOOK_FAIL:
            return {
                loading: false,
                error: payload
            }

        case GET_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case GET_BOOK_SUCCESS:
            return {
                loading: false,
                data: payload
            }

        case GET_BOOK_FAIL:
            return {
                loading: false,
                error: payload
            }

        case DELETE_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DELETE_BOOKS_SUCCESS:
            return {
                loading: false,
                data: []
            }

        case DELETE_BOOKS_FAIL:
            return {
                loading: false,
                error: payload
            }

        case DELETE_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DELETE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter((book: BookType) => book.isbn !== payload.isbn)
            }

        case DELETE_BOOK_FAIL:
            return {
                loading: false,
                error: payload
            }

        case UPDATE_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case UPDATE_BOOK_SUCCESS:
            const updatedBooks: BookType[] = []
            
            state.data.map((book: BookType) => {
                if(book.isbn === payload.previousIsbn) {
                    book.isbn = payload.isbn;
                    book.author = payload.author;
                    book.title = payload.title;
                }
                updatedBooks.push(book)
            })

            return {
                ...state,
                loading: false,
                data: updatedBooks
            }
           
        case UPDATE_BOOK_FAIL:
            return {
                loading: false,
                error: payload
            }
    
        default:
            return state;
    }
}
