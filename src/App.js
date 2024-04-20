import { MantineProvider } from "@mantine/core";
import Home from "./Components/Home";

function App() {
    return (
        <MantineProvider>
            <Home />
        </MantineProvider>
    );
}

export default App;
