import React, { useState } from "react";
import { Box, Button, ChakraProvider, Flex, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaPlus } from "react-icons/fa";

const Index = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddActivity = () => {
    if (newActivity) {
      setActivities([...activities, newActivity]);
      setNewActivity("");
      onClose();
    }
  };

  return (
    <ChakraProvider>
      <Flex direction="column" maxW="600px" margin="auto" minHeight="100vh">
        <Flex flexGrow={1} direction="column" p={4}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
            Your Score
          </Text>
          <VStack spacing={4} align="stretch">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px">
                  {activity}
                </Box>
              ))
            ) : (
              <Text textAlign="center">Add your first activity</Text>
            )}
          </VStack>
        </Flex>
        <Flex as="nav" align="center" justify="space-around" p={2} borderTop="1px" borderColor="gray.200">
          <IconButton icon={<FaHome />} aria-label="Home" fontSize="24px" variant="ghost" />
          <IconButton icon={<FaChartLine />} aria-label="Results" fontSize="24px" variant="ghost" />
        </Flex>
        <IconButton icon={<FaPlus />} aria-label="Add Activity" fontSize="24px" position="fixed" bottom="20px" right="20px" colorScheme="teal" borderRadius="full" onClick={onOpen} />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent m={0}>
          <ModalHeader>Add New Activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Type your activity here..." value={newActivity} onChange={(e) => setNewActivity(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddActivity}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Index;
