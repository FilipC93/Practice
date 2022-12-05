import React from "react";
import { Box, Image } from '@chakra-ui/react'
import './Cart.css'

const Cart = ({ cartQuantity }) => {
    return (
        <Box className="cart-items">
            <Box className="cart-items-header">
                Cart Items
            </Box>
            {cartQuantity.length === 0 && (
                <Box className="cart-items-empty">
                    No items are added.
                </Box>
            )}
            <Box>
                {cartQuantity.map(item => {
                    return (
                        <Box key={item.id} className="cart-item-list">
                            <Image className="cart-items-image" src={item.image} alt={item.name} />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Cart;