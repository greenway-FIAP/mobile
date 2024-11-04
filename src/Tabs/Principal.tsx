import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/GreenwayLogo.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from '../componentes/CardAtributo'
import { useEffect, useState } from "react";
import { getEmpresas } from "./../api/empresa";
import RecentEmpresas from './../componentes/RecentEmpresas'

export default function Principal({navigation}){


  const [empresas, setEmpresas] = useState([])
  useEffect(() => {
      const loadEmpresas = async () => {
          const response = await getEmpresas();
          const items = [];

          Object.keys(response.data).forEach((key) => {
              console.log(key)
              items.push({id: key, ...response.data[key]})
          })
          
          setEmpresas(items);
      };

      loadEmpresas();
  }, []);


  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="green.500">Boas-vindas</Titulo>

        <Titulo color="blue.800" alignSelf="center" mb={4}>Caracteristicas da empresa </Titulo>
        <VStack space={3} divider={<Divider />} w="100%">
        <Botao 
        onPress={() => navigation.navigate('AddEmpresa')}
      >Adicionar empresa</Botao>

      <RecentEmpresas data={empresas}/>

        </VStack>
      </VStack>
    </ScrollView>
  );
}