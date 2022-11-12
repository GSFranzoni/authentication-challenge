import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Container,
  Flex,
} from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Container
      as={Flex}
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Alert status="success">
        <AlertIcon />
        <AlertDescription>
          Its working! You can now start building your app.
        </AlertDescription>
      </Alert>
    </Container>
  );
};

export default Home;
