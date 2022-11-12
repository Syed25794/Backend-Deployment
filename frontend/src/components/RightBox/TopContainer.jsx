import { Flex } from '@chakra-ui/react';
import React from 'react';
import Account from './Account';
import Notifications from './Notifications';
import SearchModal from './SearchModal';

const TopContainer = () => {
  return (
    <Flex borderBottom={"1px solid gray"} width="full" boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}>
        <SearchModal />
        <Notifications />
        <Account  name={"Syed"} />
    </Flex>
  )
}

export default TopContainer