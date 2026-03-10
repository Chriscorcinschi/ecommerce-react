import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../data/products";

import {
   Box,
   Container,
   Grid,
   Image,
   Stack,
   Text,
   Heading,
   Button,
   Spinner,
} from "@chakra-ui/react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
   const currency = "€";
   const { addToCart } = useCart();

   const { id } = useParams();
   const navigate = useNavigate();

   const [product, setProduct] = useState(null);

   useEffect(() => {
      const foundProduct = getProductsById(id);

      if (!foundProduct) {
         navigate("/");
         return;
      }

      setProduct(foundProduct);
   }, [id]);

   if (!product) {
      return (
         <Container py={20} textAlign="center">
            <Spinner size="xl" />
         </Container>
      );
   }

   return (
      <Container maxW="6xl" py={10}>
         <Box p={10} borderRadius="xl" boxShadow="inner">
            <Grid
               templateColumns={{ base: "1fr", md: "1fr 1fr" }}
               gap={10}
               alignItems="center"
            >
               {/* Product Image */}
               <Box>
                  <Image
                     src={product.image}
                     alt={product.name}
                     borderRadius="lg"
                     objectFit="cover"
                     w="100%"
                  />
               </Box>

               {/* Product Info */}
               <Stack spacing={6}>
                  <Heading size="xl">{product.name}</Heading>

                  <Text fontSize="2xl" fontWeight="bold" color="teal.500">
                     {currency} {product.price}
                  </Text>

                  <Text color="gray.600">{product.description}</Text>

                  <Stack direction="row" spacing={4}>
                     <Button
                        colorScheme="teal"
                        size="lg"
                        onClick={() => addToCart(product.id)}
                     >
                        Add to Cart
                     </Button>

                     <Button
                        variant="outline"
                        size="lg"
                        onClick={() => navigate(-1)}
                     >
                        Back
                     </Button>
                  </Stack>
               </Stack>
            </Grid>
         </Box>
      </Container>
   );
}
