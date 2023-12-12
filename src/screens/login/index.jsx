import { useState } from 'react';
import Logo from '../../assets/logo.png';
import Button from "../../components/button/index.jsx";
import {axiosClient} from "../../libs/axiosClient.js";
import {useDispatch} from "react-redux";
import {setUserData} from "../../redux/slices/userSlice.js";
import {useNavigate} from "react-router-dom";

export default function LoginPage () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axiosClient.post('/auth/login/', {
                username, password
            });
            const userData = response.data.data;
            dispatch(setUserData(userData));
            navigate(userData?.user_role === 1 ? '/job-quotation' : '/profile');
        } catch (err) {
            console.log(err);
        }
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        console.log('Redirecting to forgot password page');
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <div className="flex justify-center">
                    <img src={Logo} alt="Logo" className="w-[180px] h-[120px]" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Username</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button>Login</Button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-[#004603] text-sm" onClick={handleForgotPassword}>
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    );
}
