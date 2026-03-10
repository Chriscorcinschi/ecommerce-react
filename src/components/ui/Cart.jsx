import { Circle, Float, IconButton } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

export const Cart = () => {
   const { cartItems } = useCart();

   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
   return (
      <IconButton as={RouterLink} to="/cart" variant="ghost" aria-label="Cart">
         <FiShoppingCart size={18} />{" "}
         <Float>
            <Circle size="4" bg="red" color="white">
               {totalItems}
            </Circle>
         </Float>
      </IconButton>
   );
};
