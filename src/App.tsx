import { VFC } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './components/Layout';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});
const App: VFC = () => (
  <ChakraProvider theme={theme}>
    <Layout />
  </ChakraProvider>
);

export default App;
