import { APIResponse } from "../../types/interface/api.interface";
import { RegisterUser } from "../../types/interface/auth/authPayload.interface";

export const registerUserService = async (
  userData: RegisterUser
): Promise<APIResponse> => {
  return { status: 200, message: "Message" };
};
