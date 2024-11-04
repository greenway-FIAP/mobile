import React from "react"
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Empresatem from "./Empresatem"

export default function RecentEmpresas({ data }){
    const renderEmpresatem = ({item}) => {
        return <Empresatem {...item}/>
    }

    return(
        <View style={styles.container}>
            <FlatList 
            data={data} 
            renderItem={renderEmpresatem} 
            keyExtractor={(item) => item.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
    }
})