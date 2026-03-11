import {FastifyInstance} from "fastify";
import {postController} from "../controllers/post.controller";


export function postRoutes(app:FastifyInstance){
    app.post("/posts",postController.create)
}