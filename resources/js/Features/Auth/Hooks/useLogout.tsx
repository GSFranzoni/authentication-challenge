import { useToast } from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';

const useLogout = () => {
  const toast = useToast();

  const { processing, post } = useForm();

  const onSuccess = () => {
    toast({
      title: 'Logout',
      description: 'You have been logged out.',
      status: 'success',
      duration: 5000,
    });
  };

  const onError = () => {
    console.log('error');
  };

  const onFinish = () => {
    console.log('finish');
  };

  const logout = () => {
    post('/auth/logout', {
      onSuccess,
      onError,
      onFinish,
    });
  };

  return {
    logout,
    processing,
  };
};

export default useLogout;
