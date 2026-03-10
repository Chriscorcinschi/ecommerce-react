import {
   Box,
   Flex,
   HStack,
   Button,
   Spacer,
   Container,
   Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";

import { useAuth } from "../context/AuthContext";
import { Logo } from "./ui/Logo";
import { Cart } from "./ui/Cart";

export default function Navbar() {
   const { user, logout } = useAuth();
   const navigate = useNavigate();

   function handleLogout() {
      logout();
      navigate("/");
   }

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
                  {user ? (
                     <HStack>
                        <Box
                           w="32px"
                           h="32px"
                           borderRadius="full"
                           bg="blue.500"
                        />
                        <Text display={{ base: "none", md: "block" }}>
                           {user.email}
                        </Text>
                        <Button
                           onClick={handleLogout}
                           colorScheme="red"
                           variant="outline"
                        >
                           Logout
                        </Button>
                     </HStack>
                  ) : (
                     <>
                        <Button
                           as={RouterLink}
                           to="/auth?mode=login"
                           variant="outline"
                        >
                           Login
                        </Button>
                        <Button
                           as={RouterLink}
                           to="/auth?mode=signup"
                           colorScheme="blue"
                        >
                           Sign Up
                        </Button>
                     </>
                  )}
                  <ColorModeButton />
               </HStack>
            </Flex>
         </Container>
      </Box>
   );
}
