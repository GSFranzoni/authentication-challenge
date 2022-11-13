import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import LoginForm from '@/Features/Auth/Components/LoginForm';

const Login: React.FC = () => {
  return (
    <Box
      as={Flex}
      alignItems={['start', 'center']}
      justifyContent="center"
      height="100%"
    >
      <LoginForm w={380} border="none" shadow={['none', 'md']} />
    </Box>
  );
};

export default Login;
