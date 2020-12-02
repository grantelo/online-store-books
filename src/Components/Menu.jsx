import React from 'react'
import { Menu } from 'semantic-ui-react'
import PopupMenu from './PopupMenu'


function MenuComponent({ totalPrice, totalCount, books }) {
    return (
        <Menu>
            <Menu.Item>Магазин книг</Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item>
                    Итого: <b>{totalPrice}</b> руб.
                </Menu.Item>
                <PopupMenu totalCount={totalCount} books={books} />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent
