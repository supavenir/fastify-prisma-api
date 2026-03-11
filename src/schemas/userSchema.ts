import {z} from "zod";

export const userSchema= z.object({
        login: z.string().min(5),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
    }
);

export const userAuthSchema= z.object({
    login: z.string().min(5),
    password: z.string().min(8),
})