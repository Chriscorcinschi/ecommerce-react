import { Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Logo = () => {
   return (
      <Box>
         <Text
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="tight"
         >
            E-commerce
         </Text>
      </Box>
   );
};
