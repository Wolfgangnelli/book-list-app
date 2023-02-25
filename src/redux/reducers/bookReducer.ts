import { actionType, book } from '../../utils/types'
import { 
    ADD_BOOK_SUCCESS, 
    ADD_BOOK_FAIL, 
    ADD_BOOK_REQUEST,
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_FAIL,
    DELETE_BOOKS_REQUEST, 
    DELETE_BOOKS_SUCCESS, 
    DELETE_BOOKS_FAIL 
} from '../actions/actionTypes'


const initialState: any = {
    data: []
}

export const booksReducer = ( state = initialState, { type, payload }:  actionType) => {
 
    switch (type) {
        case ADD_BOOK_REQUEST:
            return {
                loading: true,
                ...state
            }
        case ADD_BOOK_SUCCESS:
            let existBook = state?.data?.find((book: book) => book.isbn === payload.isbn)

            if(existBook) {
                return {
                    ...state,
                    data: state.map((book: book) => book.isbn === existBook?.isbn ? payload : book)
                }
            } else { 
                return {
                    loading: false,
                    data: [...state.data, payload]
                }
            } 

        case ADD_BOOK_FAIL:
            return {
                loading: false,
                error: payload
            }

        case GET_BOOK_REQUEST:
            return {
                loading: true,
                ...state
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
                loading: true,
                ...state
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
    
        default:
            return state;
    }
}