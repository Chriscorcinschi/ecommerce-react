import { Box, Flex, HStack, Button, Spacer, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";
import { Logo } from "./ui/Logo";
import { Cart } from "./ui/Cart";

export default function Navbar({ isAuthenticated, onLogout }) {
   return (
      <Box
         as="nav"
         borderBottom="1px"
         borderColor="gray.200"
         position="sticky"
         top="0"
         zIndex="1000"
         backdropFilter="blur(15px)"
         boxShadow="sm"
      >
         <Container maxW="container.xl">
            <Flex h="70px" align="center">
               <Logo />

               <Spacer />
               <HStack spacing={6} ml={10}>
                  <Button
                     as={RouterLink}
                     to="/"
                     variant="ghost"
                     fontSize="medium"
                  >
                     Home
                  </Button>

                  <Cart />
               </HStack>

               <Spacer />

               <HStack spacing={4}>
                  {!isAuthenticated ? (
                     <>
                        <Button as={RouterLink} to="/login" variant="outline">
                           Login
                        </Button>

                        <Button as={RouterLink} to="/signup" colorScheme="blue">
                           Sign Up
                        </Button>
                     </>
                  ) : (
                     <Button
                        onClick={onLogout}
                        colorScheme="red"
                        variant="outline"
                     >
                        Logout
                     </Button>
                  )}
                  <ColorModeButton />
               </HStack>
            </Flex>
         </Container>
      </Box>
   );
}
