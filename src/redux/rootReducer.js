import userReducer from "./reducers/userReducer";
import {combineReducers} from "redux";
import courseReducer from "./reducers/courseReducer";
import categoryReducer from "./reducers/categoryReducer";
// Import other reducers if you have them

const rootReducer = combineReducers({
    users: userReducer,
    courses: courseReducer,
    category: categoryReducer,

});

export default rootReducer;
