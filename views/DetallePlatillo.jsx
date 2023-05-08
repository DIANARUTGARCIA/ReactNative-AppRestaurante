import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import {Text, NativeBaseProvider, Box, Card, CardItem} from 'native-base';
import PedidosContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';

const DetallePlatillo = () => {
  //trayendi platillo del context
  const {platillo} = useContext(PedidosContext);
  const {nombre, imagen, descripcion, precio} = platillo;
  console.log(platillo);
  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <View style={globalStyles.contenido}>
        <Text style={globalStyles.titulo}>{nombre} </Text>
        <Box>
              <Image style={globalStyles.imagen} source={{uri:imagen}}/>
            </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default DetallePlatillo;
