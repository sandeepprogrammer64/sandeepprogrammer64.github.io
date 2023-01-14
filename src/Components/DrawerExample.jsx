import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {HamburgerIcon } from '@chakra-ui/icons'
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <>
        <Button  colorScheme='teal' textAlign="center" onClick={onOpen}><HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
            <DrawerBody>
              <Stack spacing='24px'>
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={20} gap={10}>
                <a href="#home">Home</a>
                <a href="#about me">About Me</a>
                <a href="#skills" >Skills</a>
                <a href="#project" >Project</a>
                <a href="#contact">Contact</a>
                <a href="#">Resume</a>
              </Box>

              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerExample