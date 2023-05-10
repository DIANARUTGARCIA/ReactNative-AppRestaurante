import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
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
  Avatar,
  VStack,
} from 'native-base';

import globalStyles from '../styles/global';
import PedidosContext from '../context/pedidos/pedidosContext';

const ProgresoPedido = () => {

   const navigation = useNavigation();

    const { idpedido } = useContext(PedidosContext);
  return (
    <NativeBaseProvider>
      <View>
        <Text>Resumennj</Text>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
    tiempo: {
        marginBottom: 20,
        fontSize: 60,
        textAlign: 'center',
        marginTop: 80,
    },
    textoCompletado: {
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 20
    }
})

export default ProgresoPedido;
