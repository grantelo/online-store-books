import React from 'react'
import { Card, Container } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux'

import { MenuComponent, Filter } from './Components/index'
import { fetchBooks } from './redux/actions/books'
import BookCard from './Components/BookCard';
import { addBook } from './redux/actions/cart'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [])

  const { isLoaded, items: books } = useSelector(({ books }) => books)
  const { items } = useSelector(({ cart }) => cart)

  const handlerAddBook = (obj) => {
    dispatch(addBook(obj))
  }

  return (
    <Container>
      <MenuComponent />
      <Filter />
      <Card.Group itemsPerRow="4">
        {isLoaded ? books.map((book) => (
          <BookCard
            key={book.id}
            {...book}
            addedCount={items[book.id] && items[book.id].totalCount}
            onClickAddBook={handlerAddBook}
          >
          </BookCard>
        ))
          : "Загрузка..."
        }
      </Card.Group>
    </Container>
  );
}

export default App;
