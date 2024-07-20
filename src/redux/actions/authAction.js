import axios from "axios";


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const GET_USER_BY_TOKEN = 'GET_USER_BY_TOKEN';


export const registerRequest = () => ({
    type: REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
});

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
});


export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});
export const logout = () => ({
    type: LOGOUT,
});
export  const getUserByToken = (token) => ({
    type: GET_USER_BY_TOKEN,
    payload: token,
});
export const getUserByTokenAction = (token) => {
    return async (dispatch) => {
        try {
            console.log(token)
            const response = await axios.get(`http://localhost:8080/api/v1/auth/${token}`);
            const userData = response.data; // Assuming the API returns user data
            dispatch({
                type: GET_USER_BY_TOKEN,
                payload: userData
            });
        } catch (error) {
            // Handle error if the API request fails
            console.error('Error fetching user by token:', error);
            // You might dispatch an action to update the error state in Redux if needed
        }
    };
};

export const registerUser = (username, email, password) => {
    return async (dispatch) => {
        dispatch(registerRequest());

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
                username,
                email,
                password,
            });

            if (response.status !== 200) {
                throw new Error('Registration failed');
            }

            const data = response.data;
            dispatch(registerSuccess(data.user));
        } catch (error) {
            dispatch(registerFailure(error.message));
        }
    };
};
export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            localStorage.setItem('token', data.token);

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            dispatch(loginSuccess(data.token));
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};