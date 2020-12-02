import React from 'react'
import { Popup, Menu } from 'semantic-ui-react'
import CartItem from './CartItem'

function PopupMenu({ totalCount, books }) {
    return (
        <Popup
            trigger={
                <Menu.Item>
                    Корзина (<b>{totalCount}</b>)
                </Menu.Item>
            }
            content={books && books.map((book) => (
                <CartItem key={book.id} {...book}></CartItem>
            ))}
            on="click"
        />
    )
}

export default PopupMenu
