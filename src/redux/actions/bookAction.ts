import { ADD_BOOK_REQUEST, ADD_BOOK_SUCCESS, ADD_BOOK_FAIL } from './actionTypes'
import { book } from '../../utils/types'
import fs from '../../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

interface AddBook {
    type: string
    payload?: any 
}

type DispatchAddBook = (arg: AddBook) => (AddBook)

export const addBook = (book: book) => async (dispatch: DispatchAddBook) => {

    try {
        dispatch({
            type: ADD_BOOK_REQUEST,
        });

        const bookRef = await addDoc(collection(fs, 'books'), {
            isbn: book.isbn,
            author: book.author,
            title: book.title
        })

        dispatch({
            type: ADD_BOOK_SUCCESS,
            payload: bookRef
        })
        
    } catch (error: any) {
        dispatch({
            type: ADD_BOOK_FAIL,
            payload: error
        })
        
    }

}