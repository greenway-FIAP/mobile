import React, { useState } from 'react';
import { Box, HStack, Center, Heading, FormControl, VStack, Link, Text, Image, ScrollView, Toast, Modal, Button } from "native-base";
import { ActivityIndicator } from 'react-native';
import { Botao } from '../componentes/Botao';
import { EntradaTexto } from '../componentes/EntradaTexto';
import Logo from '../assets/GreenwayLogo.png';
import { FIREBASE_AUTH } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isErrorModalVisible, setErrorModalVisible] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login'); // Navegar para a tela de login após o cadastro
    } catch (error) {
      console.log(error);
      let errorMessage = "Erro ao realizar cadastro.";
      if (error.code === 'auth/invalid-email') {
        errorMessage = "E-mail inválido.";
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = "E-mail já está em uso.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "A senha deve ter pelo menos 6 caracteres.";
      }
      setError(errorMessage);
      setErrorModalVisible(true); // Exibir o modal de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollView flex={1} p={5} mt={20}>
        <Image source={Logo} alt="Logo Greenway" alignSelf="center" />
        <Center w="100%" justifyItems="center">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="green.800">
              Cadastro
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <EntradaTexto type="text" onChangeText={(text) => setEmail(text)} />
                <FormControl.Label>Senha</FormControl.Label>
                <EntradaTexto type="password" onChangeText={(text) => setPassword(text)} />
              </FormControl>
              {loading ? (
                <ActivityIndicator size='large' color='#0000FF' />
              ) : (
                <Botao text="Registrar" onPress={signUp}>Cadastrar</Botao>
              )}
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600">
                  Já sou cliente.{" "}
                </Text>
                <Link
                  _text={{ color: "green.500", fontWeight: "medium", fontSize: "sm" }}
                  onPress={() => navigation.navigate('Login')}
                >
                  Logar
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </ScrollView>

      {/* Modal para exibir mensagens de erro */}
      <Modal isOpen={isErrorModalVisible} onClose={() => setErrorModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tente novamente</Modal.Header>
          <Modal.Body>
            <Text>{error}</Text>
            {/* Você pode adicionar componentes adicionais aqui */}
            <Text color="red.500">Por favor, verifique suas credenciais e tente novamente.</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group>
              <Button onPress={() => setErrorModalVisible(false)}>Fechar</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}