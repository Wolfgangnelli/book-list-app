import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { Books, Form } from '../components'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { getBooks, deleteBooks } from '../redux/actions/bookAction'
import './App.css';

function App() {

  const dispatch: Dispatch<any> = useDispatch()
  const books = useSelector((state: any) => state.books)

  const handleDeleteBooks = () => {
    if(window.confirm('Do you want delete all books?')) {
      dispatch(deleteBooks())
    }
  }
  
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  

  return (
    <div>
      <header>header</header>
      <main>
        <Container fluid="xxl">
          <Row>
            <Col>
              <h1 className="heading">
                Book-List App using React | Redux | Firebase
              </h1>
            </Col>
          </Row>
        <br />
        <Row>
          <Col xl={6}>
            <Form />
          </Col>
        </Row>
        <Row>
            <Books books={books} />
        </Row>
        <Row>
          <Col>
          {!!books.data.length && (
            <Button variant='danger' onClick={handleDeleteBooks}>DELETE ALL BOOKS</Button>
          )}
          </Col>
        </Row>
        </Container>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
