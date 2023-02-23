import { combineReducers } from 'redux'
import { booksReducer as books} from './bookReducer'

const reducers = {
  books
}

export default combineReducers(reducers);