import React from 'react'
import { List, Button, Image } from 'semantic-ui-react'

function CartItem({ title, id, image }) {
    return (
        <List selection divided verticalAlign="middle">
            <List.Item>
                <List.Content floated="right">
                    <Button color="red">
                        Удалить
                    </Button>
                </List.Content>
                <Image avatar src={image}></Image>
                <List.Content>{title}</List.Content>
            </List.Item>
        </List>
    )
}

export default CartItem
