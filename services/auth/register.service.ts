import { APIResponse } from "../../types/interface/api.interface";
import { RegisterUser } from "../../types/interface/auth/authPayload.interface";

export const registerUserService = async (
  userData: RegisterUser
): Promise<APIResponse> => {
  if (
    !userData.confirm_password ||
    !userData.email ||
    !userData.first_name ||
    !userData.last_name ||
    !userData.password ||
    !userData.username
  ) {
    return { status: 400, message: "Please enter all fields" };
  }
  const passowrdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  if (!passowrdRegex.test(userData.password)) {
    return {
      status: 400,
      message:
        "Invalid Password format. Password should be atleast 8 characters long, have one uppercase and one lowercase character and one symbol",
    };
  }

  if (userData.confirm_password !== userData.password) {
    return {
      status: 400,
      message: "Password and confirm passowrd fields do not match",
    };
  }
  return { status: 201, message: "Message" };
};
