export type book = {
    isbn: string
    author: string
    title: string
}

export type actionType = {
    type: string
    payload: book
}