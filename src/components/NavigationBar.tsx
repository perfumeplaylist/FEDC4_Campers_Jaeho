import { Flex } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoIosAddCircle } from 'react-icons/io';
import { HiPaperAirplane } from 'react-icons/hi2';
import { ROUTES } from '../constants/routes';
import PrimaryAvatar from './common/PrimaryAvatar';
import PrimaryLink from './common/PrimaryLink';
import { useUserInfoContext } from '../contexts/UserInfoProvider';

const NavigationBar = () => {
  const userData = useUserInfoContext();

  return (
    <>
      <Flex
        pos="fixed"
        w="100%"
        p="10px"
        textAlign="center"
        bottom={0}
        left={0}
        right={0}
        cursor="pointer"
        bgColor={userData ? '#ECE9E9' : '#28B67E'}
        align="center"
        justify="center"
      >
        {userData ? (
          <>
            <PrimaryLink color="#0D1321" router={ROUTES.MAIN} flex="1">
              <AiFillHome fontSize={22} />
            </PrimaryLink>
            <PrimaryLink color="#0D1321" router={ROUTES.USER_LIST} flex="1">
              <FaPeopleGroup fontSize={22} />
            </PrimaryLink>
            <PrimaryLink color="#0D1321" router={ROUTES.CREATE_POST} flex="1">
              <IoIosAddCircle fontSize={22} />
            </PrimaryLink>
            <PrimaryLink color="#0D1321" router={ROUTES.CHAT_LIST} flex="1">
              <HiPaperAirplane fontSize={22} />
            </PrimaryLink>
            <PrimaryLink
              flex="1"
              color="#0D1321"
              router={`${ROUTES.USER_INFO(userData?._id || '')}`}
            >
              <PrimaryAvatar
                size="sm"
                src="https://bit.ly/dan-abramov"
                userId="1234"
                isOnline={true}
              />
            </PrimaryLink>
          </>
        ) : (
          <PrimaryLink color="#0D1321" router={ROUTES.AUTH}>
            로그인!
          </PrimaryLink>
        )}
      </Flex>
    </>
  );
};

export default NavigationBar;
