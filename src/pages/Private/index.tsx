import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signOut();
    window.location.reload();
  };
  useEffect(() => {
    auth.getProfile();
  },[]);

  return (
    <div>
      <header className="header">
        <nav>
          <button onClick={handleLogout} className="logout">
            <strong>Logout</strong>
          </button>
        </nav>
      </header>
      <div className="App">
        <div className="b2bit">
          <p className="teimoso">Profile Picture</p>
          <div className="image-container">
            <img
              src={
                auth.user?.avatar?.high ||
                process.env.PUBLIC_URL + "/no_pfp.jpg"
              }
              alt="Foto do usuário"
              className="img"
            />
          </div>
          <div className="outputs">
            <p>
              Your <strong>Name</strong>
            </p>
            <input className="form" placeholder={auth.user?.name} readOnly />
            <p>
              Your <strong>E-mail</strong>
            </p>
            <input className="form" placeholder={auth.user?.email} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};
