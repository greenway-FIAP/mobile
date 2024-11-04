import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../componentes/Input'
import PrimaryButton from '../componentes/PrimaryButton'
import { addEmpresa } from '../api/empresa'
import { FormControl } from 'native-base'

type Props = {
  navigation: any;
};

const AddEmpresa = ({ navigation }: Props) => {
  const [descricao, setDescricao] = useState('')
  const [N_funcionarios, setN_funcionarios] = useState(0);
  const [date, setDate] = useState('');
  const [error, setError] = useState<string | null>(null);

  const save = async () => {
    try {
      console.log('save', descricao, N_funcionarios, date);
      const empresaData = {
        descricao: descricao,
        N_funcionarios: N_funcionarios,
        date: date
      }

      await addEmpresa(empresaData);
      
      // Exibir mensagem de sucesso
      Alert.alert(
        'Sucesso',
        'Empresa cadastrada com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Principal'),
          },
        ],
        { cancelable: false }
      );
    } catch (err) {
      console.error('Erro ao cadastrar empresa:', err);
      setError('Ocorreu um erro ao cadastrar a empresa. Por favor, tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Dados da empresa</Text>      

      <Input placeholder="Descrição" onChangeText={setDescricao}/>
      <Input placeholder="N° funcionarios"  onChangeText={setN_funcionarios} keyboardType="numeric"/>
      <Input placeholder="Data"  onChangeText={setDate}/>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <PrimaryButton text="Salvar" onPress={save}/>
    </View>
  )
}

export default AddEmpresa;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  errorContainer: {
    backgroundColor: '#ff5252',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  errorText: {
    color: 'white',
    fontSize: 16,
  },
})