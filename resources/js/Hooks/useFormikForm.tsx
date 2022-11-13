import { useEffect, useMemo } from 'react';
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

  const hasTouched = useMemo(
    () => Object.keys(formik.touched).length > 0,
    [formik.touched]
  );

  return {
    post: inertia.post,
    patch: inertia.patch,
    get: inertia.get,
    errors: formik.errors,
    handleSubmit: formik.handleSubmit,
    processing: inertia.processing,
    values: formik.values,
    setFieldValue: formik.setFieldValue,
    setFieldError: formik.setFieldError,
    touched: formik.touched,
    hasTouched,
  };
};

export default useFormikForm;
