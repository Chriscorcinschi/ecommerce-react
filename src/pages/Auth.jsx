import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { AuthCard } from "../components/AuthCard";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
   const [searchParams, setSearchParams] = useSearchParams();
   const mode = searchParams.get("mode") === "login" ? "login" : "signup";

   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   const { signUp, login } = useAuth();
   const navigate = useNavigate();

   function handleToggleMode() {
      setError(null);
      setSearchParams({ mode: mode === "signup" ? "login" : "signup" });
   }

   async function handleSubmit({ email, password }) {
      setError(null);
      setLoading(true);

      const result =
         mode === "signup" ? signUp(email, password) : login(email, password);

      setLoading(false);

      if (result.success) {
         navigate("/");
      } else {
         setError(result.error);
      }
   }

   return (
      <SimpleGrid justifyItems="center">
         <AuthCard
            mode={mode}
            onSubmit={handleSubmit}
            onToggleMode={handleToggleMode}
            error={error}
            loading={loading}
         />
      </SimpleGrid>
   );
}
