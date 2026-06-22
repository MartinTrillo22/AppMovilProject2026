import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface GoldButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  className = '',
  textClassName = '',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        {
          backgroundColor: '#e9b978',
          paddingVertical: 14,
          paddingHorizontal: 32,
          borderRadius: 9999,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled || loading ? 0.6 : 1,
        },
        style,
      ]}
      className={`w-full py-4 px-8 rounded-full items-center justify-center ${
        disabled || loading ? 'opacity-60' : 'active:opacity-80'
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color="#2b1d3f" size="small" />
      ) : (
        <Text
          style={[
            {
              color: '#2b1d3f',
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            },
            textStyle,
          ]}
          className={`text-[#2b1d3f] text-lg font-semibold text-center ${textClassName}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default GoldButton;
