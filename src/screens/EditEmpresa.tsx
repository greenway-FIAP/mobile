import { StyleSheet, Text, View } from 'react-native'
import Input from '../componentes/Input';
import PrimaryButton from '../componentes/PrimaryButton';
import { useContext, useEffect, useState } from 'react';
import { getEmpresa, updateEmpresa } from '../api/empresa';
import { EmpresasContext } from '../context/Empresas-context';

const EditEmpresa = ({ navigation, route }) => {
  const empresasContext = useContext(EmpresasContext);
  const { id } = route.params;
  const [descricao, setDescricao] = useState('')
  const [N_funcionarios, setN_funcionarios] = useState(0);
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState('');

  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    const loadEmpresa = async () => {
      try {
        const response = await getEmpresa(id);

        if (response.status === 200 && response.data) {
          const item = response.data;
          setDescricao(item.descricao);
          setN_funcionarios(item.N_funcionarios);
          setDate(item.date);
          setUserId(item.userId);
        } else {
          setNotFound(true);
        }
      } catch (error: unknown) {
        // tratamento de erro
      }
    }

    loadEmpresa();
  }, [id]);

  const save = async () => {
    await updateEmpresa({
      id,
      descricao,
      N_funcionarios,
      date,
      userId,
    });
    empresasContext.refresh();
    navigation.goBack();
  };

  if (notFound) {
    return (<Text>Este item nao existe</Text>)
  }

  return (
    <View style={styles.container}>
      <Text>Editar Empresa</Text>
      <Input placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
      <Input placeholder="N° funcionarios" value={N_funcionarios} onChangeText={setN_funcionarios} />
      <Input placeholder="Data" value={date} onChangeText={setDate} />
      <PrimaryButton text="Salvar" onPress={save} />
    </View>
  )
}
export default EditEmpresa;
const styles = StyleSheet.create({
  container: {
    padding: 16,
  }
});