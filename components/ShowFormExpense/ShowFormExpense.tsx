import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import api from '@/services/api';
import { styles } from './styles';

interface Expense {
  id: number;
  name: string;
  valueExpense: number;
  description: string;
  created_at: string;
  user: {
    name: string;
  };
}

interface ApiResponse {
  data: Expense[];
  meta: {
    total: number;
    page: number;
    last_page: number;
    limit: number;
  };
}

const orderOptions = [
  { label: 'Mais Recentes (DESC)', value: 'DESC' },
  { label: 'Mais Antigos (ASC)', value: 'ASC' },
];

const limitOptions = [
  { label: '10 itens por página', value: 10 },
  { label: '20 itens por página', value: 20 },
  { label: '50 itens por página', value: 50 },
];

const ExpensesScreen = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    order: 'DESC',
  });

  const loadExpenses = async (newPage?: number) => {
    try {
      setLoading(true);
      setError(null);
      
      const currentPage = newPage || filters.page;
      
      const response = await api.get<ApiResponse>('/expenses', {
        params: {
          page: currentPage,
          limit: filters.limit,
          order: filters.order,
        },
      });
      
      setExpenses(currentPage === 1 ? response.data.data : [...expenses, ...response.data.data]);
      setMeta(response.data.meta);
      
      if (newPage) {
        setFilters(prev => ({ ...prev, page: newPage }));
      }
    } catch (err) {
      setError('Erro ao carregar despesas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExpenses(1);
  }, [filters.limit, filters.order]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= (meta?.last_page || 1)) {
      loadExpenses(newPage);
    }
  };

  const renderItem = ({ item }: { item: Expense }) => (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.value}>R$ {item.valueExpense.toFixed(2)}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.itemFooter}>
        <Text style={styles.user}>{item.user.name}</Text>
        <Text style={styles.date}>{new Date(item.created_at).toLocaleDateString()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Espaço para afastar do menu hambúrguer */}
      <View style={styles.spacer} />
      
      {/* Filtros em formato de selects */}
      <View style={styles.filterContainer}>
        <View style={styles.dropdownWrapper}>
          <Text style={styles.filterLabel}>Ordenação:</Text>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.dropdownText}
            data={orderOptions}
            labelField="label"
            valueField="value"
            value={filters.order}
            onChange={item => setFilters(prev => ({ ...prev, order: item.value }))}
          />
        </View>
        
        <View style={styles.dropdownWrapper}>
          <Text style={styles.filterLabel}>Itens por página:</Text>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.dropdownText}
            data={limitOptions}
            labelField="label"
            valueField="value"
            value={filters.limit}
            onChange={item => setFilters(prev => ({ ...prev, limit: item.value }))}
          />
        </View>
      </View>
      
      {/* Lista de despesas */}
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={expenses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#6200ee" /> : null
          }
          ListEmptyComponent={
            !loading ? <Text style={styles.empty}>Nenhuma despesa encontrada</Text> : null
          }
        />
      )}
      
      {/* Paginação */}
      {meta && (
        <View style={styles.pagination}>
          <Text 
            style={[styles.pageButton, filters.page === 1 && styles.disabledButton]}
            onPress={() => handlePageChange(filters.page - 1)}
          >
            Anterior
          </Text>
          
          <Text style={styles.pageInfo}>
            Página {meta.page} de {meta.last_page}
          </Text>
          
          <Text 
            style={[styles.pageButton, filters.page === meta.last_page && styles.disabledButton]}
            onPress={() => handlePageChange(filters.page + 1)}
          >
            Próxima
          </Text>
        </View>
      )}
    </View>
  );
};

export default ExpensesScreen;