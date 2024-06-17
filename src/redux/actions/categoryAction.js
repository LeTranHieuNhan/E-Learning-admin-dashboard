// categoryActions.js
import axios from 'axios';
import { CategoryActionTypes } from './actionTypes';

const API_URL = 'http://localhost:8080/api/v1';
const getToken = () => localStorage.getItem('token');

// Fetch Categories
export const fetchCategoriesRequest = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: error,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  };
};

// Fetch Category by ID
export const fetchCategoryByIdRequest = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_BY_ID_REQUEST,
});

export const fetchCategoryByIdSuccess = (category) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_BY_ID_SUCCESS,
  payload: category,
});

export const fetchCategoryByIdFailure = (error) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_BY_ID_FAILURE,
  payload: error,
});

export const fetchCategoryById = (categoryId) => {
  return async (dispatch) => {
    dispatch(fetchCategoryByIdRequest());
    try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchCategoryByIdSuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoryByIdFailure(error.message));
    }
  };
};

// Create Category
export const createCategoryRequest = () => ({
  type: CategoryActionTypes.CREATE_CATEGORY_REQUEST,
});

export const createCategorySuccess = (category) => ({
  type: CategoryActionTypes.CREATE_CATEGORY_SUCCESS,
  payload: category,
});

export const createCategoryFailure = (error) => ({
  type: CategoryActionTypes.CREATE_CATEGORY_FAILURE,
  payload: error,
});

export const createCategory = (category) => {
  return async (dispatch) => {
    dispatch(createCategoryRequest());
    try {
      const token = getToken();
      const response = await axios.post(`${API_URL}/categories`, category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(createCategorySuccess(response.data));
    } catch (error) {
      dispatch(createCategoryFailure(error.message));
    }
  };
};

// Update Category
export const updateCategoryRequest = () => ({
  type: CategoryActionTypes.UPDATE_CATEGORY_REQUEST,
});

export const updateCategorySuccess = (category) => ({
  type: CategoryActionTypes.UPDATE_CATEGORY_SUCCESS,
  payload: category,
});

export const updateCategoryFailure = (error) => ({
  type: CategoryActionTypes.UPDATE_CATEGORY_FAILURE,
  payload: error,
});

export const updateCategory = (category) => {
  return async (dispatch) => {
    dispatch(updateCategoryRequest());
    try {
      const token = getToken();
      const response = await axios.put(`${API_URL}/categories/${category.id}`, category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(updateCategorySuccess(response.data));
    } catch (error) {
      dispatch(updateCategoryFailure(error.message));
    }
  };
};

// Delete Category
export const deleteCategoryRequest = () => ({
  type: CategoryActionTypes.DELETE_CATEGORY_REQUEST,
});

export const deleteCategorySuccess = (categoryId) => ({
  type: CategoryActionTypes.DELETE_CATEGORY_SUCCESS,
  payload: categoryId,
});

export const deleteCategoryFailure = (error) => ({
  type: CategoryActionTypes.DELETE_CATEGORY_FAILURE,
  payload: error,
});

export const deleteCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(deleteCategoryRequest());
    try {
      const token = getToken();
      await axios.delete(`${API_URL}/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(deleteCategorySuccess(categoryId));
    } catch (error) {
      dispatch(deleteCategoryFailure(error.message));
    }
  };
};
