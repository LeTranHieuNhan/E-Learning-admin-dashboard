import userReducer from "./reducers/userReducer";
import {combineReducers} from "redux";
import courseReducer from "./reducers/courseReducer";
import categoryReducer from "./reducers/categoryReducer";
import courseSessionReducer from "./reducers/courseSessionReducer";
import roleReducer from "./reducers/roleReducer";
import authReducer from "./reducers/authReducer";
// Import other reducers if you have them

const rootReducer = combineReducers({
    users: userReducer,
    courses: courseReducer,
    category: categoryReducer,
    courseSessions: courseSessionReducer,
    roles: roleReducer,
    auth: authReducer,



});

export default rootReducer;
