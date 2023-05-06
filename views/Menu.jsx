import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Fragment} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
  Container,
  NativeBaseProvider,
  Separator,
  IActionsheetContentProps,
  List,
  ListItem,
  Thumbnail,
  Text,
  Flex,
  Box,
} from 'native-base';
import globalStyles from '../styles/global';

const Menu = () => {
  //context de firebase
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
    console.log(menu);
  }, []);
  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor}>
        <Container>
          <List>
            {menu.map(platillo => {
              const {imagen, nombre, descripcion, categoria, id} = platillo;
              return (
                <Fragment key={id}>
                  <List>
                    <Flex>
                      <Text>{nombre} </Text>
                      <Text>{descripcion}</Text>
                    </Flex>
                  </List>
                </Fragment>
              );
            })}
          </List>
        </Container>
      </Box>
    </NativeBaseProvider>
  );
};

export default Menu;
