import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ListItem } from './components/ListItem'

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem imageUrl={"https://picsum.photos/200"} title={"hoge hoge hoge"} author={"React News"}/>
      <ListItem />
      <ListItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
