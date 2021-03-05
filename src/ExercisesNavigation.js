import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  List,
  ListItem,
  Box,
  Heading
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import colors from "./helpers/colors";

export default function ExercisesNavigation({ paths }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const color = colors.blue[1];
  const bg = colors.blue[0];

  return (
    <>
      <Box
        as="header"
        bg={bg}
        w="100%"
        p={4}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
        top="0"
        zIndex={100}
      >
        <Button bg="#ffffff" ref={btnRef} onClick={onOpen}>
          <span role="img" aria-label="exercise">
            🏋🏻‍♂️
          </span>
        </Button>
        <Heading fontSize="xl" color={color}>
          useEffect / useLayoutEffect
        </Heading>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg={bg} color={color}>
              Navigate exercises
            </DrawerHeader>
            <DrawerBody>
              <List>
                {paths.map(({ path, title }) => (
                  <ListItem key={path} marginBottom={3} fontSize={18}>
                    <NavLink
                      to={path}
                      exact
                      onClick={onClose}
                      activeStyle={{ color }}
                    >
                      {title}
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
