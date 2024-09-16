import React, { useState } from "react"
import { Box, HStack, Pressable, Icon, Center, Heading, FormControl, VStack, Input, Link, Button, Text, Image, View, ScrollView } from "native-base"

import { Feather } from "@expo/vector-icons"
import { Botao } from "../src/componentes/Botao";
import { EntradaTexto } from "../src/componentes/EntradaTexto";
import Logo  from './assets/GreenwayLogo.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logar({ navigation }) {

  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    const onSubmit = async() => {
        await AsyncStorage.setItem('token', username)
        if (username === 'Kaique' && password === '123') {
            console.log('Nice')
            navigation.navigate('Tabs')
        }else {
            console.log('pas tres nice ')
        }
    }

    const tokenlogin = async() => {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            navigation.navigate('Tabs')
            console.log('Tu es connecté')
        }else {
            console.log('Tu dois te connecter')
        }
    }

    tokenlogin()




  return <>
    <ScrollView flex={1} p={5} mt={10}>


      <Center w="100%" justifyItems="center">

        <View>
          <Image source={Logo} alt="Logo Greenway" alignSelf="center" />
        </View>
        <Box safeArea p="2" py="8" w="90%" maxW="290">

          <Heading size="lg" fontWeight="600" mt={10} color="green.800">
            Login
          </Heading>
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">

          </Heading>

          <VStack space={3} mt="5">


            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <EntradaTexto type="text" onChangeText={(value) => setUsername(value)} />


              <FormControl.Label>Senha</FormControl.Label>
              <EntradaTexto type="password"  onChangeText={(value) => setPassword(value)} />
            </FormControl>

            <Botao onPress={onSubmit}>Entrar</Botao>

            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                Eu sou novo aqui.{" "}
              </Text>
              <Link _text={{
                color: "green.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} href="#"
                onPress={() => navigation.navigate('Cadastro')}
              >
                Cadastrar
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  </>
}