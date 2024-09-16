import { Box, HStack, Pressable, Icon, Center, Heading, FormControl, VStack, Input, Link, Button, Text, Image, ScrollView } from "native-base"

import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';
import Logo from './assets/GreenwayLogo.png';

export default function Cadastro({navigation}) {

  return (
    <ScrollView flex={1} p={5} mt={20}>
      <Image source={Logo} alt="Logo Greenway" alignSelf="center" />
      <Center w="100%" justifyItems="center">

       
        
        <Box safeArea p="2" py="8" w="90%" maxW="290">

          <Heading size="lg" fontWeight="600" color="green.800">
            Cadastro
          </Heading>
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">

          </Heading>

          <VStack space={3} mt="5">


            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <EntradaTexto type="text" />


              <FormControl.Label>Senha</FormControl.Label>
              <EntradaTexto type="password" />
            </FormControl>

            <Botao>Registrar</Botao>

            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                Já sou cliente.{" "}
              </Text>
              <Link _text={{
                color: "green.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} href="#"
                onPress={() => navigation.navigate('Login')}
              >
                Logar
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}