import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ListItem } from './components/ListItem'
import articles from './dummies/articles'

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem imageUrl={article.urlToImage} title={article.title} author={article.author} key={index.toString()}/>
    )
  })
  return (
    <View style={styles.container}>
      {items}
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
