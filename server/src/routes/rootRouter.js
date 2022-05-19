import express from "express";
import clientRouter from "./clientRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import hikesRouter from "./api/v1/hikesRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/home", clientRouter);
rootRouter.use("/find-a-hike", clientRouter);
rootRouter.use("/add-a-hike", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/hikes", hikesRouter);

export default rootRouter;
