import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, NativeBaseProvider, Box,Button} from 'native-base';
import PedidosContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';

const DetallePlatillo = () => {
  //trayendi platillo del context
  const {platillo} = useContext(PedidosContext);
  const {nombre, imagen, descripcion, precio} = platillo;
   //funcion para redireccionar
  const navigation = useNavigation();
  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <Box style={globalStyles.contenido}>
        <Text style={globalStyles.titulo}>{nombre} </Text>
        <Box  border="1" borderRadius="md">
          <Image style={globalStyles.imagen} source={{uri: imagen}} />
          <Text style={{marginTop: 20}}>{descripcion} </Text>
          <Text style={globalStyles.cantidad}>Precio: $ {precio} </Text>
        </Box>
      </Box>
      <View>
        <Button
         style={globalStyles.boton}
        onPress={()=>navigation.navigate('FormularioPlatillo')}
         >Ordenar Platillo</Button>
      </View>
    </NativeBaseProvider>
  );
};

export default DetallePlatillo;
