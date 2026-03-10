import {
   Box,
   Heading,
   Highlight,
   SimpleGrid,
   Text,
   VStack,
} from "@chakra-ui/react";

import { getProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
   const products = getProducts();
   return (
      <Box>
         <VStack spacing={2} align="center" py={8}>
            <Heading size="4xl" letterSpacing="tight">
               <Highlight query="E-commerce" styles={{ color: "teal.600" }}>
                  Welcome to E-commerce
               </Highlight>
            </Heading>
            <Text>
               Discover our best products specially selected with care for you
            </Text>
         </VStack>
         <Box>
            <Text px={8} fontWeight="bold" fontSize="lg" paddingBottom={4}>
               Our Products
            </Text>
            <SimpleGrid
               columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
               spacing={6}
               w="100%"
               px={8}
               justifyItems="center"
               alignItems="stretch"
               gap={4}
            >
               {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
               ))}
            </SimpleGrid>
         </Box>
      </Box>
   );
}
