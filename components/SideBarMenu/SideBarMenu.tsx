import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/src/@types/routes.types';


type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Expense", "ShowForm">;

const SideBarMenu = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('Expense')}
      >
        <Text style={styles.menuText}>Criar Despesa</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('ShowForm')}
      >
        <Text style={styles.menuText}>Listar Despesas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#2c3e50',
    paddingTop: 40,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#34495e',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SideBarMenu;