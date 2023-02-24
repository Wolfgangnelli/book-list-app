import React from 'react'
import { book } from '../../utils/types'
import {Card, Row, Col} from 'react-bootstrap'

interface Props {
    books: book[]
}

const Books = (props: Props) => {

    const { books } = props

    if(!!books?.length === false) {
        return <div>No books founs!</div>
    }

  return books ? (
    <ul className="list-unstyled">
      {books.map(book => (
        <li key={book.isbn} className="my-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col xxl={11}>
                    <Card.Title>#{book.isbn}</Card.Title>
                    <Card.Text>{book.title} by {book.author}</Card.Text>
                  </Col>
                  <Col xxl={1} className="flex flex-column">
                    <div>
                      <i className="fa-solid fa-trash"></i>
                    </div>
                    <div>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
        </li>
    ))}
    </ul>
  ) : (
    <div>No books</div>
  )
}

export default Books