import React, {useContext, useEffect} from 'react';
import {StyleSheet, View,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FirebaseContext from '../context/firebase/firebaseContext';
import PedidosContext from '../context/pedidos/pedidosContext';
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
  ScrollView,
  Center,
  Divider,
  SectionList,
} from 'native-base';
import globalStyles from '../styles/global';

const Menu = () => {
  //context de firebase
  const {menu, obtenerProductos} = useContext(FirebaseContext);
  const {seleccionarPlatillo} = useContext(PedidosContext);

  //funcion para redireccionar
  const navigation = useNavigation();

  // const mostrarHeading = (categoria, i) => {
  //   if (i > 0) {
  //     const categoriaAnterior = menu[i - 1].categoria;
  //     if (categoriaAnterior !== categoria) {
  //       return (
  //         <View style={styles.separador}>
  //           <Text style={styles.separadorTexto}> {categoria} </Text>
  //         </View>
  //       );
  //     }
  //   } else {
  //     return (
  //       <View style={styles.separador}>
  //         <Text style={styles.separadorTexto}> {categoria} </Text>
  //       </View>
  //     );
  //   }
  // };
  useEffect(() => {
    obtenerProductos();
    // eslint-disable-next-line
  }, []);
  return (
    <NativeBaseProvider
      style={globalStyles.contenedor}
      //bg="yellow.50"
    >
      <SectionList
        w="94%" //segun tamano de pantalla del cel
        mx={3}
        sections={menu}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
     const { imagen, nombre, descripcion, categoria, precio, id} = item;
          return (
            <Pressable onPress={()=>{
               const {existencia, ...item2} = item;
                            
                            seleccionarPlatillo(item2)
               navigation.navigate("DetallePlatillo")

            }}>
            <Box
              ml="2"
              mr="2"
              borderBottomWidth="1"
              _dark={{borderColor: 'muted.50'}}
              borderColor="muted.800"
              pl={['0', '4']}
              pr={['0', '5']}
              py="2"
            >
              <Spacer />
              <HStack
                space={[4, 3]} //espacio entre el avatar y el texto nombre
                justifyContent="space-between"
              >
                <Avatar size="76px" source={{uri: imagen}}></Avatar>

                <VStack>
                  <Text
                    _dark={{color: 'warmGray.50'}}
                    color="coolGray.800"
                    bold
                  >
                    {nombre}
                  </Text>

                  <Text color="coolGray.600" _dark={{color: 'warmGray.200'}}>
                    {descripcion}
                  </Text>
                </VStack>

                <Spacer />

                <Text
                  fontSize="xs"
                  mr="3"
                  mt="3"
                  _dark={{color: 'warmGray.50'}}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  ${precio}
                </Text>
              </HStack>
            </Box>
            </Pressable>
          );
        }}
        renderSectionHeader={({section: {categoria}}) => (
          <Box
            bg="muted.200"
            color="light.500"
            //fontSize='xl'
            mt={5}
            mb="3"
            p="2"
            pb="2"
            //p={2}
            _text={{
              fontSize: 'md',
              //fontWeight: 'bold',
              textTransform: 'capitalize',
              //color: 'white',
              textAlign: 'center',
            }}
          >
            {categoria}
          </Box>
        )}
      />
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
