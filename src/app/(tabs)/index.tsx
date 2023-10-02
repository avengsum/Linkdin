import { StyleSheet, Text ,View} from 'react-native'
import PostListItem from '../../components/PostListItem';
import post from '../../../assets/data/posts.json'
import { FlatList } from 'react-native-gesture-handler';

export default function TapOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={post}
      renderItem={({item}) => <PostListItem post={item} />}
      contentContainerStyle={{gap:10}}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    fontSize:26,
    fontWeight:'bold',
    marginBottom:10,
  }
})