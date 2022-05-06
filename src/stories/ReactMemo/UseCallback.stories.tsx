import React, {useCallback, useState} from "react";

export default {
    title: 'useCallback'
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
        </div>
    )
}

const Book = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const addBook = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={addBook}/>
        </>
    )
}
