import userReducer from "./reducers/userReducer";
import {combineReducers} from "redux";
import courseReducer from "./reducers/courseReducer";
import categoryReducer from "./reducers/categoryReducer";
import courseSessionReducer from "./reducers/courseSessionReducer";
// Import other reducers if you have them

const rootReducer = combineReducers({
    users: userReducer,
    courses: courseReducer,
    category: categoryReducer,
    courseSessions: courseSessionReducer,


});

export default rootReducer;
