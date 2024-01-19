import { RouterProvider } from 'react-router-dom';

import router from '@/common/routes';

import RootProvider from './provider';

function App() {
  return (
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  );
}

export default App;
