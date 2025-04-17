import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/pages/welcome/Welcome";
import Login from "@/pages/Login/Login";
import Home from "@/pages/home/Home";
import PrivateRoute from "@/components/PrivateRoutes/PrivateRoutes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
        <Stack.Screen
          name="Inicio"
          component={Home}
          options={{ headerShown: false }}
        />
      {/* </GestureHandlerRootView> */}
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {() => (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default Routes;
