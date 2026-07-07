import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../ThemeContext';

interface InputFieldProps extends TextInputProps {
  inputClassName?: string;
  containerClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  inputClassName = '',
  containerClassName = '',
  secureTextEntry,
  keyboardType = 'default',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = secureTextEntry;
  const { colors, isDarkMode } = useTheme();

  return (
    <View
      className={`flex-row items-center ${colors.cardBg} rounded-lg h-[54px] px-4 w-full border ${colors.border} ${containerClassName}`}
    >
      <TextInput
        className={`flex-1 ${colors.text} text-base h-full ${inputClassName}`}
        placeholderTextColor={isDarkMode ? '#8e8e93' : '#684920'}
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
            color={isDarkMode ? '#8e8e93' : '#684920'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
