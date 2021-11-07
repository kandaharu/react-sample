import { VFC } from 'react';
import { Heading } from '@chakra-ui/react';

const Title: VFC<{ children: string }> = ({ children }) => (
  <Heading as="h1" size="lg" fontWeight="bold">
    {children}
  </Heading>
);

export default Title;
