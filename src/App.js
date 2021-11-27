import { Header } from "./components/header";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
      <Toaster />
    </>
  );
}

export default App;
