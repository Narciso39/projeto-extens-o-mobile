import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { userRegister } from "@/services/user/register/register";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/src/@types/routes.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const Register: React.FC = () => {
  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const navigation = useNavigation<NavigationProps>();

  const handleRegister = async () => {
    try {
      await userRegister(name, email, password);
      // console.log(response);
        navigation.navigate("Login");
     
    } catch (error) {
      console.error("Login falhou:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}></Text>
      <TextInput
        style={styles.formInput}
        placeholder="Name"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={(name) => setName(name)}
        value={name}
      />
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
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Pressable style={styles.formButton} onPress={handleRegister}>
        <Text style={styles.textButton} >
          Cadastrar
        </Text>
      </Pressable>
    </View>
  );
};

export default Register;
