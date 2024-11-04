import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Cadastro from "./screens/Cadastro";
import Login from "./screens/Login";
import Tabs from ".";
import AddEmpresa from "./screens/AddEmpresa";

export default function Rotas(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Login" component={Login} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Cadastro" component={Cadastro} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Tabs" component={Tabs} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="AddEmpresa" component={AddEmpresa} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}