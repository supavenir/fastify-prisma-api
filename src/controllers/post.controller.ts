import {FastifyReply, FastifyRequest} from "fastify";
import {postSchema} from "../schemas/postSchema";
import {postService} from "../services/post.service";

async function create(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const validPost = postSchema.parse(request.body);
    const post = await postService.create(
        validPost
    )

    return reply.status(201).send(post)
}

export const postController = {
    create,
}