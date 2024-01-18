import { Button } from '@mui/material';
import RootProvider from './provider';

function App() {
  return (
    <RootProvider>
      <Button>Matthew Button</Button>
    </RootProvider>
  );
}

export default App;
