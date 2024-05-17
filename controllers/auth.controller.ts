import { NextFunction, Request, Response } from "express";
import { registerUserService } from "../services/auth";
import { catchAsync } from "../helpers/catchAsync.helper";
import { AppError } from "../helpers/appError.helper";

export const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const registerService = await registerUserService(req.body);

    if (registerService.status >= 400) {
      return next(
        new AppError(registerService.message, registerService.status)
      );
    }

    return res.status(registerService.status).json(registerService);
  }
);
