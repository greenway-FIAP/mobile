import React from 'react';
import { Input, FormControl } from 'native-base';

interface InputProps {
  label?: string;
  placeholder: string;
  type: 'password' | 'text';
  leftIcon?: React.ReactNode;
  onChangeText?: (text: string) => void;
  value?: string;
}

export function EntradaTexto({
  label,
  placeholder,
  type = 'text',
  onChangeText,
  value,
}: InputProps): JSX.Element {
  return (
    <FormControl>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        bgColor="verde.300"
        mt={2}
        secureTextEntry={type === 'password'}
        onChangeText={onChangeText}
        value={value}
      />
    </FormControl>
  );
}