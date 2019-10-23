import React, {Component} from 'react';
import {
  Platform,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import variables from '../style/variables';
import Icon from '../icon';
import {getRpx} from '@jdjoy/sigma-rn-util/lib/Device';

interface InputProps extends TextInputProps {
  textAlign?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

interface InputState {
  isEditing: boolean;
}

export default class Input extends Component<InputProps, InputState> {
  static defaultProps = {
    onChange: null,
    textAlign: 'left',
    placeholder: '请输入',
    placeholderTextColor: variables.neutralGrey,
    autoFocus: false,
    autoCorrect: true,
    keyboardType: 'default',
    maxLength: null,
    editable: true,
    clearButtonMode: 'while-editing',
    value: '',
  };

  delayIsEditing = null;

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.delayIsEditing = this.delayTaskMemoize(3000);
  }

  componentWillUnmount() {
    this.delayIsEditing.cancel();
  }

  handleChange = value => {
    this.props.onChange && this.props.onChange(value);
  };

  handleBlur = e => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  handleFocus = e => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  delayTaskMemoize = duration => {
    let timeoutId;

    return {
      cancel() {
        clearTimeout(timeoutId);
      },

      delay(task) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          task();
        }, duration || 0);
      },
    };
  };

  modProps(props) {
    const tmpProps = {
      ...props,
    };

    if (Platform.OS === 'web') {
      // web 平台不支持该属性
      delete tmpProps.textAlign;
    }

    delete tmpProps.style;
    delete tmpProps.inputStyle;

    return tmpProps;
  }

  renderiOS = () => {
    const tmpProps = this.modProps(this.props);

    return (
      <View
        style={[
          styles.container,
          this.props.style,
          {flexDirection: 'column', justifyContent: 'center'},
        ]}>
        <TextInput
          {...tmpProps}
          style={[styles.inputStyle, this.props.inputStyle]}
          onChange={() => {
            return;
          }}
          onChangeText={this.handleChange}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
        />
      </View>
    );
  };

  renderAndroidAndWeb = () => {
    const androidClearButtonMode =
      this.props.clearButtonMode && this.props.clearButtonMode !== 'never';
    const showDelIcon =
      androidClearButtonMode && this.props.value && this.state.isEditing;
    const tmpProps = this.modProps(this.props);

    return (
      <View
        style={[
          styles.container,
          this.props.style,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <TextInput
          {...tmpProps}
          clearButtonMode="never"
          style={[styles.inputStyle, {flex: 1}, this.props.inputStyle]}
          onChange={() => {
            return;
          }}
          onChangeText={this.handleChange}
          onFocus={e => {
            this.handleFocus(e);
            this.delayIsEditing.cancel();
            this.setState({
              isEditing: true,
            });
          }}
          onBlur={e => {
            this.handleBlur(e);
            this.delayIsEditing.delay(() => {
              this.setState({
                isEditing: false,
              });
            });
          }}
          underlineColorAndroid="transparent"
        />
        {showDelIcon ? (
          <TouchableOpacity
            onPress={() => {
              // console.log('press delete icon')
              this.handleChange('');
            }}>
            <Icon type={'close_o'} size={getRpx(30)} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  render() {
    if (Platform.OS === 'ios') {
      return this.renderiOS();
    } else {
      return this.renderAndroidAndWeb();
    }
  }
}
