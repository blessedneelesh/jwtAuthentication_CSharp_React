import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import AuthProvider from "./provider/AuthProvider";
import Navbar from "./pages/UI/Navbar";
import DataProvider from "./provider/DataProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <DataProvider>
          <Routes />
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
