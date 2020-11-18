import React from 'react'

import { Button, Card, Image } from 'semantic-ui-react'

function BookCard({ id, title, author, image, price, rating, addedCount, onClickAddBook }) {
    const onAddBook = () => {
        const obj = {
            id,
            title,
            author,
            image,
            price,
            rating
        }

        onClickAddBook(obj)
    }

    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                ₽ {price}
            </Card.Content>
            <Button onClick={onAddBook}>Добавить в корзину {addedCount && `(${addedCount})`}</Button>
        </Card>
    )
}

export default BookCard
