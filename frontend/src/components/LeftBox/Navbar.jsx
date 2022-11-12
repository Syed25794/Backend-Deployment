import { Box, Button, Flex, Icon} from "@chakra-ui/react";
import React from "react";
// import Styles from './Navbar.module.css';
import {CiBadgeDollar,CiBoxes,CiDiscount1, CiGift, CiSettings} from 'react-icons/ci';
import {MdOutlineSupervisorAccount} from 'react-icons/md';
import {IoPricetagsOutline} from 'react-icons/io5';

const Navbar = () => {
  return (
    <Box>
      <Flex marginLeft="10px"  direction='column'>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid' ><Icon marginLeft={-5}  w={6} h={6} marginRight={1} as ={CiBadgeDollar} />Orders</Button></div>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid'><Icon marginLeft={-1}   w={6} h={6} marginRight={1} as ={CiBoxes} />Products</Button></div>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid'><Icon marginLeft={2}  w={6} h={6} marginRight={1} as ={MdOutlineSupervisorAccount} />Customers</Button></div>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid'><Icon marginLeft={-0.5}  w={6} h={6} marginRight={1} as ={CiDiscount1} />Discounts</Button></div>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid'><Icon marginLeft={-0.5}   w={6} h={6} marginRight={1} as ={CiGift} />Gift Cards</Button></div>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid'><Icon marginLeft={-6}   w={6} h={6} marginRight={1} as ={IoPricetagsOutline} />Pricing</Button></div>
        <div><Button w={170} marginTop={4} colorScheme="purple" variant='solid'><Icon marginLeft={-5}   w={6} h={6} marginRight={1} as ={CiSettings} />Settings</Button></div>
      </Flex>
    </Box>
  );
};

export default Navbar;
