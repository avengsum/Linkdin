import { StyleSheet, Text ,View} from 'react-native'

export default function TapOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index</Text>
      <Text>Comming soon!</Text>
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