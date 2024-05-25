import MainPage from "./pages/Lobby/LobbyPage";
import CalculatePage from "./pages/Calculate/CalculatePage";
import ResultPage from "./pages/Result/ResultPage";

import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/calculate" element={<CalculatePage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;