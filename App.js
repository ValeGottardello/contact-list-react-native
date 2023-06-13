import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Constant from 'expo-constants';
import Main from './src/components/Main';

export default function App() {


  return (
    <View style={{marginTop: Constant.statusBarHeight, flexGrow: 1, backgroundColor: '#', alignItems:'center', justifyContent:'center'}}>
      <Main/>
    </View>
  );
}
// style you cant use css, native way is use style inline
// or libraries
// const styles = StyleSheet.create({* style={styles.container} */}
//   container: {
//     flex: 1,
//     backgroundColor: '#',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
