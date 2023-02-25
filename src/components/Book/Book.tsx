import React, { useContext } from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import { BookType } from '../../utils/types'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../../redux/actions/bookAction'
import { EditFormVisibilityContext } from '../../app/App'

interface Props {
    book: BookType
}

const Book = (props: Props) => {

    const { book } = props

    const dispatch: Dispatch<any> = useDispatch()
    const {editFormVisibility, setEditFormVisibility, setBookToBeEdited} = useContext(EditFormVisibilityContext)

    const handleDeleteBook = () => {
        if(window.confirm(`Do you want delete the ${book.title} book?`)) {
            dispatch(deleteBook(book.isbn))
        }
    }

    const handleEditBook = () => {
        setEditFormVisibility(true);
        setBookToBeEdited(book.isbn)
    }

  return (
    <Card>
    <Card.Body>
      <Row>
        <Col xxl={11}>
          <Card.Title>#{book.isbn}</Card.Title>
          <Card.Text>{book.title} by {book.author}</Card.Text>
        </Col>
        {editFormVisibility === false && (
        <Col xxl={1} className="flex flex-column">
          <div style={{cursor: 'pointer'}} onClick={handleDeleteBook}>
            <i className="fa-solid fa-trash"></i>
          </div>
          <div style={{cursor: 'pointer'}} onClick={handleEditBook}>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </Col>
        )}
      </Row>
    </Card.Body>
  </Card>
  )
}

export default Book