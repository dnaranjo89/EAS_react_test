import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ParticipantsWithEmailSection from './ParticipantsWithEmailSection.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';

const mockOnSubmit = jest.fn();

describe('ParticipantsWithEmailSection', () => {
  it('should add participants', async () => {
    const onFieldChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection participants={[]} onFieldChange={onFieldChangeMock} />
      </ValidationProvider>,
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'David');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo89@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onFieldChangeMock).toHaveBeenCalledWith('participants', [
      { name: 'David', email: 'dnaranjo89@gmail.com' },
    ]);
  });
  it('should show an error when an email already exists in the list of participants', async () => {
    const onFieldChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection
          participants={[{ name: 'David', email: 'dnaranjo89@gmail.com' }]}
          onFieldChange={onFieldChangeMock}
        />
      </ValidationProvider>,
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'Pepito');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo89@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onFieldChangeMock).not.toHaveBeenCalled();
    expect(screen.getByText(/error_email_already_registered/)).toBeInTheDocument();
  });

  it('should show an error when a name already exists in the list of participants', async () => {
    const onFieldChangeMock = jest.fn();

    render(
      <ValidationProvider onSubmit={mockOnSubmit}>
        <ParticipantsWithEmailSection
          participants={[{ name: 'David', email: 'dnaranjo89@gmail.com' }]}
          onFieldChange={onFieldChangeMock}
        />
      </ValidationProvider>,
    );

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    await userEvent.type(nameInput, 'David');

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'dnaranjo892@gmail.com');

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onFieldChangeMock).not.toHaveBeenCalled();
    expect(screen.getByText(/error_name_already_registered/)).toBeInTheDocument();
  });
});
