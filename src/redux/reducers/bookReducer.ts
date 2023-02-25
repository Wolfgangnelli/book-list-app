import { actionType, book } from '../../utils/types'
import { ADD_BOOK_SUCCESS, ADD_BOOK_FAIL, ADD_BOOK_REQUEST } from '../actions/actionTypes'


const initialState: book[] = [
/*     {
        isbn: '12345',
        author: 'JK Rowling',
        title: 'Harry Potter',
    },
    {
        isbn: '67890',
        author: 'Imran Khan',
        title: 'Personal History',
    } */
]

export const booksReducer = ( state = initialState, { type, payload }:  actionType) => {
    switch (type) {
        case ADD_BOOK_REQUEST:
            return {
                loading: true,
                ...state
            }
        case ADD_BOOK_SUCCESS:
            let existBook = state.find(book => book.isbn === payload.isbn)

            if(existBook) {
                return {
                    ...state,
                    books: state.map(book => book.isbn === existBook?.isbn ? payload : book)
                }
            } else {
                return {
                    loading: false,
                    books: [...state, payload]
                }
            }

        case ADD_BOOK_FAIL:
            return {
                loading: false,
                error: payload
            }
    
        default:
            return state;
    }
}