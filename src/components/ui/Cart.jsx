import { Circle, Float, IconButton } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export const Cart = () => {
   return (
      <IconButton as={RouterLink} to="/cart" variant="ghost" aria-label="Cart">
         <FiShoppingCart size={18} />{" "}
         <Float>
            <Circle size="4" bg="red" color="white">
               3
            </Circle>
         </Float>
      </IconButton>
   );
};
