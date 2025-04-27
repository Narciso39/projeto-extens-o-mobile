import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}></Text>
      <TextInput
        style={styles.formInput}
        placeholder="Name"
        keyboardType="default"
        autoCapitalize="none"
      />
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
        <Text style={styles.textButton} onPress={}>Cadastrar</Text>
      </Pressable>
    </View>
  );
};

export default Register;
