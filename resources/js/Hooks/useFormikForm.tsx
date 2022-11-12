import { useEffect } from 'react';
import { useFormik } from 'formik';
import { FormikConfig, FormikValues } from 'formik/dist/types';
import { useForm } from '@inertiajs/inertia-react';

const useFormikForm = ({ ...props }: FormikConfig<FormikValues>) => {
  const formik = useFormik(props);

  const inertia = useForm();

  useEffect(() => {
    inertia.setData(formik.values);
  }, [formik.values]);

  useEffect(() => {
    formik.setErrors(inertia.errors);
  }, [inertia.errors]);

  return {
    post: inertia.post,
    errors: formik.errors,
    handleSubmit: formik.handleSubmit,
    processing: inertia.processing,
    values: formik.values,
    setFieldValue: formik.setFieldValue,
  };
};

export default useFormikForm;
