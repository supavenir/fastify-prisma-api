import {FastifyReply, FastifyRequest} from "fastify";
import {userService} from "../services/user.service";
import {userSchema} from "../schemas/userSchema";
import {apiSchemas} from "../schemas/apiSchema";

async function create(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const validUser = userSchema.parse(request.body);
    const user = await userService.create(
        validUser
    )

    return reply.status(201).send(user)
}

async function getAll(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const users = await userService.getAll()
    return reply.send(users)
}

async function getOne(request: FastifyRequest, reply: FastifyReply) {
    const validId=apiSchemas.idRequest.parse(request.params)
    const user=await userService.getOne(validId.id);
    return reply.send(user)
}

export const userController = {
    getAll,
    create,
    getOne,
}