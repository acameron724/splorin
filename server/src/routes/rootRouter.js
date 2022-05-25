import express from "express";
import clientRouter from "./clientRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import hikesRouter from "./api/v1/hikesRouter.js";
import myHikesRouter from "./api/v1/myHikesRouter.js";
import mapsRouter from "./api/v1/mapsRouter.js"

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/home", clientRouter);
rootRouter.use("/add-a-hike", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/hikes", hikesRouter);
rootRouter.use("/api/v1/my-hikes", myHikesRouter);
rootRouter.us("/api/v1/maps", mapsRouter);

export default rootRouter;
