import React, { useState, useContext, useEffect } from 'react'
import {Button, Form as FormBootstrap} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { addBook,updateBook } from '../../redux/actions/bookAction'
import { StoreState } from '../../utils/types'
import { EditFormVisibilityContext } from '../../app/App'
import './Form.scss'

const Form = () => {

  const [isbn, setIsbn] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [tip, setTip] = useState('')

  const { editFormVisibility, setEditFormVisibility, bookToBeEdited } = useContext(EditFormVisibilityContext)
  const dispatch: Dispatch<any> = useDispatch()
  const books = useSelector((state: StoreState) => state.books)


  const checkIsbn = (value: string) => {
    setIsbn(value)

    const existingBook = books.data.find(book => book.isbn === value)
    existingBook ? setTip('Attention, the isbn value already exist in the list!') : setTip('')
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false);

    setIsbn('')
    setAuthor('')
    setTitle('')
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const book = {isbn, author, title}

    dispatch(addBook(book))
    setIsbn('')
    setAuthor('')
    setTitle('')
  }

  const handleEditSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const book = {isbn, author, title, previousIsbn: bookToBeEdited}

    dispatch(updateBook(book))
    setIsbn('')
    setAuthor('')
    setTitle('')
  }

  useEffect(() => {
 
    if(!!editFormVisibility && !!bookToBeEdited?.length ) {
      const newBookToBeEdit = books.data.find(book => book.isbn === bookToBeEdited)
      if(newBookToBeEdit) {
        setIsbn(newBookToBeEdit.isbn)
        setAuthor(newBookToBeEdit.author)
        setTitle(newBookToBeEdit.title)
      }
    }
  }, [bookToBeEdited, books, editFormVisibility])

  return (
    <>
    {editFormVisibility === false ? (
      // normal add book form
        <FormBootstrap onSubmit={handleSubmit}>
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>ISBN No.</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="12345" value={isbn} onChange={(e) => checkIsbn(e.target.value)} required />
            <FormBootstrap.Text className="text-muted">
              {tip}
            </FormBootstrap.Text>
          </FormBootstrap.Group>
    
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>Author</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="JK Rowling" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </FormBootstrap.Group>

          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>Title</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="Harry Potter" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </FormBootstrap.Group>

          <Button variant="primary" type="submit" className='float-end' disabled={tip !== '' ? true : false}>
            Submit
          </Button>
        </FormBootstrap>
    ) : (
      <>
      {/* edit book form */}
        <FormBootstrap onSubmit={handleEditSubmit}>
          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>ISBN No.</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="12345" value={isbn} onChange={(e) => checkIsbn(e.target.value)} required />
            <FormBootstrap.Text className="text-muted">
              {tip}
            </FormBootstrap.Text>
          </FormBootstrap.Group>

          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>Author</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="JK Rowling" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </FormBootstrap.Group>

          <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Label>Title</FormBootstrap.Label>
            <FormBootstrap.Control type="text" placeholder="Harry Potter" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </FormBootstrap.Group>

          <Button variant="primary" type="submit" className='float-end' disabled={tip !== '' ? true : false}>
            Update
          </Button>
        </FormBootstrap>
        <Button variant='info' className='w-100 mt-5' onClick={cancelUpdate}>BACK</Button>
      </>
    )}
    </> 
      );
}

export default Form