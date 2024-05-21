import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccsessToken] = useState<string>("");
  const api = useApi();

  const signIn = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.tokens) {
      setAccsessToken(data.tokens.access);
      setToken(data.tokens.access);
      return true;
    }
    return false;
  };
  const signOut = async () => {
    console.log("A saída do usuário está sendo processada...");
    setUser(null);
    setToken("");
  };
  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const getProfile = async () => {
    const data = await api.getProfile();
    if (data) {
      setUser(data);
      console.log(data);
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, getProfile, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
