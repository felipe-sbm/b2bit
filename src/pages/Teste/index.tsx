import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link } from "react-router-dom";

export const Teste = () => {
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signOut();
    window.location.reload();
  };    
  return (
    <div>
      <header className="header">
        <nav>
          <button onClick={handleLogout} className="logout"><strong>Logout</strong></button>
        </nav>
      </header>
      <div className="App">
        <div className="b2bit">
            <p className="teimoso">Profile Picture</p>
          <img
            src={process.env.PUBLIC_URL + "/no_pfp.jpg"}
            alt="Foto do usuário"
            className="img"
          />
          <p>
            Your <strong>Name</strong>
          </p>
          <input className="form" placeholder={auth.user?.email} readOnly />
          <p>
            Your <strong>E-mail</strong>
          </p>
          <input className="form" placeholder={auth.user?.name} readOnly />
        </div>
      </div>
    </div>
  );
};
