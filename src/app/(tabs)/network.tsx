import {StyleSheet ,View,Text} from 'react-native'

export default function Network(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Network</Text>
            <Text>coming</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });