import React from 'react'
import { booksStateObj } from '../../utils/types'
import {Card, Row, Col} from 'react-bootstrap'

interface Props {
    books: booksStateObj
}

const Books = (props: Props) => {

    const { books: { data, loading, error } } = props

    if(!!data?.length === false) {
        return <div>No books founs!</div>
    }

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : data ? (
    <ul className="list-unstyled">
      {data.map(book => (
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