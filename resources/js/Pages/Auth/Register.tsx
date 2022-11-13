import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import RegisterForm from '@/Features/Auth/Components/RegisterForm';

const Login: React.FC = () => {
  return (
    <Box
      as={Flex}
      alignItems={['start', 'center']}
      justifyContent="center"
      height="100%"
    >
      <RegisterForm w={380} border="none" shadow={['none', 'md']} />
    </Box>
  );
};

export default Login;
