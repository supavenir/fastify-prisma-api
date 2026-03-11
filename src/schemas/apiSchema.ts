import {z} from "zod";

const idRequest= z.object({
    id: z.coerce.number(),
})
export const apiSchemas = {
    idRequest
}