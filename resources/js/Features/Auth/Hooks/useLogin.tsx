import { useForm } from '@inertiajs/inertia-react';

const useLogin = () => {
  const {
    data: { email, password },
    post,
    setData,
    processing,
  } = useForm();

  const setEmail = (value: string) => setData('email', value);

  const setPassword = (value: string) => setData('password', value);

  const onSuccess = () => {
    console.log('success');
  };

  const onError = () => {
    console.log('error');
  };

  const onFinish = () => {
    console.log('finish');
  };

  const login = () => {
    post('auth/login', {
      data: {
        email,
        password,
      },
      onSuccess,
      onError,
      onFinish,
    });
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    login,
    processing,
  };
};

export default useLogin;
