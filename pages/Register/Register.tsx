import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}></Text>
      
      <TextInput
        style={styles.formInput}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput style={styles.formInput} 
           placeholder='informe a senha'
           autoCapitalize='none'
           secureTextEntry
      
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Cadastrar-se</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
