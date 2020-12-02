import React from 'react'
import { Card, Container } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux'
import { orderBy } from 'lodash'

import { MenuComponent, Filter } from './Components/index'
import { fetchBooks } from './redux/actions/books'
import BookCard from './Components/BookCard';
import { addBook } from './redux/actions/cart'
import { setFilter, setSearchQuery } from './redux/actions/filter';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [])

  const { isLoaded, items: books } = useSelector(({ books }) => books)
  const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart)
  const { sortBy, searchQuery } = useSelector(({ filter }) => filter)

  const handlerAddBook = React.useCallback((obj) => {
    dispatch(addBook(obj))
  }, [])

  const handlerSetFilter = React.useCallback((sortBy) => {
    dispatch(setFilter(sortBy))
  }, [])

  const hadnlerSetSearchQuery = React.useCallback((filter) => {
    dispatch(setSearchQuery(filter))
  })

  const sortBooks = React.useCallback((books, sortBy) => {
    switch (sortBy) {
      case 'all':
        return books

      case 'price_high':
        return orderBy(books, ['price'], 'desc')

      case 'price_low':
        return orderBy(books, ['price'], 'asc')

      case 'author':
        return orderBy(books, ['author'], 'asc')
    }
  }, [])

  const filtersBooks = React.useCallback((books, searchQuery) => {
    return books.filter(
      (book) => book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0)

  }, [])

  const totalResponse = () => {
    return sortBooks(filtersBooks(books, searchQuery), sortBy)
  }

  const addedBooks = Object.keys(items).map((key) => {
    return items[key].items[0];
  })



  return (
    <Container>
      <MenuComponent totalCount={totalCount} totalPrice={totalPrice} books={addedBooks} />
      <Filter sortBy={sortBy} searchQuery={searchQuery} onSetFilter={handlerSetFilter} onSetSearchQuery={hadnlerSetSearchQuery} />
      <Card.Group itemsPerRow="4">
        {isLoaded ? totalResponse().map((book) => (
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
