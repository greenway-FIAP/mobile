import React from "react"
import {  Box, HStack, Pressable, Icon,Center,Heading, FormControl, VStack, Input, Link, Button, Text } from "native-base"

import {Feather} from "@expo/vector-icons"
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";

export default function Logar() {
    return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Logar
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          
        </Heading>

        <VStack space={3} mt="5">
         
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <EntradaTexto type="password"/>


            <FormControl.Label>Senha</FormControl.Label>
           <EntradaTexto type="password"/>
          </FormControl>

          <Botao>Entrar</Botao>

          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Eu sou novo aqui.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Cadastrar
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
}