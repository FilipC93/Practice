import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import './Products.css'

const Products = ({ productItems, items, handleCartToggle }) => {
    return (
        <Box className="products">
            {productItems.map((productItem, index) => {
                const isAddedToCart = items.includes(index);
                return (
                    <Box className="card" key={index}>
                        <Image className="product-image"
                            src={productItem.image}
                            alt={productItem.name}
                        />
                        <Box>
                            <Text as={'h3'} className="product-name">{productItem.name}</Text>
                        </Box>
                        <Box className="product-price">{productItem.price}€</Box>
                        <Button
                            id={isAddedToCart ?
                                "product-button-added" : "product-button"}
                            onClick={() => handleCartToggle(index)}>
                            <Text>
                                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                            </Text>
                        </Button>
                    </Box>
                )
            })}
        </Box>
    );
}

export default Products;