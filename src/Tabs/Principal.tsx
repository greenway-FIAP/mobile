import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/GreenwayLogo.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { depoimentos } from "../utils/mock";
import { CardConsulta } from '../componentes/CardAtributo'


export default function Principal(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="green.500">Boas-vindas</Titulo>

        <Titulo color="blue.800" alignSelf="center" mb={4}>Caracteristicas da empresa </Titulo>
        <VStack space={3} divider={<Divider />} w="100%">
        <CardConsulta
        nome="N° de funcionarios"
        caracteristica="5"
       
      />

      <CardConsulta
        nome="N° de vacas"
        caracteristica="555"
       
       
      />

        <CardConsulta
          nome="N° hectares"
          caracteristica="55"
          
        />
        </VStack>
      </VStack>
    </ScrollView>
  );
}