import {
   Button,
   Card,
   Field,
   FieldLabel,
   Input,
   Stack,
   Text,
   Link,
   VStack,
   Box,
} from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input";
import { useForm } from "react-hook-form";

export function AuthCard({ mode, onSubmit, onToggleMode, error, isLoading }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const isSignup = mode === "signup";

   return (
      <Card.Root maxW="md" w="full" as="form" onSubmit={handleSubmit(onSubmit)}>
         <Card.Header>
            <Card.Title textStyle="2xl">
               {isSignup ? "Sign Up" : "Login"}
            </Card.Title>
         </Card.Header>

         <Card.Body>
            <Stack gap="4" w="full">
               {error && <p>{error}</p>}

               <Field.Root invalid={!!errors.email}>
                  <Field.Label>Email</Field.Label>
                  <Input
                     placeholder="me@example.com"
                     {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                     <Field.ErrorText>{errors.email.message}</Field.ErrorText>
                  )}
               </Field.Root>

               <Field.Root invalid={!!errors.password}>
                  <FieldLabel>Password</FieldLabel>
                  <PasswordInput
                     placeholder="Enter your password"
                     {...register("password", {
                        required: "Password is required",
                        minLength: {
                           value: 6,
                           message: "Password must be at least 6 characters",
                        },
                        maxLength: {
                           value: 12,
                           message: "Password must be at most 12 characters",
                        },
                     })}
                  />
                  {errors.password && (
                     <Field.ErrorText>
                        {errors.password.message}
                     </Field.ErrorText>
                  )}
               </Field.Root>
            </Stack>
         </Card.Body>

         <Card.Footer>
            <VStack w="full" gap="3">
               <Button
                  variant="solid"
                  type="submit"
                  w="full"
                  loading={isLoading}
               >
                  {isSignup ? "Sign Up" : "Login"}
               </Button>

               <Box w="full">
                  {isSignup ? (
                     <Text textStyle="sm" color="gray.600">
                        Already have an account?{" "}
                        <Link
                           variant="underline"
                           color="blue.500"
                           onClick={onToggleMode}
                           cursor="pointer"
                        >
                           Login
                        </Link>
                     </Text>
                  ) : (
                     <Text textStyle="sm" color="gray.600">
                        Don't have an account?{" "}
                        <Link
                           variant="underline"
                           color="blue.500"
                           onClick={onToggleMode}
                           cursor="pointer"
                        >
                           Sign Up
                        </Link>
                     </Text>
                  )}
               </Box>
            </VStack>
         </Card.Footer>
      </Card.Root>
   );
}
