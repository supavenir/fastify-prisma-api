import {z} from "zod";


export const postSchema = z.object({
    title: z.string().min(5),
    content: z.string(),
    authorId: z.coerce.number(),
})