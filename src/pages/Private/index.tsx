import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Página Privada</h2>
      Your <strong>Name</strong>
      {auth.user?.name}
      Your <strong>E-mail</strong>
      {auth.user?.email}
    </div>
  );
};
