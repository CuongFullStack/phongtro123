import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

//Config dành cho tất cả reducer
const commonConfig = {
  storage, //Cài lưu trong local storage
  stateReconciler: autoMergeLevel2, //Đọc thêm
};

const authConfig = {
  ...commonConfig,
  key: "auth", //key lưu trong local storage
  whitelist: ["isLoggedIn", "token"], //các key của state redux cần lưu
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
});

export default rootReducer;
