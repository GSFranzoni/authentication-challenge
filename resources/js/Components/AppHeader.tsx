import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useToken,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaUserCircle, MdGroup, TbLogout } from 'react-icons/all';
import { Inertia } from '@inertiajs/inertia';
import DevChallengeLogoDark from '@/Assets/Images/devchallenges.svg';
import DevChallengeLogoLight from '@/Assets/Images/devchallenges-light.svg';
import useLogout from '@/Features/Auth/Hooks/useLogout';

const AppHeader: React.FC = () => {
  const AppLogo = useColorModeValue(
    DevChallengeLogoDark,
    DevChallengeLogoLight
  );
  const [red] = useToken('colors', ['red.500']);
  const { logout, processing } = useLogout();
  return (
    <HStack
      w="full"
      height={50}
      justifyContent="space-between"
      p={10}
      alignItems="center"
    >
      <Image src={AppLogo} />
      <Menu>
        <MenuButton cursor="pointer" minW={0}>
          <HStack>
            <Avatar size="sm" />
            <Text fontSize="sm" fontWeight="medium" textDecoration="none">
              John Doe
            </Text>
            <ChevronDownIcon />
          </HStack>
        </MenuButton>
        <MenuList p={3} as={VStack}>
          <MenuItem icon={<FaUserCircle size={18} />} rounded="md">
            My Profile
          </MenuItem>
          <MenuItem icon={<MdGroup size={18} />} rounded="md">
            Group Chat
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
