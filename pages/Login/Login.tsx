import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { userLogin } from "@/services/auth/auth";
import { User } from "@/src/@types/login.types";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/auth";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/src/@types/routes.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const Login: React.FC = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
const navigation = useNavigation<NavigationProps>()
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response: any = await userLogin(email, password);
      const token = response.token;

      if (token) {
        dispatch(login(token));
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Login falhou:", error);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}> Texto formulario</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.formInput}
        placeholder="informe a senha"
        autoCapitalize="none"
        onChangeText={(password) => setPassword(password)}
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
