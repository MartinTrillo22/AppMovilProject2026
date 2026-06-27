import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';

interface GoldButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

const GoldButton: React.FC<GoldButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  className = '',
  textClassName = '',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      className={`bg-[#e9b978] py-[14px] px-8 rounded-full items-center justify-center ${disabled || loading ? 'opacity-60' : 'active:opacity-80'
        } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color="#2b1d3f" size="small" />
      ) : (
        <Text
          className={`text-[#2b1d3f] text-2xl font-semibold text-center ${textClassName} font-radley`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default GoldButton;
