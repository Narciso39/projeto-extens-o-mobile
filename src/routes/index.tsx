import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/pages/welcome/Welcome";
import Login from "@/pages/Login/Login";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};
export default Routes;
