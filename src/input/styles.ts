import variables from '../style/variables';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create<any>({
  container: {
    backgroundColor: '#fff',
  },
  inputStyle: {
    padding: 0,
    fontSize: variables.inputTextFontSize,
    height: variables.inputAreaHeight,
    textAlignVertical: 'center',
    color: variables.deepBlack,
  },
});

export default styles;
