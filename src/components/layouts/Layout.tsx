import { VFC } from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Main from '../pages/Main';

const Layout: VFC = () => (
  <Flex bg="gray.100" w="100vw" h="100vh">
    <Header />
    <Main />
  </Flex>
);

export default Layout;
