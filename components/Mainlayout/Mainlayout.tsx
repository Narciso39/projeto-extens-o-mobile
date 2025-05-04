import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProps } from '@/src/@types/NavigationProps.types';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      {/* Botão de hambúrguer */}
      <TouchableOpacity 
        style={styles.menuButton}
        onPress={() => setSidebarVisible(!sidebarVisible)}
      >
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>

      {/* Barra lateral (condicional) */}
      {sidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('Expense');
              setSidebarVisible(false);
            }}
          >
            <Icon name="add" size={20} color="#fff" />
            <Text style={styles.menuText}>Criar Despesa</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('ShowForm');
              setSidebarVisible(false);
            }}
          >
            <Icon name="list" size={20} color="#fff" />
            <Text style={styles.menuText}>Listar Despesas</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo principal */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 100,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#2c3e50',
    paddingTop: 80,
    zIndex: 90,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#34495e',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;