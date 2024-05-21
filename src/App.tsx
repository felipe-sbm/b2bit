import { Route, Routes } from "react-router-dom";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";  
import { Login } from "./pages/Login";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
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
