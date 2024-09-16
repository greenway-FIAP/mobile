import { VStack, Text, Avatar } from "native-base";
import { Botao } from "./Botao";

interface CardProps{
    nome: string;
    caracteristica: string;
}

export function CardConsulta({
    nome,   
    caracteristica,
}: CardProps) {
    return(
        <VStack w="100%"  p="5" borderRadius="lg" shadow={2} mb={5}>
            <VStack flexDir="row" >

          
            <VStack pl="4">
                <Text fontSize="md" bold>{nome}</Text>
                <Text>{caracteristica}</Text>
                
            </VStack>
            </VStack>
          
        </VStack>
    )
}