import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
    return res;
  } catch (err) {
    toast.warning("Some error occurred try again later", {
      position: toast.POSITION.TOP_LEFT,
    });
  }
};
