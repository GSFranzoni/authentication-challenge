import React from 'react';
import {
  Button,
  Flex,
  HStack,
  Input,
  Spinner,
  Text,
  Textarea,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { AiFillCamera } from 'react-icons/all';
import AppCard, { AppCardProps } from '@/Components/AppCard';
import AppTextField from '@/Components/AppTextField';
import useProfileEdit from '@/Features/Account/Hooks/useProfileEdit';
import useUploadAvatar from '@/Features/Account/Hooks/useUploadAvatar';

export const UserProfileEdit: React.FC<AppCardProps> = ({ ...props }) => {
  const {
    processing,
    values: { name, avatar, bio, email, password, phone },
    setFieldValue,
    hasTouched,
    errors,
    handleSubmit,
    setFieldError,
  } = useProfileEdit();

  const avatarInputRef = React.useRef<HTMLInputElement>(null);

  const { upload, uploading } = useUploadAvatar({
    onSuccess: (response) => {
      setFieldValue('avatar', response.props?.avatar);
    },
    onError: (error) => {
      setFieldError('avatar', error?.file);
    },
  });

  const handleChooseAvatar = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = event.target.files?.item(0);
    if (!selected) {
      return;
    }
    upload(selected);
  };

  return (
    <AppCard
      {...props}
      p={0}
      shadow={['none', 'lg']}
      borderWidth={['none', '1px']}
      borderRadius={['none', 'lg']}
    >
      <VStack
        py={[2, 5]}
        px={[2, 8]}
        alignItems="start"
        gap={5}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <HStack justifyContent="space-between">
          <VStack alignItems="start">
            <Text fontSize="2xl" fontWeight="normal">
              Change Info
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="300">
              Changes will be reflected to every services
            </Text>
          </VStack>
        </HStack>
        <VStack alignItems="start" gap={3} w="full">
          <HStack gap={1}>
            <Input
              ref={avatarInputRef}
              type="file"
              name="avatar"
              accept="image/*"
              display="none"
              onChange={handleChooseAvatar}
            />
            <Button
              variant="outline"
              fontWeight="normal"
              color="gray.500"
              fontSize="sm"
              rounded="lg"
              borderRadius="lg"
              py={7}
              px={0}
              pr={5}
              gap={3}
              onClick={() => avatarInputRef.current?.click()}
              leftIcon={
                <Flex
                  backgroundImage={
                    avatar ||
                    'https://gravatar.com/avatar/7121ccc404662c9995f500fcba5879bd?s=400&d=robohash&r=x'
                  }
                  backgroundSize="cover"
                  w="55px"
                  h="55px"
                  borderRadius="lg"
                  justifyContent="center"
                  alignItems="center"
                >
                  <AiFillCamera size="25" color="white" />
                </Flex>
              }
            >
              CHANGE PHOTO
            </Button>
            {uploading && <Spinner />}
          </HStack>
          {errors.avatar && (
            <Text fontSize="xs" color="red.500" fontWeight={500}>
              {errors?.avatar as string}
            </Text>
          )}
          <VStack alignItems="start" w="full" gap={3}>
            <AppTextField
              label="Name"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setFieldValue('name', e.target.value)}
              hint={hasTouched && (errors.name as string)}
            />
            <AppTextField
              as={Textarea}
              label="Bio"
              type="textarea"
              placeholder="Enter your bio..."
              value={bio}
              onChange={(e) => setFieldValue('bio', e.target.value)}
              hint={hasTouched && (errors.bio as string)}
            />
            <AppTextField
              label="Phone"
              placeholder="Enter your phone..."
              value={phone}
              onChange={(e) => setFieldValue('phone', e.target.value)}
              hint={hasTouched && (errors.phone as string)}
            />
            <Tooltip hasArrow label="You can't change your email address">
              <Flex w="full">
                <AppTextField
                  label="Email"
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  color="gray.600"
                  isReadOnly
                  isDisabled
                  hint={false}
                />
              </Flex>
            </Tooltip>
            <AppTextField
              label="Password"
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setFieldValue('password', e.target.value)}
              hint={hasTouched && (errors.password as string)}
            />
            <Button
              type="submit"
              variant="solid"
              bg="blue.600"
              colorScheme="blue"
              color="white"
              px={7}
              isLoading={processing}
            >
              Save
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </AppCard>
  );
};

export default UserProfileEdit;
