import React from 'react';
import {
  Divider,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useToken,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaUserCircle, MdGroup, TbLogout } from 'react-icons/all';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import DevChallengeLogoDark from '@/Assets/Images/devchallenges.svg';
import DevChallengeLogoLight from '@/Assets/Images/devchallenges-light.svg';
import useLogout from '@/Features/Auth/Hooks/useLogout';

const AppHeader: React.FC = () => {
  const {
    auth: {
      user: { name, avatar },
    },
  } = usePage().props as never;
  const AppLogo = useColorModeValue(
    DevChallengeLogoDark,
    DevChallengeLogoLight
  );
  const [red] = useToken('colors', ['red.500']);
  const { logout, processing } = useLogout();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      w="full"
      height={50}
      justifyContent="space-between"
      px={[5, 7, 9]}
      py={8}
      alignItems="center"
    >
      <InertiaLink href="/">
        <Image src={AppLogo} />
      </InertiaLink>
      <Menu>
        <MenuButton cursor="pointer" minW={0}>
          <HStack>
            <Image
              src={
                avatar ||
                'https://gravatar.com/avatar/7121ccc404662c9995f500fcba5879bd?s=400&d=robohash&r=x'
              }
              borderRadius="md"
              w={8}
              h={8}
            />
            <Text
              display={['none', 'block']}
              fontSize="sm"
              fontWeight="medium"
              textDecoration="none"
            >
              {name}
            </Text>
            <ChevronDownIcon display={['none', 'block']} />
          </HStack>
        </MenuButton>
        <MenuList p={3} as={VStack}>
          <MenuItem
            as={InertiaLink}
            href="/account/profile"
            icon={<FaUserCircle size={18} />}
            rounded="md"
          >
            My Profile
          </MenuItem>
          <MenuItem icon={<MdGroup size={18} />} rounded="md">
            Group Chat
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            rounded="md"
          >
            {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </MenuItem>
          <Divider />
          <MenuItem
            icon={<TbLogout size={18} color={red} />}
            rounded="md"
            color={red}
            disabled={processing}
            onClick={logout}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default AppHeader;
