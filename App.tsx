import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';
import { AuthContext, AuthContextProvider } from './src/context/auth-context';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase.config';
import { NavigationContainer } from '@react-navigation/native';
import EmpresasProvider from './src/context/Empresas-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './src/screens/Principal';
import AddEmpresa from './src/screens/AddEmpresa';
import EditEmpresa from './src/screens/EditEmpresa';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login'
import {Botao} from './src/componentes/Botao'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Stack = createNativeStackNavigator();

const ProtectedStack = createNativeStackNavigator();


function ProtectedNavigator() {
  const userSignOut = () => {
    signOut(FIREBASE_AUTH)
  }

  return (
    <EmpresasProvider>
      <ProtectedStack.Navigator initialRouteName='Principal'>
        <ProtectedStack.Screen
          name='Principal'
          component={Principal} 
          options={{
            headerShown: true,
            headerRight: () => (
              <Ionicons
                name='log-out-outline'
                size={24}
                onPress={() => userSignOut()}
                ></Ionicons>
               
            //  <Botao  onPress={() => userSignOut()}></Botao>
            )
          }} />
          <ProtectedStack.Screen
            name='AddEmpresa'
            component={AddEmpresa}
          />
          
          <ProtectedStack.Screen
            name='EditEmpresa'
            component={EditEmpresa} />

            
      </ProtectedStack.Navigator>
    </EmpresasProvider>
  );
}

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
      </Stack.Navigator>  
  );
}


function Navigator() {
  const authContext = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('onAuthStateChanged', !!user);
  
      if (user) {
        authContext.setUserId(user.uid);
        setIsLogged(true);
      } else {
        authContext.setUserId("");
        setIsLogged(false);
      }
    });

    return unsubscribe;
  }, [authContext]);

  return (
    <NavigationContainer>
        { isLogged ? <ProtectedNavigator/> : <StackNavigator/>}
    </NavigationContainer>
  );

}



export default function App() {
  return (
    <AuthContextProvider>
      <NativeBaseProvider theme={TEMAS}>
        <StatusBar backgroundColor={TEMAS.colors.green[800]} />
        {/* <Rotas /> */}
        <Navigator/>
      </NativeBaseProvider>
    </AuthContextProvider>
  );
}