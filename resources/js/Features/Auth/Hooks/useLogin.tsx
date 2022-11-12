import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import useFormikForm from '@/Hooks/useFormikForm';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

const useLogin = () => {
  const toast = useToast();

  const onSuccess = () => {
    toast({
      title: 'Logged in.',
      description: "We've successfully logged you in.",
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

  const { handleSubmit, errors, values, setFieldValue, processing, post } =
    useFormikForm({
      initialValues,
      validationSchema,
      onSubmit: (data) => {
        post('/auth/login', {
          data,
          onSuccess,
          onError,
          onFinish,
        });
      },
    });

  return {
    processing,
    errors,
    values,
    setFieldValue,
    handleSubmit,
  };
};

export default useLogin;
