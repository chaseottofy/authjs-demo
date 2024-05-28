// import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogInForm from '@/components/LogInForm/LogInForm';

describe('MyForm', () => {
  test('renders form fields correctly', () => {
    render(<LogInForm />);
    // screen.debug();
    expect(screen.getByLabelText('email *')).toBeInTheDocument();
    expect(screen.getByLabelText('password *')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'sign-up' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'log-in' })).toBeInTheDocument();
  });
});
//   // test('validates form on submission', async () => {
//   //   render(<LogInForm />);
//   //   screen.debug()
//   //   // render(LogInForm);
//   //   // fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
//   //   // expect(await screen.findByText('Email is required')).toBeInTheDocument();
//   //   // expect(screen.getByText('Password is required')).toBeInTheDocument();
//   // });

//   // Add more test cases as needed
// });