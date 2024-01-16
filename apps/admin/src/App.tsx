import RootProvider from "./provider";
import { Button } from "@mui/material";

function App() {
  return (
    <RootProvider>
      <Button>Matthew Button</Button>
    </RootProvider>
  );
}

export default App;
