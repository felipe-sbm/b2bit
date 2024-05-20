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
      if (isLogged) {
        navigate("/");
      } else {
        alert("Tem algo de errado aqui bixo, tenta de novo... :/");
      }
    }
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
        <div className="relative bg-white px-5 pb-8 pt-10 shadow-2xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <img
              src="https://b2bit.company/wp-content/uploads/2022/10/LOGOTIPO-1.png"
              className="m-8 h-20 invert"
              alt="Tailwind Play"
            />
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="username"
              >
                {" "}
                E-mail{" "}
              </label>
              <input
                className="w-full appearance-none rounded border bg-slate-100 px-3 py-2 leading-tight text-gray-700"
                type="text"
                placeholder="@gmail.com"
                value={email}
                onChange={handleEmailInput}
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                {" "}
                Password{" "}
              </label>
              <input
                className="focus: mb-3 w-full appearance-none rounded border bg-slate-100 px-3 py-2 font-bold leading-tight text-gray-700"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="****************"
              />
            </div>
            <div className="items-center; flex">
              <button
                className="w-full rounded bg-blue-900 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
