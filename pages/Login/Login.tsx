import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { userLogin } from "@/services/auth/auth";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/auth";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/src/@types/routes.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Expense">;

// Interface ajustada para refletir a resposta real da API
interface ApiResponse {
  token?: string;
  access_token?: string;
  user?: {
    id?: string | number;
    email?: string;
  };
  // Outros campos possíveis
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response: ApiResponse = await userLogin(email, password);
      
      if (!response.token || !response.user?.id) {
        throw new Error("Dados de autenticação incompletos");
      }
  
      // Isso está correto, desde que a ação login esteja configurada para receber um objeto
      dispatch(login({
        token: response.token,
        userId: response.user.id
      }));
      
      navigation.navigate("Expense");
    } catch (error) {
      console.error("Login falhou:", error);
      // Adicione feedback visual aqui
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Informe a senha"
        autoCapitalize="none"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Pressable style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton} onPress={handleRegister}>Cadastrar-se</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;