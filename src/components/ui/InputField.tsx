import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputFieldProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerClassName?: string;
  inputClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  containerStyle,
  inputStyle,
  containerClassName = '',
  inputClassName = '',
  secureTextEntry,
  keyboardType = 'default',
  placeholderTextColor = '#8e8e93',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = secureTextEntry;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#1c1c1e',
          borderRadius: 8,
          height: 54,
          paddingHorizontal: 16,
          width: '100%',
        },
        containerStyle,
      ]}
      className={`flex-row items-center bg-[#1c1c1e] rounded-lg h-[54px] px-4 w-full ${containerClassName}`}
    >
      <TextInput
        style={[
          {
            flex: 1,
            color: '#ffffff',
            fontSize: 16,
            height: '100%',
          },
          inputStyle,
        ]}
        className={`flex-1 text-white text-base h-full ${inputClassName}`}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isPassword && !showPassword}
        keyboardType={keyboardType}
        autoCapitalize="none"
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShowPassword(!showPassword)}
          className="ml-2"
        >
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#8e8e93"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
