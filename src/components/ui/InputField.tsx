import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputFieldProps extends TextInputProps {
  containerClassName?: string;
  inputClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
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
      className={`flex-row items-center bg-[#1c1c1e] rounded-lg h-[54px] px-4 w-full ${containerClassName}`}
    >
      <TextInput
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
