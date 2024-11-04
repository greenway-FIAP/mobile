import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { removeEmpresaFromApi } from "../api/empresa";
import { EmpresasContext } from "./../context/Empresas-context";
import { useNavigation } from "@react-navigation/native";

 const Empresatem = ({ id, descricao, N_funcionarios, date }) => {
    const empresasContext = useContext(EmpresasContext)
    const navigation = useNavigation()
    const removeEmpresa = async () => {
        try {
            await removeEmpresaFromApi(id);
            empresasContext.refresh();
        } catch (error : unknown) {
            console.error(error);
        }
    }

    const goToEmpresa = () => {
        navigation.navigate("EditEmpresa", {
            id: id,
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{descricao}</Text>
            <Text style={styles.text}>{N_funcionarios}</Text>
            <Text style={styles.text}>{date}</Text>
            <PrimaryButton text={'Editar'} onPress={goToEmpresa} />
            <PrimaryButton text={'Excluir'} onPress={removeEmpresa} />
        </View>
    )
}


export default Empresatem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        margin: 16,
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 8,
    },
    text: {
        color: "#fff"
    }
})