                // src/actions/userActions.js
import axios from 'axios';
import {UserActionTypes} from "./actionTypes";

const API_URL = 'http://localhost:8080/api/v1';

const getToken = () => localStorage.getItem('token');

export const fetchUserRequest = () => ({
    type: UserActionTypes.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (users) => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: users,
});

export const fetchUserFailure = (error) => ({
    type: UserActionTypes.FETCH_USER_FAILURE,
    payload: error,
});

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUserRequest());
        try {
            const token = getToken();
            const response = await axios.get(`${API_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(fetchUserSuccess(response.data));
        } catch (error) {
            dispatch(fetchUserFailure(error.message));
        }
    };
};

export const createUserRequest = () => ({
    type: UserActionTypes.CREATE_USER_REQUEST,
});

export const createUserSuccess = (user) => ({
    type: UserActionTypes.CREATE_USER_SUCCESS,
    payload: user,
});

export const createUserFailure = (error) => ({
    type: UserActionTypes.CREATE_USER_FAILURE,
    payload: error,
});

export const createUser = (user) => {
    return async (dispatch) => {
        dispatch(createUserRequest());
        try {
            const token = getToken();
            const response = await axios.post(`${API_URL}/users`, user, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(createUserSuccess(response.data));
        } catch (error) {
            dispatch(createUserFailure(error.message));
        }
    };
};

export const deleteUserRequest = () => ({
    type: UserActionTypes.DELETE_USER_REQUEST,
});

export const deleteUserSuccess = (userId) => ({
    type: UserActionTypes.DELETE_USER_SUCCESS,
    payload: userId,
});

export const deleteUserFailure = (error) => ({
    type: UserActionTypes.DELETE_USER_FAILURE,
    payload: error,
});

export const deleteUser = (userId) => {
    return async (dispatch) => {
        dispatch(deleteUserRequest());
        try {
            const token = getToken();
            await axios.delete(`${API_URL}/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(deleteUserSuccess(userId));
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };
};

export const updateUserRequest = () => ({
    type: UserActionTypes.UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
    type: UserActionTypes.UPDATE_USER_SUCCESS,
    payload: user,
});

export const updateUserFailure = (error) => ({
    type: UserActionTypes.UPDATE_USER_FAILURE,
    payload: error,
});

export const updateUser = (id, user, roleId) => {
    return async (dispatch) => {
        dispatch(updateUserRequest());
        try {
            const token = getToken();
            const response = await axios.put(`${API_URL}/users/${id}?roleId=${roleId}`, user, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(updateUserSuccess(response.data));
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };
};

export const assignRoleRequest = () => ({
    type: UserActionTypes.ASSIGN_ROLE_REQUEST,
});

export const assignRoleSuccess = (user) => ({
    type: UserActionTypes.ASSIGN_ROLE_SUCCESS,
    payload: user,
});

export const assignRoleFailure = (error) => ({
    type: UserActionTypes.ASSIGN_ROLE_FAILURE,
    payload: error,
});

export const assignRole = (roleId, userId) => {
    return async (dispatch) => {
        dispatch(assignRoleRequest());
        try {
            const token = getToken();
            const response = await axios.put(`${API_URL}/users/assign/${roleId}/${userId}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(assignRoleSuccess(response.data));
        } catch (error) {
            dispatch(assignRoleFailure(error.message));
        }
    };
};
export const fetchNewUsersRequest = () => ({
    type: UserActionTypes.FETCH_NEW_USERS_REQUEST,
});

export const fetchNewUsersSuccess = (newUsers) => ({
    type: UserActionTypes.FETCH_NEW_USERS_SUCCESS,
    payload: newUsers,
});

export const fetchNewUsersFailure = (error) => ({
    type: UserActionTypes.FETCH_NEW_USERS_FAILURE,
    payload: error,
});

export const fetchNewUsers = () => {
    return async (dispatch) => {
        dispatch(fetchNewUsersRequest());
        try {
            const response = await axios.get(`${API_URL}/users/newUsers`);
            dispatch(fetchNewUsersSuccess(response.data));
        } catch (error) {
            dispatch(fetchNewUsersFailure(error.message));
        }
    };
};
