import {userController} from "../controllers/user.controller";
import {FastifyInstance} from "fastify";

export function userRoutes(app: FastifyInstance) {
    app.post("/users", userController.create)
    app.get("/users", userController.getAll)
    app.get("/users/:id", userController.getOne)
}