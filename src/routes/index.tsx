import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/pages/welcome/Welcome";
import Login from "@/pages/Login/Login";
import PrivateRoute from "@/components/PrivateRoutes/PrivateRoutes";
import ExpenseForm from "@/components/Forms/Expenses/ExpenseForm";
import Register from "@/pages/Register/Register";
import ShowFormExpense from "@/components/ShowFormExpense/ShowFormExpense";
import MainLayout from "@/components/Mainlayout/Mainlayout";

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
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen name="Expense" options={{ headerShown: false }}>
        {() => (
          <PrivateRoute>
            <MainLayout>
              <ExpenseForm />
            </MainLayout>
          </PrivateRoute>
        )}
      </Stack.Screen>

      <Stack.Screen name="ShowForm" options={{ headerShown: false }}>
        {() => (
          <PrivateRoute>
            <MainLayout>
              <ShowFormExpense />
            </MainLayout>
          </PrivateRoute>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Routes;