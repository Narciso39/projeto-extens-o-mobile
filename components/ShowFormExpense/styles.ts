import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  spacer: {
    height: 60, // Espaço adicional para afastar do menu hambúrguer
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
    marginTop: 10, // Margem superior adicional
  },
  dropdownWrapper: {
    flex: 1,
  },
  filterLabel: {
    marginBottom: 4,
    color: '#6200ee',
    fontWeight: '500',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  listContent: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  user: {
    fontSize: 12,
    color: '#777',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  error: {
    color: '#d32f2f',
    textAlign: 'center',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#ffebee',
    borderRadius: 8,
  },
  empty: {
    textAlign: 'center',
    marginTop: 16,
    color: '#666',
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  pageButton: {
    color: '#6200ee',
    fontWeight: 'bold',
    padding: 8,
  },
  disabledButton: {
    color: '#999',
    opacity: 0.5,
  },
  pageInfo: {
    fontSize: 14,
    color: '#555',
  },
});