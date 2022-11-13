import React from 'react';
import { GlobalEventCallback, Inertia, Page } from '@inertiajs/inertia';

type UploadAvatarProps = {
  onSuccess: (data: Page) => void;
  onError: GlobalEventCallback<'error'>;
};

const useUploadAvatar = ({
  onSuccess,
  onError = () => {},
}: UploadAvatarProps) => {
  const [uploading, setUploading] = React.useState(false);

  const upload = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    setUploading(true);
    Inertia.post('/account/profile/avatar', formData, {
      replace: false,
      preserveState: true,
      forceFormData: true,
      preserveScroll: true,
      onSuccess,
      onFinish: () => {
        setUploading(false);
      },
      onError,
    });
  };

  return {
    upload,
    uploading,
  };
};

export default useUploadAvatar;
