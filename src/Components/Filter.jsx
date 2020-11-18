import React from 'react'

import { Menu, Input } from 'semantic-ui-react'

function Filter() {
    const [activeItem, setActiveItem] = React.useState('all')

    const handlerActiveItem = (category) => {
        setActiveItem(category)
    }

    return (
        <Menu secondary>
            <Menu.Item
                active={activeItem === 'all'}
                onClick={() => handlerActiveItem('all')}
            >   Все
            </Menu.Item>
            <Menu.Item
                active={activeItem === 'price_high'}
                onClick={() => handlerActiveItem('price_high')}>
                Цена(дорогие)
            </Menu.Item>
            <Menu.Item
                active={activeItem === 'price_low'}
                onClick={() => handlerActiveItem('price_low')}
            >
                Цена(дешевле)
            </Menu.Item>
            <Menu.Item
                active={activeItem === 'author'}
                onClick={() => handlerActiveItem('author')}
            >
                Автор
            </Menu.Item>
            <Input
                icon="search"
                placeholder="Введите запрос"
            />
        </Menu>
    )
}

export default Filter
