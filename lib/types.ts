import { z } from "zod";

export const FormCreateArticle = z.object({
    category_id: z.number().min(1),
    title: z.string().min(1),
    read_estimation: z.string().min(1),
    content: z.string().min(1),
})