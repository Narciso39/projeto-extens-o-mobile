import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { postExpense } from "@/services/Expenses/postExpense.api";
import { useNavigation } from "expo-router";
import { NavigationProps } from "@/src/@types/NavigationProps.types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ExpenseForm = () => {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigation = useNavigation<NavigationProps>();
  const userId = useSelector((state: RootState) => state.rootAuth.userId);

  const handleRegister = async () => {
    try {
      if (!userId) {
        throw new Error("Usuário não autenticado");
      }

      const numericValue = parseFloat(value);
      if (isNaN(numericValue)) {
        throw new Error("Valor inválido");
      }

      await postExpense(name, numericValue, description, userId);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao cadastrar despesa:", error);
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
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Valor da despesa"
          keyboardType="numeric"
          onChangeText={setValue}
          value={value}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Descrição"
          autoCapitalize="none"
          onChangeText={setDescription}
          value={description}
        />

        <Pressable style={styles.formButton} onPress={handleRegister}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ExpenseForm;
