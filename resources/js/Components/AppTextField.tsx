import React, { PropsWithChildren } from 'react';
import {
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
    hint?: string;
  };

const AppTextField: React.FC<TextFieldProps> = ({
  children,
  label,
  hint,
  ...props
}) => (
  <InputGroup as={Flex} flexDir="column" gap={2}>
    {label && (
      <Text fontWeight={500} fontSize="sm">
        {label}
      </Text>
    )}
    <Input borderColor={hint ? 'red.500' : 'gray.300'} {...props} />
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

export default AppTextField;
