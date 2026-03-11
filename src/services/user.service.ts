import {prisma} from "../prisma";

async function create(data: {
    login: string,
    firstName:string,
    lastName: string,
    email: string,
}) {
    return prisma.user.create({ data})
}

async function getOne(id: number) {
    return prisma.user.findUnique({
        where: { id }
    })
}

async function getAll() {
    return prisma.user.findMany()
}

export const userService={
    create,getAll,getOne
}