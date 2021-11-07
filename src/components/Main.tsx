import { VFC } from 'react';
import { Flex, Box, Grid, IconButton } from '@chakra-ui/react';
import { AttachmentIcon, AddIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import Title from './Title';
import SingleImage from './SingleImage';

const Main: VFC = () => (
  <Box mt="6rem" mx="auto">
    <Title>chakra-ui を使ってみる (+create-react-app)</Title>
    <Flex mt={8}>
      <Grid
        w="50rem"
        bg="white"
        rounded="md"
        p={4}
        shadow="lg"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {[...Array(8).keys()].map((_num: number) => (
          <SingleImage />
        ))}
      </Grid>

      <Box ml={6}>
        <Box bg="white" rounded="full" p={1} shadow="lg">
          <IconButton
            aria-label="edit"
            bg="gray.300"
            color="white"
            rounded="full"
            mr={1}
            icon={<EditIcon />}
          />
          <IconButton
            aria-label="view"
            bg="white"
            color="gray.400"
            rounded="full"
            icon={<ViewIcon />}
          />
        </Box>
        <Box mt={3}>
          <IconButton
            aria-label="view"
            shadow="lg"
            bg="white"
            color="gray.400"
            rounded="full"
            icon={<AttachmentIcon />}
          />
        </Box>
        <Box mt={3}>
          <IconButton
            aria-label="view"
            shadow="lg"
            bg="white"
            color="gray.400"
            rounded="full"
            icon={<AddIcon />}
          />
        </Box>
      </Box>
    </Flex>
  </Box>
);

export default Main;
