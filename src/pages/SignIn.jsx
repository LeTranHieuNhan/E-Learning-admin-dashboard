import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/actions/authAction";

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(email, password));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/StudentDashboard');
        }
    }, [isAuthenticated, navigate]);

    const handleMouseDown = () => {
        setPasswordVisible(true);
    };

    const handleMouseUp = () => {
        setPasswordVisible(false);
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="E-learning"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Welcome back
                </h2>
                <h2 className="mt-1 text-[20px] leading-[30px] font-sans font-bold text-[#9095A0FF] text-center">
                    Log in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                type={passwordVisible ? 'text' : 'password'}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md p-2 border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                <path
                                    fillRule="evenodd"
                                    d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between mt-[16px]">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500">{error}</p>}

                <div className="w-full gap-4 mb-2 lg:mb-0 mt-[20px] flex p-8">
                    <button
                        type="button"
                        className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-[18px] hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4"
                            id="google"
                        >
                            <path
                                fill="#fbbb00"
                                d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                            ></path>
                            <path
                                fill="#518ef8"
                                d="M507.527 208.176C509.348 217.047 510.346 226.451 510.346 236c0 9.958-1.12 19.682-3.156 29.056-6.971 32.917-24.502 61.666-48.195 82.362l-.014-.014-68.615-3.5-9.698-64.504c13.93-8.243 25.649-19.618 33.569-33.036H261.539v-82.364h246.973z"
                            ></path>
                            <path
                                fill="#28b446"
                                d="M459.016 347.418 459.03 347.432c-43.286 38.654-99.954 62.274-162.058 62.274-62.805 0-119.08-23.584-162.231-62.145l-.014-.014 69.375-56.837c19.529 13.662 43.63 21.833 69.007 21.833 26.78 0 51.706-9.225 71.088-24.888l69.543 59.287z"
                            ></path>
                            <path
                                fill="#f14336"
                                d="M113.047 309.252-.001 148.268 69.372 91.43l69.053 56.648c18.812-14.379 41.775-25.597 66.952-32.132 15.565-4.008 31.982-6.2 49.055-6.2 61.568 0 115.94 23.763 158.05 62.555l-68.003 66.332c-18.641-14.399-42.366-23.057-67.775-23.057-26.933 0-51.509 9.686-70.561 25.853L113.047 309.252z"
                            ></path>
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link
                        to="/signup"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
