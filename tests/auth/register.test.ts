import { registerUserService } from "../../services/auth";
import { APIResponse } from "../../types/interface/api.interface";
import { RegisterUser } from "../../types/interface/auth/authPayload.interface";

describe("POST api/v1/auth/register", () => {
  test("Register User", () => {
    const userData: RegisterUser = {
      first_name: "Test",
      last_name: "User",
      email: "test.user@gmail.com",
      password: "test101",
      confirm_password: "test101",
      username: "test.user",
    };

    registerUserService(userData).then((resp: APIResponse) => {
      expect(resp.status).toBe(200);
    });
  });
});
