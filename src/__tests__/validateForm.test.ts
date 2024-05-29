import { validateForm } from '@/validation/validateForm';

describe('validateForm', () => {
  test('returns true for valid form data', () => {
    const formData = {
      email: 'test@example.com',
      password: 'password',
      isSignUp: true,
    };
    const { isValid } = validateForm(formData);
    expect(isValid).toBe(true);
  });

  test('returns false for invalid email', () => {
    const formData = {
      email: 'invalid-email',
      password: 'password',
      isSignUp: true,
    };
    const { isValid, errors } = validateForm(formData);
    expect(isValid).toBe(false);
    expect(errors.email).toBeDefined();
  });
});
