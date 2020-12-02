import React from 'react'

import { Menu, Input } from 'semantic-ui-react'

function Filter({ sortBy, searchQuery, onSetFilter, onSetSearchQuery }) {

    const onClickSetFilter = (sortBy) => {
        onSetFilter(sortBy)
    }

    const onClickSetSearchQuery = (e) => {
        onSetSearchQuery(e.target.value)
    }

    return (
        <Menu secondary>
            <Menu.Item
                active={sortBy === 'all'}
                onClick={() => onClickSetFilter('all')}
            >   Все
            </Menu.Item>
            <Menu.Item
                active={sortBy === 'price_high'}
                onClick={() => onClickSetFilter('price_high')}>
                Цена(дорогие)
            </Menu.Item>
            <Menu.Item
                active={sortBy === 'price_low'}
                onClick={() => onClickSetFilter('price_low')}
            >
                Цена(дешевле)
            </Menu.Item>
            <Menu.Item
                active={sortBy === 'author'}
                onClick={() => onClickSetFilter('author')}
            >
                Автор
            </Menu.Item>
            <Input
                onChange={onClickSetSearchQuery}
                value={searchQuery}
                icon="search"
                placeholder="Введите запрос"
            />
        </Menu>
    )
}

export default React.memo(Filter)
