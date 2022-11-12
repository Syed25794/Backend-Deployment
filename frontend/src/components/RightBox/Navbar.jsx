import { Box, Button, Flex} from "@chakra-ui/react";
import React from "react";
// import Styles from './Navbar.module.css';
import {CiBadgeDollar} from 'react-icons/ci';

const Navbar = () => {
  return (
    <Box>
      <Flex  direction='column'>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid' >Orders</Button></Box>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid'>Products</Button></Box>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid'>Customers</Button></Box>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid'>Discounts</Button></Box>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid'>Gift Cards</Button></Box>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid'>Pricing</Button></Box>
        <Box><Button w={150} marginTop={4} colorScheme="purple" variant='solid'>Settings</Button></Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
