import userReducer from "./reducers/userReducer";
import {combineReducers} from "redux";
import courseReducer from "./reducers/courseReducer";
// Import other reducers if you have them

const rootReducer = combineReducers({
    users: userReducer,
    courses: courseReducer,

});

export default rootReducer;
