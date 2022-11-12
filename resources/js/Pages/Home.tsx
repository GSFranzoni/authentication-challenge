import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import LoginForm from '@/Features/Auth/Components/LoginForm';

const Home: React.FC = () => {
  return (
    <Container
      as={Flex}
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <LoginForm />
    </Container>
  );
};

export default Home;
