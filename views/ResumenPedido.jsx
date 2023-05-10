import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Text,
  Heading,
  HStack,
  FormControl,
  NativeBaseProvider,
  Box,
  Button,
  Input,
  Avatar,
  VStack,
} from 'native-base';
import globalStyles from '../styles/global';
import PedidosContext from '../context/pedidos/pedidosContext';

const ResumenPedido = () => {
  const {pedido, total, mostrarResumen} = useContext(PedidosContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce(
      (nuevoTotal, articulo) => nuevoTotal + articulo.total,
      0,
    );
    mostrarResumen(nuevoTotal);
  };

  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <ScrollView style={styles.scroll}>
        <Heading style={globalStyles.titulo}>Resumen Pedido</Heading>
        {pedido.map((platillo, i) => {
          const {cantidad, nombre, imagen, id, precio} = platillo;
          return (
            <View style={styles.tarjeta}>
              <HStack key={id + i} space={[4, 4]}>
                <Box>
                  <Avatar size="90px" source={{uri: imagen}}></Avatar>
                </Box>
                <VStack>
                  <Text>{nombre} </Text>
                  <Text>cantidad:{cantidad} </Text>
                  <Text>Precio: $ {precio} </Text>
                </VStack>
              </HStack>
            </View>
          );
        })}
        <Text style={[globalStyles.cantidad, styles.titulo]}>
          Total a Pagar: $ {total}
        </Text>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    marginHorizontal: 15,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  titulo: {
    textAlign: 'center',
  },
  scroll: {
    marginBottom: 40,
  },
});

export default ResumenPedido;
