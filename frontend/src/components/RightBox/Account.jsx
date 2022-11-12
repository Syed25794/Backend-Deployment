import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const Account = ({name}) => {
  return (
    <Menu>
      <MenuButton marginLeft={4} w={8} height={10} borderRadius="30%" as={Button} _hover={{decoration:"none"}} colorScheme="pink">
        {name[0]}
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default Account;
