import { registerUserService } from "../../services/auth";
import { APIResponse } from "../../types/interface/api.interface";
import { RegisterUser } from "../../types/interface/auth/authPayload.interface";

describe("POST api/v1/auth/register", () => {
  test("Register User Successful", async () => {
    const userData: RegisterUser = {
      first_name: "Test",
      last_name: "User",
      email: "test.user@gmail.com",
      password: "Test101@",
      confirm_password: "Test101@",
      username: "test.user",
    };

    const resp: APIResponse = await registerUserService(userData);
    expect(resp.status).toEqual(201);
  });

  test("Register User invalid password format", async () => {
    const userData: RegisterUser = {
      first_name: "Test",
      last_name: "User",
      email: "test.user@gmail.com",
      password: "test101",
      confirm_password: "test101",
      username: "test.user",
    };

    const resp: APIResponse = await registerUserService(userData);
    expect(resp.status).toEqual(400);
  });

  test("Register User mismatch password field", async () => {
    const userData: RegisterUser = {
      first_name: "Test",
      last_name: "User",
      email: "test.user@gmail.com",
      password: "Test@123",
      confirm_password: "Test@124",
      username: "test.user",
    };

    const resp: APIResponse = await registerUserService(userData);
    expect(resp.status).toEqual(400);
  });
});
