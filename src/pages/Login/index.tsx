import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if (isLogged) { navigate("/"); } else { alert("Tem algo de errado aqui bixo, tenta de novo... :/"); }
    }
  };

  return (
    <div>
      <h2>Páginado usuário, em fase de testes</h2>

    <p>E-mail</p>
      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="@gmail.com"
      />
    <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="****************"
      />
      <br />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};
