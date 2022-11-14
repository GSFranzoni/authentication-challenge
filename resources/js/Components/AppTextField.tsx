import React, { PropsWithChildren } from 'react';
import {
  As,
  Box,
  Fade,
  Flex,
  Input,
  InputGroup,
  InputProps,
  Text,
} from '@chakra-ui/react';

type TextFieldProps = InputProps &
  PropsWithChildren & {
    label?: string;
    hint: string | undefined | false;
    as?: As;
  };

const AppTextfield: React.FC<TextFieldProps> = ({
  children,
  label,
  hint,
  as = Input,
  ...props
}) => (
  <InputGroup as={Flex} flexDir="column" gap={1}>
    {label && (
      <Text fontWeight="light" fontSize="xs">
        {label}
      </Text>
    )}
    <Input
      as={as}
      borderColor={hint ? 'red.500' : undefined}
      _placeholder={{ fontSize: 'sm', fontWeight: 'light' }}
      {...props}
    />
    {hint && (
      <Fade in={!!hint}>
        <Text fontSize="xs" color="red.500" fontWeight={500}>
          {hint}
        </Text>
      </Fade>
    )}
    {children}
  </InputGroup>
);

export default AppTextfield;
