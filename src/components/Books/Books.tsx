import React from 'react'
import { BooksState } from '../../utils/types'
import Book from '../Book/Book'

interface Props {
    books: BooksState
}

const Books = (props: Props) => {

    const { books: { data, loading, error } } = props

    if(loading) {
      return <div>Loading...</div>
    }

    if(error) {
      return <div>{error}</div>
    }

    if(!!data?.length === false) {
        return <div>The books list is empty!</div>
    }

  return data ? (
    <ul className="list-unstyled">
      {data.map(book => (
        <li key={book.isbn} className="my-2">
           <Book book={book} />
        </li>
    ))}
    </ul>
  ) : (
    <div>No books foud!</div>
  )
}

export default Books