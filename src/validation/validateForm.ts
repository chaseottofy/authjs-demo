import { z } from 'zod';
import { formSchema, type FormData } from '@/models/schema'
/*
Getting testing error:
Test suite failed to run

    Cannot find module '@/models/schema' from 'src/validation/validateForm.ts'

jest is unable to resolve paths, is there a way around this?

*/
// // import { FormData } from './LogInForm'; // Adjust the import path based on your directory structure
// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
//   isSignUp: z.boolean(),
// });
// export type FormData = z.infer<typeof formSchema>;
export const validateForm = (formData: FormData) => {
  try {
    formSchema.parse(formData);
    return { isValid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Partial<Record<keyof FormData, string>> = {};
      error.errors.forEach((err) => {
        errors[
          err.path[0] as keyof FormData
        ] = err.message;
      });
      return { isValid: false, errors };
    }
    return { isValid: false, errors: {} };
  }
};