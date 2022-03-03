import React, { useState } from 'react';
import { Box, Input, Center, HStack, FormControl } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link, useNavigate } from "react-router-dom";

function Loginpopup() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: 'success',
    title: 'Login successfully'
  })
}
function errorpopup() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!'
  })
}
export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const SignInHandler = (e) => {
    e.preventDefault();
    let username = localStorage.getItem("Name").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    if (!name || !password) {
      errorpopup();
    } else if
      (password !== pass || name !== username) {
      errorpopup();
    } else {
      Loginpopup();
      navigate('/Home');
    }
  }
  return (
    <>
      <Center mt="12rem">
        <Box h="15rem" w="16rem" p="1rem" bg="white" style={{ borderRadius: "0.2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <FormControl>
            <Input size="md" variant="flushed" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <Input size="md" variant="flushed" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Box w="14rem" h="1.8rem" mt="3rem" as="button" bg="red" color="white" style={{ borderRadius: "0.2rem" }} onClick={SignInHandler}>SignIn</Box>
          </FormControl>
          <HStack h="1.8rem" w="16rem" mt="0.6rem">
            <Box fontSize="0.8rem" pl="0.8rem" color="lblack">Having an account?</Box>
            <Link to="/">
              <Box fontSize="0.8rem" color="#0645AD">SignUp</Box>
            </Link>
          </HStack>
        </Box>
      </Center>

    </>
  );
};
