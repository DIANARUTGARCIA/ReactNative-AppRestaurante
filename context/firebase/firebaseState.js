import React, {useReducer} from 'react';
import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import {OBTENER_PRODUCTOS} from '../../types';

const FirebaseState = props => {
  //state inicial
  const initialState = {
    menu: [],
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  //funcion para traer los productos

  const obtenerProductos = () => {

    //CONSULTAR FIREBASE
    //  firebase.db.settings({ experimentalForceLongPolling: true });

     firebase.db.settings({experimentalForceLongPolling: true, merge: true });
    firebase.db
      .collection('productos')
      .where('existencia', '==', true)
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let platillos = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(platillos);
      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: platillos,
      });
    }
  };
  return (
    <FirebaseContext.Provider
      value={{menu: state.menu, firebase, obtenerProductos}}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
