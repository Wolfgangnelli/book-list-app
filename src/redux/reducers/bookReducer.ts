


const initialState = [
    {
        isbn: '12345',
        author: 'JK Rowling',
        title: 'Harry Potter',
    },
    {
        isbn: '67890',
        author: 'Imran Khan',
        title: 'Personal History',
    }
]

export const booksReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case '':
            
            break;
    
        default:
            return state;
    }
}