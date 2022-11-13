import { usePage } from '@inertiajs/inertia-react';
import { useToast } from '@chakra-ui/react';
import * as Yup from 'yup';
import useFormikForm from '@/Hooks/useFormikForm';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().required('Bio is required'),
  phone: Yup.string().required('Phone is required'),
  avatar: Yup.string()
    .required('Avatar is required')
    .url('Avatar must be a valid url'),
  password: Yup.string()
    .required()
    .min(8, 'Password must be at least 8 characters'),
});

const useProfileEdit = () => {
  const {
    auth: { user },
  } = usePage().props as never;

  const toast = useToast();

  const onSuccess = () => {
    toast({
      title: 'Profile updated.',
      description: "We've successfully updated your profile.",
      status: 'success',
      duration: 5000,
    });
  };

  const onError = () => {
    toast({
      title: 'Error updating profile.',
      description: "We've encountered an error updating your profile.",
      status: 'error',
      duration: 5000,
    });
  };

  const onFinish = () => {
    console.log('finish');
  };

  const {
    patch,
    handleSubmit,
    errors,
    values,
    setFieldValue,
    processing,
    hasTouched,
  } = useFormikForm({
    initialValues: user,
    validationSchema,
    onSubmit: (data) => {
      patch('/account/profile', {
        data,
        onSuccess,
        onError,
        onFinish,
      });
    },
  });

  return {
    handleSubmit,
    errors,
    values,
    setFieldValue,
    processing,
    hasTouched,
  };
};

export default useProfileEdit;
