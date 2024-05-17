import { useState, useContext, ChangeEvent } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signIn(email, password);
            if (isLogged) {
                navigate('/');
            } else { alert ("Tem algo de errado aí bixo."); }
        }
    }
    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h2>Página fechada</h2>

            <input type="text" value={email} onChange={handleEmailInput} placeholder="@gmail.com" />

            <input type="text" value={password} onChange={handlePasswordInput} placeholder="****************" />

            <button onClick={handleLogin}>Sign In</button>
        </div>
    )
}