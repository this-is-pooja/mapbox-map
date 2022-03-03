import React, { useState } from 'react';
import { Box, Input, Center, HStack, FormControl } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";

function successpopup() {
	const MySwal = withReactContent(Swal);
	MySwal.fire({
		icon: 'success',
		title: 'Account Ragistered successfully'
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
export default function Signup() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const signUpHandler = (e) => {
		if(name===''&& password===''){
			errorpopup();
		}else{
		e.preventDefault();
		localStorage.setItem('Name', JSON.stringify(name));
		localStorage.setItem('Password', JSON.stringify(password));
		successpopup();
		}
	}
	return (
		<>
			<Center mt="12rem">
				<Box h="15rem" w="16rem" p="1rem" bg="white" style={{ borderRadius: "0.2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
					<FormControl>
						<Input size="md" variant="flushed" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
						<Input size="md" variant="flushed" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
						<Box w="14rem" h="1.8rem" mt="3rem" as="button" bg="red" color="white" style={{ borderRadius: "0.2rem" }} onClick={signUpHandler}>SignUp</Box>
					</FormControl>
					<HStack h="1.8rem" w="16rem" mt="0.6rem">
						<Box fontSize="0.8rem" pl="0.3rem" color="lblack">Already have an account?</Box>
						<Link to="/login">
							<Box fontSize="0.8rem" color="#0645AD">Login</Box>
						</Link>
					</HStack>
				</Box>
			</Center>

		</>
	);
};
