import Home from "./pages/Home";
import DataProvider from "./provider/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
