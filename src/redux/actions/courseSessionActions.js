import axios from 'axios';
import { CourseSessionActionTypes } from './actionTypes';

const API_URL = 'http://localhost:8080/api/v1/course_sessions';

// Helper function to create headers with Authorization
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { Authorization: `Bearer ${token}` };
};

// API request utility function
const apiRequest = async (method, url, data = null, headers = {}) => {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers: { ...getAuthHeaders(), ...headers },
        });
        return { data: response.data };
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
};

// Generic action creator for success and failure
const createAction = (type, payload) => ({ type, payload });

// Fetch Course Sessions Actions
export const fetchCourseSessions = () => async (dispatch) => {
    dispatch(createAction(CourseSessionActionTypes.FETCH_SESSIONS_REQUEST));
    const { data, error } = await apiRequest('get', API_URL);
    if (data) {
        dispatch(createAction(CourseSessionActionTypes.FETCH_SESSIONS_SUCCESS, data));
    } else {
        dispatch(createAction(CourseSessionActionTypes.FETCH_SESSIONS_FAILURE, error));
    }
};

// Create Course Session Actions
export const createCourseSession = (session, courseId) => async (dispatch) => {
    dispatch(createAction(CourseSessionActionTypes.CREATE_SESSION_REQUEST));
    const { data, error } = await apiRequest('post', `${API_URL}/${courseId}`, session);
    if (data) {
        dispatch(createAction(CourseSessionActionTypes.CREATE_SESSION_SUCCESS, data));
    } else {
        dispatch(createAction(CourseSessionActionTypes.CREATE_SESSION_FAILURE, error));
    }
};

// Update Course Session Actions
export const updateCourseSession = (id, session) => async (dispatch) => {
    dispatch(createAction(CourseSessionActionTypes.UPDATE_SESSION_REQUEST));
    const { data, error } = await apiRequest('put', `${API_URL}/${id}`, session);
    if (data) {
        dispatch(createAction(CourseSessionActionTypes.UPDATE_SESSION_SUCCESS, data));
    } else {
        dispatch(createAction(CourseSessionActionTypes.UPDATE_SESSION_FAILURE, error));
    }
};

// Delete Course Session Actions
export const deleteCourseSession = (id) => async (dispatch) => {
    dispatch(createAction(CourseSessionActionTypes.DELETE_SESSION_REQUEST));
    const { data, error } = await apiRequest('delete', `${API_URL}/${id}`);
    if (data || !error) { // If delete is successful, it may return no data
        dispatch(createAction(CourseSessionActionTypes.DELETE_SESSION_SUCCESS, id));
    } else {
        dispatch(createAction(CourseSessionActionTypes.DELETE_SESSION_FAILURE, error));
    }
};

// Fetch Sessions By Course ID Actions
export const fetchCourseSessionsByCourseId = (courseId) => async (dispatch) => {
    dispatch(createAction(CourseSessionActionTypes.FETCH_SESSIONS_BY_COURSE_ID_REQUEST));
    const { data, error } = await apiRequest('get', `${API_URL}/course_sessions/${courseId}`);
    if (data) {
        dispatch(createAction(CourseSessionActionTypes.FETCH_SESSIONS_BY_COURSE_ID_SUCCESS, data));
    } else {
        dispatch(createAction(CourseSessionActionTypes.FETCH_SESSIONS_BY_COURSE_ID_FAILURE, error));
    }
};
