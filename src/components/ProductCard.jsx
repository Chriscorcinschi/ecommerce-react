import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const ProductCard = ({ product }) => {
   const currency = "€";
   return (
      <Card.Root maxW="sm" overflow="hidden">
         <Image
            src={product.image}
            alt={product.name}
            h="200px"
            w="300px"
            objectFit="cover"
         />
         <Card.Body gap="2">
            <Card.Title>{product.name}</Card.Title>

            <Text
               textStyle="xl"
               fontWeight="semibold"
               letterSpacing="tight"
               mt="2"
               color="teal.500"
            >
               {currency} {product.price}
            </Text>
         </Card.Body>

         <Card.Footer gap="2">
            <RouterLink to={`/product/${product.id}`}>
               <Button variant="subtle">View Details</Button>
            </RouterLink>

            <Button variant="solid">Add to cart</Button>
         </Card.Footer>
      </Card.Root>
   );
};
