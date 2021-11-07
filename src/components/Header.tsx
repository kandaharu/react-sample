import { VFC } from 'react';
import { Flex, Box, IconButton, Spacer, Button } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Header: VFC = () => (
  <Flex
    as="header"
    position="fixed"
    top={0}
    width="full"
    shadow="sm"
    py={4}
    px={8}
  >
    <Box>
      <IconButton
        aria-label="back"
        color="black"
        rounded="full"
        icon={<ChevronLeftIcon />}
      />
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme="blue">保存済み</Button>
    </Box>
  </Flex>
);

export default Header;
