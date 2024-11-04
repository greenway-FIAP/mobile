import React, { useState, useEffect } from "react";
import { Box, HStack, Center, Heading, FormControl, VStack, Text, Image, View, ScrollView, Link } from "native-base";
import { Botao } from "../src/componentes/Botao";
import { EntradaTexto } from "./componentes/EntradaTexto";
import Logo from './assets/GreenwayLogo.png';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase.config";

type Props = {};

export default function Logar({ navigation }: Props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userToken = userCredential.user.uid; // Aqui você pode usar um token ou ID do usuário
      
      // Armazenar o token no AsyncStorage
      await AsyncStorage.setItem('token', userToken);
      
      // Navegar para a tela principal
      navigation.navigate('Tabs');
    } catch (error) {
      console.error("Erro de login:", error);
      alert("Login falhou. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  // Verifica se já existe um token ao carregar o componente
  useEffect(() => {
    const checkToken = async () => {
      const value = await AsyncStorage.getItem('token');
      if (value) {
        navigation.navigate('Tabs');
      }
    };

    checkToken();
  }, [navigation]);

  return (
    <>
      <ScrollView flex={1} p={5} mt={10}>
        <Center w="100%" justifyItems="center">
          <View>
            <Image source={Logo} alt="Logo Greenway" alignSelf="center" />
          </View>
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" mt={10} color="green.800">
              Login
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <EntradaTexto type="text" onChangeText={(value) => setEmail(value)} />
                <FormControl.Label>Senha</FormControl.Label>
                <EntradaTexto type="password" onChangeText={(value) => setPassword(value)} />
              </FormControl>
              <Botao onPress={signIn} isLoading={loading} isDisabled={loading}>
                Entrar
              </Botao>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                  Eu sou novo aqui.{" "}
                </Text>
                <Link
                  _text={{ color: "green.500", fontWeight: "medium", fontSize: "sm" }}
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
  );
}