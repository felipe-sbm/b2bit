import { Route, Routes } from "react-router-dom";
import { Private } from "./pages/Private";
import { Teste } from "./pages/Teste"
import { RequireAuth } from "./contexts/Auth/RequireAuth";  
import { Login } from "./pages/Login";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teste" element={<Teste />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
