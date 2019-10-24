import React from 'react';
import { View } from 'react-native';
import RecipeList from './Components/RecipeList';
import styles from './styles/container.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeList/>
    </View>
  );
}

