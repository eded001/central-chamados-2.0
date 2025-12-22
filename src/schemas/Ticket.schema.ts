import * as z from "zod";

export const Ticket = z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    priority: z.string()
});