import { defineCollection, z } from "astro:content";

const players = defineCollection({
    schema: z.object({
        nickname: z.string(),
        name: z.string(),
        country: z.string(),
        birthday: z.string(),
        age: z.number(),
        team: z.string(),
        position: z.string(),
        img: z.string(),
    })
})

export const collections = { players };