import { string, z} from "zod"
import { da } from "zod/v4/locales"

export const validPost = z.object({
    displayName: z.string(),
    description: z.string(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]),
    arena: z.enum(["North", "South", "Center"]),
    status: z.enum(["Active", "Handled"]),
    lon: z.string(),
    lat: z.string()
})

export const validUpdate = z.object({
    displayName: z.optional(string()),
    description: z.string().optional(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]).optional(),
    arena: z.enum(["North", "South" , "Center"]).optional(),
    status: z.enum(["Active", "Handled"]).optional(),
    lon: z.string().optional(),
    lat: z.string().optional()})

export const validUser = z.object({
    userName: z.string(),
    password: z.string(),
    email: z.string(),
    role: z.enum(["arena_user", "general_user" , "admin"]),
    assignedArena: z.enum(["North", "South"  ,"Center" ,"All"])
})


export function chackSchema(schema){
   return function valid(req, _res, next){
        const data = req.body
        console.log(data)
        const result = schema.safeParse(data)
        console.log( result.error)

        if(!result.success){
            const error = new Error("Essential data is missing")
            error.status = 400
            throw error
        }
        req.data = result.data
        next()
    }
}