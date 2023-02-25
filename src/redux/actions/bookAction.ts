import { 
    ADD_BOOK_REQUEST, 
    ADD_BOOK_SUCCESS, 
    ADD_BOOK_FAIL, 
    GET_BOOK_REQUEST, 
    GET_BOOK_SUCCESS, 
    GET_BOOK_FAIL,
    DELETE_BOOKS_REQUEST,
    DELETE_BOOKS_SUCCESS,
    DELETE_BOOKS_FAIL,
} from './actionTypes'
import { book } from '../../utils/types'
import fs from '../../config/firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

interface IBook {
    type: string
    payload?: any 
}

type DispatchBook = (arg: IBook) => (IBook)

export const addBook = (book: book) => async (dispatch: DispatchBook) => {

    try {
        dispatch({
            type: ADD_BOOK_REQUEST,
        });

        await addDoc(collection(fs, 'books'), {
            isbn: book.isbn,
            author: book.author,
            title: book.title
        })

        dispatch({
            type: ADD_BOOK_SUCCESS,
            payload: book
        })
        
    } catch (error: any) {
        dispatch({
            type: ADD_BOOK_FAIL,
            payload: error
        })
    }
}

export const getBooks = () => async (dispatch: DispatchBook) => {
    try {
        dispatch({
            type: GET_BOOK_REQUEST
        })

        const queryBooks = await getDocs(collection(fs, 'books'))
 
        if(queryBooks.docs.length > 0) {
            const booksArray: any[] = []

            queryBooks.forEach((book) => {
                booksArray.push(book.data())
            })
    
            dispatch({
                type: GET_BOOK_SUCCESS,
                payload: booksArray
            })
        }
       
        
    } catch (error: any) {
        dispatch({
            type: GET_BOOK_FAIL,
            payload: error
        })
    }
}

export const deleteBooks = () => async (dispatch: DispatchBook) => {
    try {
        dispatch({
            type: DELETE_BOOKS_REQUEST
        })

        const queryBooks = await getDocs(collection(fs, 'books'))

        if(queryBooks.docs.length > 0) {
            for (const book of queryBooks.docs) {
                await deleteDoc(doc(fs, 'books', book.id))
            }

            dispatch({
                type: DELETE_BOOKS_SUCCESS
            })
        }
        
    } catch (error: any) {
        dispatch({
            type: DELETE_BOOKS_FAIL,
            payload: error
        })
    }
}