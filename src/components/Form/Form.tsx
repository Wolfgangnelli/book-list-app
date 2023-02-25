import React, { useState } from 'react'
import {Button, Form as FormBootstrap} from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { addBook } from '../../redux/actions/bookAction'


const Form = () => {

  const [isbn, setIsbn] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')

  const dispatch: Dispatch<any> = useDispatch()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let book = {isbn, author, title}
    console.log(book)
    dispatch(addBook(book))
    setIsbn('')
    setAuthor('')
    setTitle('')
  }

  return (
        <FormBootstrap onSubmit={handleSubmit}>
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>ISBN No.</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="12345" onChange={(e) => setIsbn(e.target.value)} required />
            <FormBootstrap.Text className="text-muted">
              We'll never share your email with anyone else.
            </FormBootstrap.Text>
          </FormBootstrap.Group>
    
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>Author</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="JK Rowling" onChange={(e) => setAuthor(e.target.value)} required />
          </FormBootstrap.Group>

          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>Title</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="Harry Potter" onChange={(e) => setTitle(e.target.value)} required />
          </FormBootstrap.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormBootstrap>
      );
}

export default Form