import { VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Main from './components/Main';

const App: VFC = () => (
  <ChakraProvider>
    <Main />
  </ChakraProvider>
);

export default App;
