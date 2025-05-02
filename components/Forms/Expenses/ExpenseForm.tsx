import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import { postExpense } from "@/services/Expenses/postExpense.api";
import { useNavigation } from "expo-router";
import { NavigationProps } from "@/src/@types/NavigationProps.types";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

        // In your ExpenseForm component:
const ExpenseForm = () => {
  const [name, setName] = useState<any>();
  const [value, setValue] = useState<any>();
  const [description, setDescription] = useState<any>();

  const navigation = useNavigation<NavigationProps>();
   const handleRegister = async () => {
      try {
        await postExpense(name, value, description);
        // console.log(response);
          navigation.navigate("Home");
       
      } catch (error) {
        console.error("Login falhou:", error);
      }
    };

  return (
    <View>
      <Text>ExpenseForm</Text>
      <View>
        <TextInput
          style={styles.formInput}
          placeholder="Nome da despesa"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(name) => setName(name)}
          value={name}
        />
        <TextInput
          style={styles.formInput}
          placeholder="valor da despesa"
          keyboardType="numeric"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(value) => setValue(value)}
          value={value}
        />
        <TextInput
          style={styles.formInput}
          placeholder="descrição"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(description) => setDescription(description)}
          value={description}
        />

        <GestureHandlerRootView>
          <Pressable style={styles.formButton} onPress={handleRegister}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </Pressable>
        </GestureHandlerRootView>

        {/* <Pressable style={styles.formButton} onPress={handleRegister}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

export default ExpenseForm;
