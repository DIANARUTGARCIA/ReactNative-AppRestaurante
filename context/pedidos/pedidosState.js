import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';
import {SELECCIONAR_PRODUCTO} from '../../types';

const PedidoState = props => {
  //state inicial
  const initialState = {
    pedido: [],
    platillo: null,
  };
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  //Selecciona el producto que el usuario quiera
  const seleccionarPlatillo = platillo => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: platillo,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        seleccionarPlatillo,
      }}
    >
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidoState;
