import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Alert,
  AlertIcon,
  Text
} from "@chakra-ui/react";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("mnqwyvar");
/*   if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  } */

  const nameInputHandler = (event) => setName(event.target.value);
  const phoneInputHandler = (event) => setPhone(event.target.value);
  const emailInputHandler = (event) => setEmail(event.target.value);
  const messageInputHandler = (event) => setMessage(event.target.value);

  return (
    <>
      <Box m={8} color="#0B0E3F">
        <form
          action="https://formspree.io/f/mnqwyvar"
          onSubmit={handleSubmit}
          method="POST"
        >
          <VStack spacing={3}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson color="gray.800" />}
                />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={nameInputHandler}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="phone">Teléfono</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsTelephone color="gray.800" />}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={phoneInputHandler}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">Correo electrónico</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineEmail color="gray.800" />}
                />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={emailInputHandler}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </InputGroup>
            </FormControl>
            {/* enable Honeypot spam filtering */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <FormControl isRequired>
              <FormLabel htmlFor="message">Mensaje</FormLabel>
              <Textarea
              id="message"
              name="message"
                size="md"
                value={message}
                onChange={messageInputHandler}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              rounded={"full"}
              disabled={state.submitting || state.succeeded}
            >
              Enviar Mensaje
            </Button>
            {state.succeeded && <>
                <Alert status='success'>
                    <AlertIcon />
                    <Text>
                    ¡Mensaje enviado!
                    </Text>
                </Alert>
            </>}
          </VStack>
        </form>
      </Box>
    </>
  );
}
