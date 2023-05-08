import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
  NativeBaseProvider,
  Box,
  Text,
  FlatList,
  HStack,
  Container,
  List,
  Image,
  VStack,
  Spacer,
  Flex,
  Fragment,
  Avatar,
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
      <Box style={globalStyles.contenedor} bgColor="#FFF">
        <FlatList
          data={menu}
          renderItem={({item}) => (
            <Box borderBottomWidth="1" borderColor="muted.300" py="2" px="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  source={{
                    uri: item.imagen,
                  }}
                  size="lg"
                  alt="Imagen plato"
                ></Avatar>
                <VStack justifyContent="center">
                  <Text bold>{item.nombre}</Text>
                  <Text color="muted.400" isTruncated maxW="95%">
                    {item.descripcion}
                  </Text>
                  <Text fontSize="xs" bold>
                    Precio: ${item.precio}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  separador: {
    backgroundColor: '#000',
  },
  separadorTexto: {
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Menu;
