// src/actions/roleActions.js

import apiClient from "../../axiosSetup";

export const FETCH_ROLES_REQUEST = 'FETCH_ROLES_REQUEST';
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS';
export const FETCH_ROLES_FAILURE = 'FETCH_ROLES_FAILURE';

export const ADD_ROLE = 'ADD_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const UPDATE_ROLE = 'UPDATE_ROLE';

export const fetchRoles = () => async (dispatch) => {
    dispatch({ type: FETCH_ROLES_REQUEST });
    try {
        const response = await apiClient.get('/roles');
        dispatch({ type: FETCH_ROLES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ROLES_FAILURE, error });
    }
};

export const addRole = (name) => async (dispatch) => {
    const response = await apiClient.post('/roles', null, { params: { name } });
    dispatch({ type: ADD_ROLE, payload: response.data });
};

export const deleteRole = (id) => async (dispatch) => {
    await apiClient.delete(`/roles/${id}`);
    dispatch({ type: DELETE_ROLE, payload: id });
};

export const updateRole = (id, name) => async (dispatch) => {
    const response = await apiClient.put(`/roles/${id}`, null, { params: { name } });
    dispatch({ type: UPDATE_ROLE, payload: response.data });
};
