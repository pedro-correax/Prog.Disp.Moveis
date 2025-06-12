import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./pages/Login";
import Detalhes from "./pages/Dashboard";
import { StyleSheet, View } from "react-native";
import Dashboard from "./pages/Dashboard";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaInicial} options={{
          title: "Página Inicial"
        }}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
