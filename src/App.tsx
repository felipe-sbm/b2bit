import { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = window.location.href;
  };

  return (
    <div className="App">
      <header className="bg-secondary p-4">
        <nav>
          <button className="bg-primary text-white px-4 py-2 rounded">
            <Link to="/">Log in</Link>
          </button>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sign Out</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
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
