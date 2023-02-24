import { useSelector } from 'react-redux'
import { Books, Form } from '../components'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './App.css';

function App() {

  const books = useSelector((state: any) => state.books)

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
          {!!books.length && (
            <Button variant='danger'>DELETE ALL BOOKS</Button>
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
