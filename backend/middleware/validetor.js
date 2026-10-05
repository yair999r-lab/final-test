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


export function chackSchema(schema){
    function valid(req, res, next){
        const data = req.body

        const result = schema.safePerase(data)
        if(!result.succses){
            const error = new Error("Essential data is missing")
            error.status = 400
            throw error
        }
        res.data = result
        next()
    }
    valid()
}