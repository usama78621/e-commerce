import { createContext, useContext, useReducer } from "react";
import { reducer } from "reducer/AuthReducer";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {
  user: null,
  userLoading: false,
  showAlert: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, reducer);

  // axios
  const authFetch = axios.create({
    baseURL: `/api/v1`,
  });
  // request

  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        console.log("oafjeio");
      }
      return Promise.reject(error);
    }
  );

  const register = async (currentUser) => {
    dispatch({ type: "SETUP_USER_BEGIN" });
    try {
      const { data } = await axios.post(`/api/v1/auth/register`, currentUser);
    } catch (error) {
      console.log("error =>", error);
    }
  };

  const login = () => {};
  return (
    <AuthContext.Provider value={{ ...state, dispatch, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// use Gobal Auth
export const useGobalAuthContext = () => {
  return useContext(AuthContext);
};
