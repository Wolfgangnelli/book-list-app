export type book = {
    isbn: string
    author: string
    title: string
}

export type booksStateObj = {
    loading: boolean
    data?: book[]
    error?: string
}

export type actionType = {
    type: string
    payload: book
}