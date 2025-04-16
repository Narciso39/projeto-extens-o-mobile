import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { View, Text } from 'react-native';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector((state: RootState) => state.rootAuth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <View>
        <Text>Você precisa estar logado para acessar essa página.</Text>
      </View>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;