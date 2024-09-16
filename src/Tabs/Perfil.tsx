import { Box, HStack, Pressable, Icon, Center, Heading, FormControl, VStack, Input, Link, Button, Text, Image, View, ScrollView } from "native-base"

import { Titulo } from '../componentes/Titulo'
import { useEffect, useState } from 'react';
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import Logo  from './../assets/GreenwayLogo.png'



export default function Perfil({ navigation }){

  
  
  return (
    <>
    <ScrollView flex={1} p={5} mt={10}>


      <Center w="100%" justifyItems="center">

        
        <Box safeArea p="2" py="8" w="90%" maxW="290">

          <Heading size="lg" fontWeight="600" mt={10} color="green.800">
            Perfil
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

            <Botao onPress={() => navigation.navigate('Tabs') }>Atualizar</Botao>

            <HStack mt="6" justifyContent="center">
              
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  </>
  );
}