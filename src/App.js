import HomePage from "./pages/HomePage";
import DataProvider from "./provider/DataProvider";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}

export default App;
