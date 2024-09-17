import { jwtDecode } from "jwt-decode";
const verifyAdmin = () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    // user is not admin as they do not have a token
    return false;
  }

  const decodedAuthToken = jwtDecode(token);

  if (decodedAuthToken.role !== "admin") {
    // return false as user is not admin
    return false;
  } else {
    // users role would be admin
    return true;
  }
};

export { verifyAdmin };
