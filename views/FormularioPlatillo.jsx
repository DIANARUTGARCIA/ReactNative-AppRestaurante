import React from 'react';
import {NativeBaseProvider, Text,Box, FormControl, HStack,Button,Icon,Heading,Input} from 'native-base';

const FormularioPlatillo = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <FormControl>
          <Heading>Cantidad</Heading>
          <HStack justifyContent={"space-around"}>
            <Button>
              +
            </Button>
            <Input/>

            <Button>
              -
            </Button>

          </HStack>

        </FormControl>

      </Box>
      <Text>FormularioPlatillo</Text>;
    </NativeBaseProvider>
  );
};

export default FormularioPlatillo;
