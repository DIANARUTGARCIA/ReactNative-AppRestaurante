import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Heading,
  HStack,
  FormControl,
  NativeBaseProvider,
  Box,
  Button,
  Input,
} from 'native-base';
import globalStyles from '../styles/global';

const FormularioPlatillo = () => {
  const [cantidad, setCantidad] = useState('1');
  //incrementa en 1 el boton
  const incrementar = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    setCantidad(nuevaCantidad.toString());
  };
  //decrementar la cantidad
  const decrementar = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      setCantidad(nuevaCantidad.toString());
    }
  };

  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <FormControl>
        <Heading style={globalStyles.titulo}>Cantidad</Heading>
        <HStack justifyContent="space-around">
          <Button
            onPress={() => decrementar()}
            style={{backgroundColor: '#000', justifyContent: 'center'}}
            size={70}
          >
            -
          </Button>
          <Input
            style={{textAlign: 'center', fontSize: 20, color: '#000'}}
            w="40%"
            variant="unstyled"
            value={cantidad}
            keyboardType="numeric"
            onChangeText={cantidad => setCantidad(cantidad.toString())}
          />
          <Button
            onPress={() => incrementar()}
            style={{backgroundColor: '#000'}}
            size={70}
          >
            +
          </Button>
        </HStack>
      </FormControl>
    </NativeBaseProvider>
  );
};

export default FormularioPlatillo;
