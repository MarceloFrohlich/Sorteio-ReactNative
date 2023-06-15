import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './components/Titulo';
import TelaInicial from './components/TelaInicial';


export default function App() {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
}
