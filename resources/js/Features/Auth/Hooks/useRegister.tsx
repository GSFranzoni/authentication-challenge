import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import useFormikForm from '@/Hooks/useFormikForm';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
  confirmPassword: Yup.string()
    .required()
    .equals([Yup.ref('password')], 'Passwords must match'),
});

const useRegister = () => {
  const toast = useToast();

  const onSuccess = () => {
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
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
        post('/auth/register', {
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

export default useRegister;
