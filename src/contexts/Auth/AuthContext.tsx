import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  getProfile: () => Promise<void>;
  accessToken: string;
};

export const AuthContext = createContext<AuthContextType>(null!);
