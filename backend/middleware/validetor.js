import { z} from "zod"

export const validPost = z.object({
    displayName: z.string(),
    description: z.string(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]),
    arena: z.enum(["North", "South", "Center"]),
    status: z.enum(["Active", "Handled"]),
    lon: z.number(),
    lat: z.number()
})

export const validUpdate = z.object({
    displayName: z.string().optional(),
    description: z.string().optional(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]).optional(),
    arena: z.enum(["North", "South", "Center"]).optional(),
    status: z.enum(["Active", "Handled"]).optional(),
    lon: z.number().optional(),
    lat: z.number().optional()})


export function chackSchema(schema){
   return function valid(req, _res, next){
        const data = req.body

        const result = schema.safeParse(data)
        if(!result.success){
            const error = new Error("Essential data is missing")
            error.status = 400
            throw error
        }
        req.data = result.data
        next()
    }
}