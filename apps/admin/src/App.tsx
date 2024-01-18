import { Button } from '@mui/material';
import { ArrowToDownLeftIcon } from '@styles/ui-mui';
import RootProvider from './provider';

function App() {
  return (
    <RootProvider>
      <Button>Matthew Button</Button>
      <ArrowToDownLeftIcon />
    </RootProvider>
  );
}

export default App;
