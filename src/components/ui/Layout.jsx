import { Box, Container } from "@chakra-ui/react";

export const Layout = ({ children }) => {
   return (
      <Box as="main" flex="1">
         <Container maxW="container.xl" py={8}>
            {children}
         </Container>
      </Box>
   );
};
