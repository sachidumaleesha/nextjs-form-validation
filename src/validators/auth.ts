import {z} from 'zod'

export const RegisterSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3).max(255),
    studentId: z.string().min(7).max(7).refine((val) => !isNaN(val as unknown as number), {message: "Invalid Student ID"}),
    year: z.string().min(2).max(10),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
})