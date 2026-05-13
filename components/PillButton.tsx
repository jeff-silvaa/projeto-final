import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

interface PillButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
  width?: number | string;
  icon?: React.ReactNode;
}

export default function PillButton({
  label,
  onPress,
  variant = 'solid',
  width = '100%',
  icon,
}: PillButtonProps) {
  const isSolid = variant === 'solid';
  const containerStyle: ViewStyle = {
    ...styles.button,
    width,
    backgroundColor: isSolid ? '#fff' : 'transparent',
    borderWidth: isSolid ? 0 : 1.5,
    borderColor: '#fff',
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} activeOpacity={0.8}>
      {icon}
      <Text style={[styles.label, { color: isSolid ? '#111' : '#fff' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
});
