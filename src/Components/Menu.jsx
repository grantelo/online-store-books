import React from 'react'
import { Menu } from 'semantic-ui-react'

function MenuComponent() {
    return (
        <Menu>
            <Menu.Item>Магазин книг</Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item>
                    Итого: <b>0</b> руб.
                </Menu.Item>

                <Menu.Item>
                    Корзина (0)
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent
