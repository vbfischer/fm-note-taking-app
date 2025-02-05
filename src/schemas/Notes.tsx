import { z } from 'zod';
import { zfd } from "zod-form-data";

export const NotesFormSchema = zfd.formData({
    title: zfd.text(z.string().min(1, { message: "Please enter a title" })),
    tags: zfd.text(z.string()),
    content: zfd.text(z.string().min(1, { message: "Please enter some content" }))
})

export type NotesForm = z.infer<typeof NotesFormSchema>

