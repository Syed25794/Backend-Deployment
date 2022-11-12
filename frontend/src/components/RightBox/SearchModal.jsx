import {
  Box,
  Button,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { TfiSearch } from "react-icons/tfi";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <Box >
      <Button
        fontSize={20}
        fontWeight={400}
        w={800}
        h={12}
        size={["xs", "lg", "xl"]}
        onClick={handleOpen}
        bg="white"
        color="gray"
      >
        <Icon marginLeft={-500} marginRight={4} as={TfiSearch} />
        Search the products...
      </Button>
      <Modal onClose={onClose} size={["xs", "lg", "xl"]} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Input type="text" placeholder="Search the products..." />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SearchModal;
