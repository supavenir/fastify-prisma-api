import {FastifyRequest} from "fastify";
import {prisma} from "../prisma";
import {AppError} from "../errors/AppError";


async function create(
    data: {
        title: string;
        content: string;
        authorId: number;
    }
){
    //Check for author existence
  const auth=await prisma.post.findUnique(
      {
          where:{id: data.authorId},
          select: {id:true},
      })
    if(!auth || auth.id!=data.authorId){
        throw new AppError("Author not found.");
    }
    return prisma.post.create({data})
}

export const postService={
    create,
}