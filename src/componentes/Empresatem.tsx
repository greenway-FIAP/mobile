import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { removeEmpresaFromApi } from "../api/empresa";

export default function Empresatem({id, descricao, N_funcionarios, date}){
const removeExpense = async () => {
    await removeEmpresaFromApi(id);
}

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{descricao}</Text>
            <Text style={styles.text}>{N_funcionarios}</Text>
            <Text style={styles.text}>{date}</Text>
            <PrimaryButton text={'Excluir'} onPress={removeExpense} />
        </View>
    )
}

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