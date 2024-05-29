import { z } from 'zod';

import { type FormData, formSchema } from '@/models/schema';

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
