export type BookType = {
    isbn: string
    author: string
    title: string
    previousIsbn?: string
}

/* export type BooksStateObj = {
    loading: boolean
    data?: BookType[]
    error?: string
} */

export type ActionType = {
    type: string
    payload: BookType
}

export interface BooksState {
    loading: boolean;
    data: BookType[];
    error?: string | undefined;
  }

export interface StoreState {
    books: BooksState
  }